const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    employeeId: String,
    name: String,
    date: Date,
    loginTime: Date,
    logoutTime: Date,
    status: String
});

module.exports = mongoose.model('Attendance', AttendanceSchema);