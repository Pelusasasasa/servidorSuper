const {Router} = require('express');
const router = Router();

const {getsRubros, postRubro} = require('../controllers/rubro.controllers');

router.route('/')
    .get(getsRubros)
    .post(postRubro)

module.exports = router;