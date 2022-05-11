const reciboCTRL = {};

const Recibo = require('../models/Recibo');

reciboCTRL.id = async(req,res) =>{
    const ultimoRecibo = (await Recibo.find()).length;
    const id = (await Recibo.find({_id:ultimoRecibo},{_id:1}))[0];
    if (id === undefined) {
        res.send("1");
    }else{
        res.send(`${id._id + 1}`);
    }  
};

reciboCTRL.cargarRecibo = async(req,res)=>{
    const nuevoRecibo = new Recibo(req.body);
    await nuevoRecibo.save();
    res.send(`Recibo ${req.body._id} cargado`)
}

module.exports = reciboCTRL;