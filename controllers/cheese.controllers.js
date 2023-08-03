const Cheese = require('../models/Cheese.js');

const getCheeses = async(req, res) => {
    try {
        const request = await Cheese.find();
        res.send(request);
    } catch (error) {
        console.log(error);
    };
}

module.exports = {
    getCheeses
}