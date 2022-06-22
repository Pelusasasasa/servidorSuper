const {Schema,model} = require('mongoose');

const Producto = new Schema({
    _id:{
        type: String,
        required:true
    },
    descripcion:{
        type: String,
        required:true
    },
    marca:{
        type: String,
    },
    rubro:{
        type:String,
        default:""
    },
    stock:{
        type: Number,
        required: true
    },
    costo:{
        type: Number,
        required: true
    },
    impuesto:{
        type:Number,
        default: 0
    },
    ganancia:{
        type: Number,
        required:true
    },
    precio:{
        type:Number,
        required:true
    }


});

module.exports = model('Producto',Producto);