const express = require('express');
const router = express.Router();
const con = require('../controller/ConTroller')

router.get('/', con.troll);
module.exports = router;