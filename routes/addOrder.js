const express = require('express');
const { addSingleOrder, getAllOrders, getSingleOrder } = require('../Controller/addOrder.con');

const router = express.Router();



router.post('/', addSingleOrder);
router.get('/', getAllOrders);
router.get('/:id', getSingleOrder);


module.exports = router;