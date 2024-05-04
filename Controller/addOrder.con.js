const client = require('../Db/mongoClient');
const {  ObjectId } = require('mongodb');

const db = client.db('products');
const collection = db.collection('orders');
exports.addSingleOrder = async (req, res) => {
    try {
       
        const  body = req.body;
        

        const result = await collection.insertOne(body);
        res.send(result);

        
      
    } catch (error) {

        res.status(500).send('Internal Server Error');
    }
};

exports.getAllOrders = async (req, res) => {
    try {
      
        const result = await collection.find().toArray();
        res.send(result);
        
    } catch (error) {
        
}
};   

exports.getSingleOrder = async (req, res) => {

    try {
        const { id } = req.params;
        // Logic to get single order
        const result = await collection.findOne({ _id: new ObjectId(id) });
        if (!result) {
            return res.status(404).send('Order not found');
        }else{
            res.send(result);
        }
       
        
    } catch (error) {
      
        res.status(500).send('Order not found or Internal Server Error');
    }
}

exports.updateSingleOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        
    
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: body });
        if (result.modifiedCount === 0) {
            return res.status(404).send('Order not found');
        }else{
            res.send(result);
        }
      
    } catch (error) {
     
        res.status(500).send('Internal Server Error');
    }
};

exports.deleteSingleOrder = async (req, res) => {
    try {
        const { id } = req.params;
        
       
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
            res.send(result);
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.updateSinglevalue = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        
        // Logic to update single order
        const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: body });
        if (result.modifiedCount === 0) {
            return res.status(404).send('Order not found');
        }else{
            res.send(result);
        }
      
    } catch (error) {
        
        res.status(500).send('Internal Server Error');
    }
};


exports.trackSingleOrder = async (req, res) => {
    const { id } = req.params;
     if (id===undefined) {
        return res.status(400).send('Order ID is required');
    }else{
        const result = await collection.findOne({ trcknumber: id });
        if (!result) {
            return res.status(404).send('Order not found');}
            else{
                res.send({
                    // status: result.status, and date 
                    status: result.status,
                    date: result.date
                });
            }
    }
   
   
};
