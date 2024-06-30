const employeeService = require('../Services/EmployeeService');
const mongoose = require('mongoose');
exports.createEmployee = (req, res) => {
    employeeService.createEmployee(req.body)
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send(err));
};
exports.loginEmployee = (req, res) => {
    employeeService.loginEmployee(req.body)
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send(err));
};
exports.loginAdmin = (req, res) => {
    employeeService.loginAdmin(req.body)
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send(err));
}
exports.getAllEmployees = (req, res) => {
    employeeService.getAllEmployees()
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send(err
        ));
};
exports.createAdmin = (req, res) => {
    employeeService.createAdmin(req.body)
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send(err));
};


exports.addLeave = (req, res) => {
    // Check if employeeId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.employeeId)) {
        return res.status(400).send('Invalid employeeId');
    }

    employeeService.addLeave(req.params.employeeId, req.body)
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send(err));
};




// Other methods...

