const {Router} = require('express');
const router = Router();

const {cargarRecibo}= require('../controllers/recibo.controllers');


router.route('/')
    .post(cargarRecibo)


module.exports = router;