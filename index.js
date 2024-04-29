const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// use coros 
const cors = require('cors');
app.use(cors());

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



// jwt functions
app.post('/login', (req, res) => {
 
});



const jwtrandomtext = 'sojibsojibsojibsojib'
app.get('/jwt', (req, res) => {
  
    const user = { name: 'sojib' };
    const accessToken = jwt.sign(user,jwtrandomtext);
    res.json({ accessToken: accessToken });
});

// verify token
app.post('/jwt', (req, res) => {
   


    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, jwtrandomtext, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        res.json({ 
            message: 'Token verified',
            user
         });
    });

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
