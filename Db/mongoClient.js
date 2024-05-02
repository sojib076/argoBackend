const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const uri = `mongodb+srv://argologistic:argologistic1@cluster0.eybr6od.mongodb.net/`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    if (err) {
        console.log('Error connecting to the database');
    } else {
        console.log('Connected to the database');
    }
});

module.exports = client;