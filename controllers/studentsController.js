var Student = require('../models/student');
var School = require('../models/school');
var SchoolType = require('../models/schooltype');

exports.get_active_students = function (req, res) {
    Student.find({ is_account_active: true }, function (err, docs) {
        if (err) return console.log(err);
        res.send(docs);
    });
};

exports.get_school_active_students = function (req, res) {
    School.findOne({ name: req.params.school }, function (err, school) {
        if (err) console.log(err);

        Student
            .find({ school: school._id, is_account_active: true })
            .exec(function (err, students) {
                if (err) console.log(error);
                res.send(students);
            });
    });    
};

exports.add_student = function (req, res) {
    var student = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        is_account_active: req.body.is_account_active
    });
    student.save(function (err) {
        if (err) return console.log(err);
        res.send(`model ${student} was added`)
    });
};
