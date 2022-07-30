const compensadaCTRL = {};

const CuentaCompensada = require('../models/cuentaCorrComp');

compensadaCTRL.crearCompensda = async(req,res)=>{
    const ultimaCompensada = (await CuentaCompensada.find({},{_id:1}));
    let arreglo = ultimaCompensada.map((e)=>{
        return e._id
    });

    let id = Math.max(...arreglo)
    id = id === undefined ? 0 : id;
    console.log(id)
    req.body._id = id + 1; 
    const nuevaCompensada = new CuentaCompensada(req.body);
    await nuevaCompensada.save();
    console.log(`Compensdad ${req.body.nro_venta} creada`)
    res.send(`Compensdad ${req.body._id} creada`);
}

compensadaCTRL.traerPorCliente = async(req,res)=>{
    const {id} = req.params;
    const compensadas = await CuentaCompensada.find({$and:[{idCliente:id},{saldo:{$not:{$eq:0}}}]});
    res.send(compensadas);
};

compensadaCTRL.traerCompensada = async(req,res)=>{
    const {id} = req.params;
    const compensada = (await CuentaCompensada.find({nro_venta:id}))[0];
    res.send(compensada); 
};

compensadaCTRL.modificarCompensada = async(req,res)=>{
    const {id} = req.params;
    delete req.body._id;
    const compensada = await CuentaCompensada.findOneAndUpdate({nro_venta:id},req.body);
    console.log(`Compensada ${id} Modificada`)
    res.send(`Compensada ${id} Modificada`)
}


compensadaCTRL.eliminarCuenta = async(req,res)=>{
    const {id} = req.params;
    const compensada = await CuentaCompensada.findOneAndDelete({_id:id});
    res.send(`Cuenta ${id} Eliminada`);
}
module.exports = compensadaCTRL;