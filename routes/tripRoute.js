const express = require('express');
const router = express.Router();
const PastTrip = require('../models/PastTrip');

// Create a new past trip
router.post('/', async (req, res) => {
  try {
    const pastTrip = await PastTrip.create(req.body);
    res.status(201).json({ success: true, data: pastTrip });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Get all past trips for a user
router.get('/', async (req, res) => {
  try {
    const pastTrips = await PastTrip.find({ userId: req.params.userId });
    res.status(200).json({ success: true, data: pastTrips });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
