const express = require('express');
const { adduser, addSingleOrder, getuser, verifyadmin } = require('../Controller/addUsers.con');
const router = express.Router();




router.post('/',adduser)
router.post('/login',getuser)
router.get('/verifyadmin',verifyadmin)

module.exports = router;