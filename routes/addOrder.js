const express = require('express');
const { addSingleOrder, getAllOrders, getSingleOrder, updateSingleOrder, deleteSingleOrder, updateSinglevalue, trackSingleOrder } = require('../Controller/addOrder.con');

const router = express.Router();



router.post('/', addSingleOrder);
router.get('/', getAllOrders);
router.get('/:id', getSingleOrder);
router.put('/:id', updateSingleOrder);
router.delete('/:id', deleteSingleOrder )
router.patch('/:id', updateSinglevalue);
router.get('/track/:id', trackSingleOrder);



module.exports = router;