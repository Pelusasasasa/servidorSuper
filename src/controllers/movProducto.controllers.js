const movimientoCTRL = {}

const movProducto = require('../models/movProducto');

movimientoCTRL.id = async(req,res)=>{
    const tamanio = (await movProducto.find()).length;
    const id = (await movProducto.find({_id:tamanio},{_id:1}))[0];
    if (!id) {
        res.send(`1`);
    }else{
        res.send(`${id._id + 1}`);
    }
};

movimientoCTRL.cargar = async(req,res)=>{
    const movimiento = new movProducto(req.body);
    await movimiento.save();
    res.send(`Movimiento ${movimiento._id} cargado`);
}

movimientoCTRL.porId = async(req,res)=>{
    const {id} = req.params
    const movimientos = await movProducto.find({nro_venta:id});
    res.send(movimientos)
}

movimientoCTRL.porRubro = async(req,res)=>{
    const {rubro,desde,hasta} = req.params;
    const productos = await movProducto.find({
        $and:[
            {rubro:rubro},
            {fecha:{$gte:desde}},
            {fecha:{$lte:hasta}}
        ]
    });
    res.send(productos)
}

module.exports = movimientoCTRL;