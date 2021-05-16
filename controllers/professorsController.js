var Professor = require('../models/professor');
var Course = require('../models/course');
var School = require('../models/school');
var SchoolType = require('../models/schooltype');

exports.get_active_professors = function (req, res) {
    Professor.find({ is_account_active: true }, function (err, docs) {
        if (err) console.log(err);
        res.send(docs);
    })
};

exports.get_professor_active_courses = function (req, res) {
    Professor.findOne({ email: req.params.professor }, function (err, professor) {
        if (err) console.log(err);

        Course
            .find({ professor: professor._id, is_active: true })
            .exec(function (err, courses) {
                if (err) console.log(error);
                res.send(courses);
            });
    });
};

exports.edit_professor = function (req, res) {
    res.send('NOT IMPLEMENTED: Edit professor');
};

exports.add_professor = function (req, res) {
    var professor = new Professor({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        is_account_active: req.body.is_account_active
    });
    professor.save(function (err) {
        if (err) return console.log(err);
        res.send(`model ${professor} was added`)
    });
};
