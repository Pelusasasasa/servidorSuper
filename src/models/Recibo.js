const {model,Schema} = require('mongoose');

const Recibo = new Schema({
    _id: {
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        default: Date.now
    },
    cliente:{
        type:String,
        required:true
    },
    idCliente:{
        type:String,
        required:true
    },
    numero:{
        type:Number,
        required:true
    },
    precio:{
        type: Number,
        required:true
    },
    descuento:{
        type:Number,
        default:0
    },
    tipo_comp:{
        type:String,
        default:""
    }
});

module.exports = model("Recibo",Recibo);