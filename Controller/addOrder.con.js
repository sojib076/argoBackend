// use the controol for the res and req 
//     console.log(`Example app listening at http://localhost:${port}`);
// });

exports.addSingleOrder = async (req, res) => {
    try {
        // Logic to add order
        const  body = req.body;
        console.log(body);

       res.send({
            message: 'Order added successfully',
            name: body.name,
            number: body.Number,
       });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        // Logic to get all orders
        res.send('Hello World! from Get Order');
    } catch (error) {
        console.error(error);
}
};   

exports.getSingleOrder = async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id);
        // Logic to get single order
        res.send('Hello World! from Get Single Order');
    } catch (error) {
        console.error(error);
        res.status(500).send('Order not found or Internal Server Error');
    }
}