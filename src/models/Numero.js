const {Schema, model} = require('mongoose');

const Numero = new Schema({
    "Cuenta Corriente":Number,
    "Contado":Number,
    "Recibo":Number
});


module.exports = model('Numero',Numero)