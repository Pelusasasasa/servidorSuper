const compensadaCTRL = {};

const CuentaCompensada = require('../models/cuentaCorrComp');

compensadaCTRL.crearCompensda = async(req,res)=>{
    const ultimaCompensada = (await CuentaCompensada.find().sort({$natural:-1}).limit(1))[0];
    let id = ultimaCompensada ? ultimaCompensada._id : 0;
    req.body._id = id + 1; 
    const nuevaCompensada = new CuentaCompensada(req.body);
    await nuevaCompensada.save();
    console.log(`Compensdad ${req.body.nro_venta} creada`)
    res.send(`Compensdad ${req.body._id} creada`);
}

compensadaCTRL.traerPorCliente = async(req,res)=>{
    const {id} = req.params;
    const compensadas = await CuentaCompensada.find({idCliente:id});
    res.send(compensadas);
};

compensadaCTRL.traerCompensada = async(req,res)=>{
    const {id} = req.params;
    const compensada = (await CuentaCompensada.find({nro_venta:id}))[0];
    res.send(compensada); 
};

compensadaCTRL.modificarCompensada = async(req,res)=>{
    const {id} = req.params;
    const compensada = await CuentaCompensada.findOneAndUpdate({_id:id},req.body);
    res.send(`Cuenta ${id} Modificada`)
}


compensadaCTRL.eliminarCuenta = async(req,res)=>{
    const {id} = req.params;
    const compensada = await CuentaCompensada.findOneAndDelete({_id:id});
    res.send(`Cuenta ${id} Eliminada`);
}
module.exports = compensadaCTRL;