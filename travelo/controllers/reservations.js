const express = require('express');
const router = express.Router();

router.get('/booking', (req, res) => {
    res.render('booking');
});


router.get('/search', (req, res) => {
    res.render('search');
});


module.exports = router;