
const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    contactInfo: String,
    password: String,
    role: { type: String, default: 'admin' },
 
});

module.exports = mongoose.model('admin', AdminSchema);