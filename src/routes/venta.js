const {Router} = require('express');
const router = Router();


const {getVenta,modificarVenta,cargarVenta,VentasDia,ventasMes,ventaAnio} = require('../controllers/venta.controllers');

router.route('/')
    .post(cargarVenta)
router.route('/id/:id/:tipo')
    .get(getVenta)
    .put(modificarVenta)
router.route('/dia/:fecha')
    .get(VentasDia)
router.route('/mes/:fecha')
    .get(ventasMes)
router.route('/anio/:fecha')
    .get(ventaAnio)

module.exports = router;