var express = require('express');
var router = express.Router();

var questionGroupController = require('../controllers/questionGroupController');


router.get('/', questionGroupController.questionGroup_get);
router.post('/', questionGroupController.questionGroup_post);
router.put('/', questionGroupController.questionGroup_put);
router.delete('/', questionGroupController.questionGroup_delete);

module.exports = router;
