const reciboCTRL = {};

const Recibo = require('../models/Recibo');


reciboCTRL.cargarRecibo = async(req,res)=>{
    const id = (await Recibo.find().sort({$natural:-1}))
    const nuevoRecibo = new Recibo(req.body);
    await nuevoRecibo.save();
    res.send(`Recibo ${req.body._id} cargado`)
}

module.exports = reciboCTRL;