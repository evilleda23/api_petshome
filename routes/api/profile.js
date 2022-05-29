const express = require('express');
const router = express.Router();

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;