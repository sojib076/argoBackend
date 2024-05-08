const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
require('dotenv').config();

// use coros 
const cors = require('cors');
app.use(cors());



// database willl be 




// Routes 
const addOrder = require('./routes/addOrder');
const addUser = require('./routes/addUsers');



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/order', addOrder);
app.use('/api/v1/user', addUser);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
