const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
   vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
   entryTime: { type: Date, required: true },
   exitTime: { type: Date },
   totalTime: { type: Number },
   amount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Record', recordSchema);
