const express = require ('express');
const router = express.Router();
const types = require ('../models/types')

router.get('/' , function (req, res) {
    res.redirect("/burgers");


});

router.get('/burgers', function (req, res){
    types.all( function (burgerData)
    {res.render('index', {name: burgerData} )}) 
})

router.post('/burgers/:id', function (req, res){
    types.update(req.params.id, function () {
    
    res.redirect("/burgers") 
    })
})

router.post('/burgers', function (req, res){
    types.create(req.body.name, function () {
    
    res.redirect("/burgers")
    })
})
module.exports = router;