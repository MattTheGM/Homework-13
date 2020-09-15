var orm = require('../config/orm.js');

exports.allBurgers = async (req, res) => {
    const results = await orm.selectAll();
    res.json({success: "true", results: results}).end();
}

exports.insertBurger = async (req, res) => {
    const results = await orm.insertOne(req.params.id, req.body);
    res.json({success: "true", results: results}).end();
}

exports.updateBurger = async (req, res) => {
    const results = await orm.updateOne(req.params.id, req.body);
    res.json({success: "true", results: results}).end();
}

exports.deleteBurger = async (req, res) => {
    const results = await orm.deleteOne(req.params.id);
    res.json({success: "true", results: results}).end();
}