import { Schema, model } from "mongoose";


let collection = 'Mascotas'
let schema = new Schema({
        nombre: {type: String, required: true},
        raza: {type: String, required: true},
        color: {type: String,required: true},
        vacunado: {type: Boolean,required: true},
        edad: {type: Number,required: true},
        sexo: {type: String,required: true},
        peso: {type: Number,required: true},
        altura: {type: Number,required: true},
        tipoPelaje: {type: String,required: true},
        ultimaConsulta: {type: Date,required: true},
        nombreDueño: {type: String,required: true},
       



})


let Mascota = model(collection, schema)

export default Mascota;