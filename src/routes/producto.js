const {Router} = require('express');
const router = Router();

const {traerProducto,descontarStock,traerPrecio,cargarProducto,eliminarProducto,getsProductos,modificarProducto,traerProductoPorNombre} = require('../controllers/producto.controllers');

router.route('/')
    .post(cargarProducto)
    .put(descontarStock)
router.route('/traerPrecio/:id')
    .get(traerPrecio)
router.route('/:id')
    .get(traerProducto)
    .delete(eliminarProducto)
    .put(modificarProducto)
router.route('/:descripcion/:condicion')
    .get(getsProductos)
router.route('/buscar/porNombre/:nombre')
    .get(traerProductoPorNombre)
module.exports = router;
    