const {Router} = require('express');
const router = Router();

const {cargarRecibo,recibosDia,recibosMes}= require('../controllers/recibo.controllers');


router.route('/')
    .post(cargarRecibo)
router.route('/dia/:fecha')
    .get(recibosDia)
router.route('/mes/:fecha')
    .get(recibosMes)

module.exports = router;