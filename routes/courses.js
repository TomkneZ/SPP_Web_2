var express = require('express');
const { route } = require('.');

var router = express.Router();

var controller = require('../controllers/coursesController');

router.post('/addcourse', controller.add_course);

router.post('/addstudenttocourse', controller.add_student_to_course);

router.delete('/deletestudentfromcourse', controller.delete_student_from_course);

module.exports = router;