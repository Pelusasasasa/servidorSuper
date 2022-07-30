const movimientoCTRL = {}

const movProducto = require('../models/movProducto');

movimientoCTRL.modificarVarios = async(req,res)=>{
    const arreglo = req.body;
    for await(let movimiento of arreglo){
        await movProducto.findByIdAndUpdate({_id:movimiento._id},movimiento);
        console.log(`movimiento con el ID: ${movimiento._id} Modificado`);
    }
    res.send("moviemientos modificados");
}

movimientoCTRL.cargar = async(req,res)=>{
    let ultimoID = (await movProducto.find({},{_id:1}));
    let arreglo = ultimoID.map((e)=>{
        return e._id;
    });
    let id = Math.max(...arreglo)
    id = id ? id : 1;
    console.log(`ID inicial del movimiento es: ${id}`);
    for await(let movimiento of req.body){
        id++;
        movimiento._id = id;
        const movimientoAGuardar = new movProducto(movimiento);
        await movimientoAGuardar.save();
        console.log(`Movimiento con el id: ${movimiento._id} --- ${movimiento.producto} Cargado`);
    }
    res.send(`Movimientos cargados`);
}

movimientoCTRL.porId = async(req,res)=>{
    const {id,tipoVenta} = req.params
    const movimientos = await movProducto.find({nro_venta:id,tipo_venta:tipoVenta});
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