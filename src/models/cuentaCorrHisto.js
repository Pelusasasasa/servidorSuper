const {model,Schema} = require('mongoose');

const Historica = new Schema({
    _id:{
        type: Number,
        required:true
    },
    idCliente:{
        type:String,
        required:true
    },
    cliente:{
        type:String,
        required: true
    },
    nro_venta:{
        type:Number,
        required:true,
    },
    debe:{
        type:Number,
        default: 0
    },
    haber:{
        type:Number,
        default: 0
    },
    saldo:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        default: Date.now
    }
});

module.exports = model("Historica",Historica);