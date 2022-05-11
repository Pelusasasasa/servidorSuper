const {Router} = require('express');
const router = Router();

const {getsClientes,cargarCliente,id,getClienteId,eliminarCliente,modificarCliente} = require('../controllers/cliente.controllers');

router.route('/')
    .get(id)
    .post(cargarCliente)

router.route('/buscar/:nombre')
    .get(getsClientes)

router.route('/id/:id')
    .get(getClienteId)
    .delete(eliminarCliente)
    .put(modificarCliente)

module.exports = router;