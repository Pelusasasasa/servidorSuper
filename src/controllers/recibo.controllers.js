const reciboCTRL = {};

const Recibo = require('../models/Recibo');


reciboCTRL.cargarRecibo = async(req,res)=>{
    const id = (await Recibo.find().sort({$natural:-1}).limit(1))[0]._id;
    req.body._id = id + 1;
    console.log(req.body)
    const nuevoRecibo = new Recibo(req.body);
    await nuevoRecibo.save();
    res.send(`Recibo ${req.body._id} cargado`)
}

module.exports = reciboCTRL;