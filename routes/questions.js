var express = require('express');
var router = express.Router();

var questionController = require('../controllers/questionController');


router.get('/', questionController.question_get);
router.post('/', questionController.question_post);
router.put('/', questionController.question_put);
router.delete('/', questionController.question_delete);

module.exports = router;
