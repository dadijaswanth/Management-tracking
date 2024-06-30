const mongoose = require('mongoose');

const LeaveSchema = new mongoose.Schema({
    employeeId: String,
    dateFrom: Date,
    dateTo: Date,
    reason: String,
    approved: Boolean
});

module.exports = mongoose.model('Leave', LeaveSchema);