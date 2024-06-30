const Employee = require('../models/Employee');
const Admin = require('../models/admin');
exports.createEmployee = (employeeData) => {
    return Employee.findOne({ password: employeeData.password })
        .then(existingEmployee => {
            if (existingEmployee) {
                throw new Error('Password already in use');
            }
            const employee = new Employee(employeeData);
            return employee.save();
        });
};
exports.loginEmployee = (employeeData) => {
    return Employee.findOne({ name: employeeData.name, password: employeeData.password })
        .then(existingEmployee => {
            if (!existingEmployee) {
                throw new Error('Invalid name or password');
            }
            return existingEmployee;
        });
};

exports.loginAdmin = (adminData) => {
    return Admin.findOne({ name: adminData.name, password: adminData.password })
        .then(existingAdmin => {
            if (!existingAdmin) {
                throw new Error('Invalid name or password');
            }
            return existingAdmin;
        });
};

exports.getAllEmployees = () => {
    return Employee.find({})
        .then(employees => {
            return employees;
        })
        .catch(err => {
            throw new Error(err);
        });
};

exports.createAdmin = (adminData) => {
    return Admin.findOne({ password: adminData.password })
        .then(existingAdmin => {
            if (existingAdmin) {
                throw new Error('Password already in use');
            }
            const admin = new Admin(adminData);
            return admin.save();
        });
};

exports.addLeave = (employeeId, leave) => {
    return Employee.findById(employeeId)
        .then(employee => {
            if (!employee) {
                throw new Error('Employee not found');
            }
            employee.addLeave(leave);
        });
};
