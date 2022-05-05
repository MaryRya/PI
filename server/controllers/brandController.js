const {Brand, Type} = require('../models/models')
const ApiError = require('../error/ApiError')
class BrandController{
    async create(req, res){
        const {brand} = req.body
        const type = await Brand.create({name})
        return res.json(brand)
    }
    async getAll(req, res){
        const brands = await Type.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()