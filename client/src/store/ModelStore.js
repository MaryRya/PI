import {makeAutoObservable} from "mobx";

export default class ModelStore{
    constructor() {
        this._types = [
            {id: 1, name:'Джинсы'},
            {id: 2, name:'Юбки'},
            {id: 3, name:'Кофты'},
            {id: 4, name:'Футболки'},
            {id: 5, name:'Платья'}
        ]
        this._brands= [
            {id: 1, name:'Bershka'},
            {id: 2, name:'Mango'},
            {id: 3, name:'H&M'},
            {id: 4, name:'Zara'},
            {id: 5, name:'Zolla'}
        ]
        this._models = [
            {id: 1, name:'Кардиган', price: 3000, rating: 0, img: '8ad234c6-ed6e-4c92-843e-50658d722ded.jpg'},
            {id: 2, name:'Mom Джинсы', price: 2000, rating: 0, img: 'c180f307-e1e0-4657-bf07-51deb370eaa6.jpg'},
            {id: 3, name:'Клетчатая юбка', price: 1600, rating: 0, img: 'fd5e0bdd-93b5-4bd0-804f-23eed1aea8c0.jpg'},
            {id: 4, name:'Футболка с вырезом', price: 1100, rating: 0, img: '1e35fa2d-e59b-48d4-974d-ab236a42b458.jpg'},
            {id: 5, name:'Платье черьное с поясом', price: 2300, rating: 0, img: '8251b1c6-f028-451e-bc7f-e8240f55f8e2.jpg'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setModels(models){
        this._models = models
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get models(){
        return this._models
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}