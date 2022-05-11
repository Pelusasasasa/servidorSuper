const {Router} = require('express');
const router = Router();

const {tamanio,traerProducto,traerPrecio,cargarProducto,eliminarProducto,getsProductos,modificarProducto,traerProductoPorNombre} = require('../controllers/producto.controllers');

router.route('/')
    .get(tamanio)
    .post(cargarProducto)
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
