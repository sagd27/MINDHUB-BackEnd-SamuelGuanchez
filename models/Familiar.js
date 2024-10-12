import { Schema, model } from "mongoose";

let collection = 'familiar'
let schema = new Schema({
        name: {type: String, required: true},
        apellido: {type: String, required: true},
        edad: {type: String, required: true},
        cedula: {type: String, required: true},
        comidaFavorita: {type: String, required: true},
        altura: {type: String, required: true},
        peso: {type: String, required: true},
        tieneCarro: {type: Boolean, required: true},
        tieneMoto: {type: Boolean, required: true},
        direcion: {type: String, required: true},
})

let Familiar =  model(collection,schema)
export default Familiar;