const compensadaCTRL = {};

const CuentaCompensada = require('../models/cuentaCorrComp');

compensadaCTRL.id = async(req,res)=>{
    const tamanio = (await CuentaCompensada.find()).length;
    const id = (await CuentaCompensada.find({_id:tamanio},{_id:1}))[0];
    if (id) {
        res.send(`${id._id + 1}`);
    }else{
        res.send(`1`);
    }    
};

compensadaCTRL.crearCompensda = async(req,res)=>{
    const nuevaCompensada = new CuentaCompensada(req.body);
    await nuevaCompensada.save();
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