const clienteCTRL = {};

const Clientes = require('../models/Cliente');

clienteCTRL.getsClientes = async(req,res)=>{
    const {nombre} = req.params;
    let clientes
    if (nombre === "NADA" ) {
        clientes = await Clientes.find().sort({nombre:1}).limit(50);
    }else{
        const re = new RegExp(`^${nombre}`);
        clientes = await Clientes.find({nombre:{$regex: re,$options: "i"}}).sort({nombre:1}).limit(50);
    }
    res.send(clientes);
}

clienteCTRL.id = async(req,res)=>{
    const ultimoCliente = (await Clientes.find()).length;
    let id = (await Clientes.find({_id:ultimoCliente},{_id:1}))[0];
    id = id === undefined ? {_id:0} : id;
    res.send(`${id._id + 1}`);

}

clienteCTRL.getClienteId = async(req,res)=>{
    const {id} = req.params;
    const cliente = (await Clientes.find({_id:id}))[0];
    res.send(cliente);
}

clienteCTRL.cargarCliente = async(req,res)=>{
    req.body.nombre = req.body.nombre.toUpperCase();
    req.body.localidad !== "" && (req.body.localidad = req.body.localidad.toUpperCase());
    req.body.localidad !== "" && (req.body.direccion = req.body.direccion.toUpperCase());
    const cliente = new Clientes(req.body);
    await  cliente.save();
    res.send(`Cliente ${cliente.nombre} Cargado`);
}

clienteCTRL.modificarCliente = async(req,res)=>{
    const {id} = req.params;
    const cliente = await Clientes.findOneAndUpdate({_id:id},req.body);
    res.send(`Cliente ${cliente.nombre} Modificado`);
}

clienteCTRL.eliminarCliente = async(req,res) =>{
    const {id} = req.params;
    const cliente = await Clientes.findOneAndDelete({_id:id});
    res.send(`Cliente ${cliente.nombre} Eliminado`);
}


module.exports = clienteCTRL;