const {Router} = require('express');
const {check} = require('express-validator');
const {validateDocuments} = require('../middlewares/validate.documents.js');
const {validateJWT} = require('../middlewares/validate.jwt.js');

const {getCheeses} = require('../controllers/cheese.controllers.js');

const router = Router();

router.get('/', getCheeses);

module.exports = router;