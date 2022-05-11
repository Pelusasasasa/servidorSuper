const {Router} = require('express');
const router = Router();

const {id,cargarHistorica,traerHistoricaPorCliente,traerHistorica,modificarHistorica} = require('../controllers/cuentaCorrHistorica.controllers');


router.route('/')
    .get(id)
    .post(cargarHistorica)
router.route('/traerPorCliente/:id')
    .get(traerHistoricaPorCliente)
router.route('PorId/id/:id')
    .get(traerHistorica)
    .post(modificarHistorica)

module.exports = router;