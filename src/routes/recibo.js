const {Router} = require('express');
const router = Router();

const {id,cargarRecibo}= require('../controllers/recibo.controllers');


router.route('/')
    .get(id)
    .post(cargarRecibo)


module.exports = router;