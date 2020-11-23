/*
    Rutas de Usuarios
    host + /api/auth
*/


const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


router.post(
    '/new', 
    [ //MIDDLEWARES
        check('user_name', 'El nombre de usuario es obligatorio').not().isEmpty(),
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        check('grade', 'El grado es obligatorio').not().isEmpty(),
        check('institution', 'La institucion es obligatorio').not().isEmpty(),
        validarCampos
    ], 
    crearUsuario 
);

router.post(
    '/',
    [
        check('user_name', 'El nombre de usuario es obligatorio').not().isEmpty(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ], 
    loginUsuario
);

router.get('/renew', validarJWT, revalidarToken);

module.exports = router;