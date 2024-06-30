const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    employeeId: String,
    district: String,
    contactNo: String,
    password: String,
    role: { type: String, default: 'employee' },
    attendance: [{
        name: String,
        date: Date,
        loginTime: Date,
        logoutTime: Date,
        status: String
    }],
    leaves: [{
        dateFrom: Date,
        dateTo: Date,
        reason: String,
        approved: Boolean
    }]
});

EmployeeSchema.methods.addLeave = function (leave) {
    this.leaves.push(leave);
    return this.save();
};

module.exports = mongoose.model('Employee', EmployeeSchema);