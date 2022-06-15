const {Router} = require('express');
const router = Router();


const {id,getVenta,modificarVenta,cargarVenta,eliminarVenta,VentasDia,ventasMes,ventaAnio} = require('../controllers/venta.controllers');

router.route('/')
    .post(cargarVenta)
    .get(id)
router.route('/id/:id/:tipo')
    .get(getVenta)
    .put(modificarVenta)
    .delete(eliminarVenta)
router.route('/dia/:fecha')
    .get(VentasDia)
router.route('/mes/:fecha')
    .get(ventasMes)
router.route('/anio/:fecha')
    .get(ventaAnio)

module.exports = router;