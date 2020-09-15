const express = require('express');
const burgers = require('../models/burger')

module.exports = (app) => {
    app.get('/', burgers.allBurgers);
    app.post('/insert/:id', burgers.insertBurger);
    app.patch('/update/:id', burgers.updateBurger);
    app.delete('/delete/:id', burgers.deleteBurger);
}