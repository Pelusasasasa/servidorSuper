const rubroCTRL = {};

const Rubros = require('../models/Rubro');

rubroCTRL.getsRubros = async(req,res)=>{
    const rubros = await Rubros.find();
    res.send(rubros);
};

rubroCTRL.postRubro = async(req,res)=>{
    const rubro = new Rubros(req.body);
    await rubro.save();
    console.log(`Rubro ${rubro.rubro} Cargado`);
    res.send(`Rubro ${rubro.rubro} Cargado`);
}


module.exports = rubroCTRL;

