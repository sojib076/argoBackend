const e = require('express');
const client = require('../Db/mongoClient');
const db = client.db('products');
const users = db.collection('users');
const bcrypt = require('bcrypt');


exports.adduser = async (req, res) => {
    try {
        const { email, password } = req.body;
        encryptedPassword = await bcrypt.hash(password, 10);
        const result = await users.insertOne({ email: email, password: encryptedPassword });
        res.status(200).send(result);
      
    } catch (error) {
        res.status(500).send(error.message);
    }

}


exports.getuser = async (req, res) => {
    try {
       const user = req.body;
      console.log(user);
        const result = await users.findOne({ email: user.email });
        if (result) {
            const match = await bcrypt.compare(user.password, result.password);
            if (match) {
                res.status(200).send({
                    email: result.email,
                    message: 'Login Successful'
                });
            }
            else {
                res.status(401).send('Invalid Password');
            }
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
} 

exports.verifyadmin = async (req, res) => {
    
        // frrom url query
        const email = req.query.email;
        
        const result = await users.findOne({ email: email });
        if (result) {
            res.status(200).send({
                email: result.email,
                message: 'Admin Verified'
            });
        }
        else {
            res.status(404).send('User not found');
        }


    
    }