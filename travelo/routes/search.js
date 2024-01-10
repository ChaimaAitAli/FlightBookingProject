const express = require('express');
const router = express.Router();
const searchFlyController = require('../controllers/searchFly');

router.get('/', searchFlyController);
router.post('/search',searchFlyController.search);
router.post('/reserve', searchFlyController.reserve);



module.exports = router;