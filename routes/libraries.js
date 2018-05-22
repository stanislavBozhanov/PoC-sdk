var express = require('express');
var router = express.Router();

var libraryController = require('../controllers/libraryController');


router.get('/', libraryController.library_get);
router.post('/', libraryController.library_post);
router.put('/', libraryController.library_put);
router.delete('/', libraryController.library_delete);

module.exports = router;
