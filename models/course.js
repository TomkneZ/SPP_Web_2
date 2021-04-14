var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CourseSchema = new Schema({
    name: { type: String, required: true },
    unique_code: { type: Number, required: true },
    is_active: { type: Boolean, requierd: true },
    professor: { type: Schema.ObjectId, ref: 'Professor' }
});

module.exports = mongoose.model('Course', CourseSchema);