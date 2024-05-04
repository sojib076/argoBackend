exports.getallPost = async (req, res) => {

    try {
        // Logic to fetch all products
        res.send('Hello World! from Get All Post');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};


exports.createPost = async (req, res) => {
    try {
      
        res.send('Hello World! from Post create ');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getPostById = async (req, res) => {
    try {
        const productId = req.params.productId;
       res.send(`Hello World! from getProductById ${productId}`);
    } catch (error) {
        
        res.status(500).send('Internal Server Error');
    }
};

exports.PostDeltById = async (req, res) => {
    try {
        const postdeltid = req.params.postdeltid;
       res.send(`Hello World! from post delt ${postdeltid}`);
    } catch (error) {
        
        res.status(500).send('Internal Server Error');
    }
};
exports.updateSingleOrder = async (req, res) => {
    try {
        const postupdateid = req.params.postupdateid;
       res.send(`Hello World! from post update ${postupdateid}`);
       console.log('Hello World! from post update');
    } catch (error) {
        
        res.status(500).send('Internal Server Error');
    }
};