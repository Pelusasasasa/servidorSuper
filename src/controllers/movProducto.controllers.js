const movimientoCTRL = {}

const movProducto = require('../models/movProducto');

movimientoCTRL.modificarVarios = async(req,res)=>{
    
}

movimientoCTRL.cargar = async(req,res)=>{
    let ultimoID = (await movProducto.find().sort({$natural:-1}).limit(1))[0]._id;
    console.log(`ID inicial del movimiento es: ${ultimoID}`);
    console.log(req.body)
    for await(let movimiento of req.body){
        ultimoID++;
        movimiento._id = ultimoID;
        const movimientoAGuardar = new movProducto(movimiento);
        await movimientoAGuardar.save();
        console.log(`Movimiento con el id: ${movimiento._id} --- ${movimiento.producto} Cargado`);
    }
    res.send(`Movimientos cargados`);
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