const uuid = require('uuid')
const path = require('path');
const {Model, ModelInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class ModelController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const model = await Model.create({name, price, brandId, typeId, img: fileName})
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ModelInfo.create({
                        title: i.title,
                        description: i.description,
                        modelId: model.id
                    })
                )
            }
            return res.json(model)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let models;
        if (!brandId && !typeId) {
            models = await Model.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            models = await Model.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            models = await Model.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            models = await Model.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(models)
    }

    async getOne(req, res) {
        const {id} = req.params
        const model = await Model.findOne(
            {
                where: {id},
                include: [{model: ModelInfo, as: 'info'}]
            },
        )
        return res.json(model)
    }
}

module.exports = new ModelController()
