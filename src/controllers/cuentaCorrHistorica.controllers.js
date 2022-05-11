const historicaCTRL = {};

const Historica = require('../models/cuentaCorrHisto');

historicaCTRL.id = async(req,res)=>{
    const tamanio = (await Historica.find()).length;
    const id = (await Historica.find({_id:tamanio},{_id:1}))[0];
    if (id) {
        res.send(`${id._id + 1}`);
    }else{
        res.send(`1`);
    }
}

historicaCTRL.cargarHistorica = async(req,res)=>{
    const historica = new Historica(req.body);
    await historica.save();
    console.log("a")
    res.send(`Historica ${req.body._id} Guardada`);
};

historicaCTRL.traerHistoricaPorCliente = async(req,res)=>{
    const {id} = req.params;
    const historicas = await Historica.find({idCliente:id});
    res.send(historicas);
}

historicaCTRL.traerHistorica = async(req,res)=>{
    const {id} = req.params;
    const historica = await Historica.find({_id:id});
    res.send(historica[0]);
}

historicaCTRL.modificarHistorica = async(req,res)=>{
    const {id} = req.params;
    const historica = await Historica.findOneAndUpdate({_id:id},req.body);
    res.send(`historica ${id} modificada`);
};

module.exports = historicaCTRL;
