var Professor = require('../models/professor');
var Course = require('../models/course');

exports.add_course = function (req, res) {  
    var course = new Course({ name: 'OOP', unique_code: 123 });
    course.save(function (err) {
        if (err) return console.log(err);
        res.send(`model ${course} was added`);
    });   
};

exports.get_active_courses = function (req, res) {
    Course.find({is_active: true}, function (err, docs) {
        if (err) return console.log(err);
        res.send(docs);
    })
};

exports.add_student_to_course = function (req, res) {
    res.send('NOT IMPLEMENTED: Add student to course');
};

exports.delete_student_from_course = function (req, res) {
    res.send('NOT IMPLEMENTED: Delete student from course');
};