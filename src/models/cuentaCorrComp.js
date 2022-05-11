const { model,Schema} = require('mongoose');

const CuentaCompensada = new Schema({
    _id:{
        type:Number,
        required:true
    },
    idCliente:{
        type:String,
        required:true
    },
    cliente:{
        type:String,
        required:true
    },
    nro_venta:{
        type:Number,
        required:true
    },
    importe:{
        type:Number,
        required:true
    },
    pagado:{
        type:Number,
        default:0
    },
    fecha:{
        type:Date,
        default: Date.now
    },
    saldo:{
        type: Number,
        required: true
    }
});

module.exports = model("CuentaCompensada",CuentaCompensada);