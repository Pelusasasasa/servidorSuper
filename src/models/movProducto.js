const {model,Schema} = require('mongoose');

const movProducto = new Schema({
    _id:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        default: Date.now
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
        type:String,
        required:true,
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

module.exports = model('MovProducto',movProducto);