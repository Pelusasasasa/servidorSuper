const {Schema,model} = require('mongoose');

const Cliente = new Schema({
    _id:Number,
    nombre:String,
    telefono:{
        type:String,
        default:""
    },
    direccion:{
        type:String,
        default:""
    },
    localidad:{
        type:String,
        default:""
    },
    listaVentas:[],
    saldo:{
        type: Number,
        default: 0
    },
    condicionFacturacion:{
        type:Number,
        default:1
    }
});

module.exports = model('Cliente',Cliente);