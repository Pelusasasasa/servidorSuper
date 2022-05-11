const {Router} = require('express');
const router = Router();

const {id,cargar,porId,porRubro} = require('../controllers/movProducto.controllers');

router.route('/')
    .get(id)
    .post(cargar)
router.route('/:id')
    .get(porId)
router.route('/rubro/:rubro/:desde/:hasta')
    .get(porRubro)
module.exports = router;