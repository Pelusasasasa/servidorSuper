const mongoose = require('mongoose');

const movProducto = new mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        default: Date.now
    },
    tipo_venta:{
        type:"String"
    },
    cliente:{
        type:String,
        default:""
    },
    marca:{
        type:String,
        default:""
    },
    codProd:{
        type:String,
        default:""
    },
    producto:{
        type:String
    },
    rubro:{
        type:String,
        default:""
    },
    cantidad:{
        type:Number,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    nro_venta:{
        type:String,
        required:true
    }  
});

module.exports = mongoose.model('MovProducto',movProducto);