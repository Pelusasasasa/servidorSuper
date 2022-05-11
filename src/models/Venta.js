const {Schema,model} = require('mongoose');

const Venta = new Schema({
    _id:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        default: Date.now
    }
    ,
    cliente:{
        type:String,
        default:"Consumidor Final"
    },
    idCliente:{
        type:String,
        default: "0"
    },
    numero:{
        type:Number,
        required:true
    },
    listaProductos:{
        type:[],
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    descuento:{
        type:Number,
        default: 0
    },
    tipo_venta:{
        type: String,
        default: "CC"  
    }
});

module.exports = model('Venta',Venta);