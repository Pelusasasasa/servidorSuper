const historicaCTRL = {};

const Historica = require('../models/cuentaCorrHisto');


historicaCTRL.cargarHistorica = async(req,res)=>{
    const ultimaHistorica = (await Historica.find().sort({$natural:-1}).limit(1))[0];
    let id = ultimaHistorica ? ultimaHistorica._id : 0;
    req.body._id = id + 1; 
    const historica = new Historica(req.body);
    await historica.save();
    console.log(`Historica ${req.body.nro_venta} Guardada`)
    res.send(`Historica ${req.body._id} Guardada`);
};

historicaCTRL.traerHistoricaPorCliente = async(req,res)=>{
    const {id} = req.params;
    const historicas = await Historica.find({idCliente:id});
    res.send(historicas);
}

historicaCTRL.traerHistorica = async(req,res)=>{
    const {id} = req.params;
    const historica = await Historica.find({nro_venta:id});
    res.send(historica[0]);
}

historicaCTRL.modificarHistorica = async(req,res)=>{
    const {id} = req.params;
    const historica = await Historica.findOneAndUpdate({_id:id},req.body);
    res.send(`historica ${id} modificada`);
};

module.exports = historicaCTRL;
