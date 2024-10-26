const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
   plate: { type: String, required: true },
   type: { type: String, required: true },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);