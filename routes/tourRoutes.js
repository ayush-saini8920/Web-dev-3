const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

// Get all tours
router.get('/tours', tourController.getAllTours);

// Get a single tour by ID
router.get('/tours/:id', tourController.getTourById);

// Get tours by query
router.get('/tours/search', tourController.getTourByquery);

// Save a new tour
router.post('/tours', tourController.saveTours);

// Update a tour
router.put('/tours/:id', tourController.updateTours);

module.exports = router;