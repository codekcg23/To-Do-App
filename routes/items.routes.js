const express = require('express');
const router = express.Router();

//item model
const Item = require('../models/items.models');

// @route GET /items
//@desc get all items
// @access Public

router.get('/',(req,res) => {
    Item
        .find()
        .then(items =>{res.status(200).json(items)})
        .catch(err => res.status(200).json(err));
});
// @route POST /items
//@desc post given item
// @access Public
router.post('/',(req,res) => {
    const newItem = new Item({
        name:req.body.name
    });
    newItem
        .save()
        .then(item => res.status(200).json(item) )
        .catch(err=>res.status(400).json(err));
    
});
// @route DELETE /items/:id
//@desc delete given item
// @access Public
router.delete('/:id',(req,res)=>{
    Item
        .findById(req.param.id)
        .then(item => item.remove().then(()=> res.status(200).json({suceess:true})))
        .catch(err=> res.status(404).json(err));

})

module.exports = router;
