const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
require('dotenv').config();

// use coros 
const cors = require('cors');



// database willl be 




// Routes 
const addOrder = require('./routes/addOrder');



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/order', addOrder);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
