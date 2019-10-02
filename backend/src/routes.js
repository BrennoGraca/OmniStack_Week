const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

//Sessions routes
routes.post('/sessions', SessionController.store);

//Spots routes
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

//Dashboard routes
routes.get('/dashboard', DashboardController.show);

//Booking routes
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
