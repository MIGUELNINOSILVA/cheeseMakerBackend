const {
      Router
} = require('express');
const {
      check
} = require('express-validator');

const {
      validateDocuments
} = require('../middlewares/validate.documents.js');
const {
      validateJWT
} = require('../middlewares/validate.jwt.js');

const {
      postCategoria,
      getCategorias,
      getOneCategoria,
      deleteCategoria,
      putCategoria
} = require('../controllers/categoria.controllers.js');
const { isAdminRole } = require('../middlewares/validate.role.js');


const router = Router();

/**
 * localhost/api/categorias
 */
router.get('/',getCategorias);
router.get('/:id',getOneCategoria);


// Crear categoria - privado - cualquier persona con un token válido
router.post('/', [
      validateJWT,
      check('nombre', 'El nombre es obligatorio').not().isEmpty(),
      validateDocuments
], postCategoria);

router.delete('/:id', [
      validateJWT,
      isAdminRole,
      check('id', 'No es un ObjectId mongoDB válido').isMongoId(),
      validateDocuments
],deleteCategoria)

router.put('/:id',[
      validateJWT,
      check('id', 'No es un ObjectId MongoDB válido').isMongoId(),
      validateDocuments
], putCategoria);



module.exports = router;