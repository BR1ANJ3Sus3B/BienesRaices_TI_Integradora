import express from "express";
import { 
    formularioLogin, 
    formularioRegistro, 
    registrar, 
    confirmar, 
    formularioOlvidePassword, 
    resetPassword, 
    comprobarToken, 
    nuevoPassword, 
    autenticar, 
    cerrarSesion, 
    mostrarUsuario 
} from "../controllers/usuarioController.js";

const router = express.Router();

// Routing para login
router.get('/login', formularioLogin);
router.post('/login', autenticar);

// Cerrar sesión
router.post('/cerrar-sesion', cerrarSesion);

// Registro de usuario
router.get('/registro', formularioRegistro);
router.post('/registro', registrar);

// Confirmar cuenta
router.get('/confirmar/:token', confirmar);

// Olvidar contraseña
router.get('/olvide-password', formularioOlvidePassword);
router.post('/olvide-password', resetPassword);
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);

// Perfil del usuario
router.get('/usuario', mostrarUsuario);

export default router;
