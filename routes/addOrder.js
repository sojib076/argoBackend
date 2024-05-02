const express = require('express');
const { addSingleOrder, getAllOrders, getSingleOrder, updateSingleOrder, deleteSingleOrder } = require('../Controller/addOrder.con');

const router = express.Router();



router.post('/', addSingleOrder);
router.get('/', getAllOrders);
router.get('/:id', getSingleOrder);
router.put('/:id', updateSingleOrder);
router.delete('/:id', deleteSingleOrder )



module.exports = router;