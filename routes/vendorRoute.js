
const vendorController = require('../controllers/vendor_Controller');
const express = require('express');

const router = express.Router();

router.post('/register', vendorController.vendorRegister);
router.post('/login', vendorController.vendorLogin);
router.get('/all-vendors', vendorController.getAllVendors);
router.get('/single-vendor/:apple',vendorController.getVendorById);

module.exports = router;
