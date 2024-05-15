const mongoose = require('mongoose');

const pastTripSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vehicleImage: { type: String, required: true },
  dateTime: { type: Date, default: Date.now },
  destination: { type: String, required: true },
  totalAmount: { type: Number, required: true }
});

const PastTrip = mongoose.model('trip', pastTripSchema);

module.exports = PastTrip;
