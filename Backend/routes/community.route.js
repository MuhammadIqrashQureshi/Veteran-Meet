let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

let communitySchema = require('../models/Community');
let eventSchema = require('../models/Event');

//create community
router.route('/create-community').post((req,res,next)=>{
    communitySchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data);
            res.json(data);
        }
    })
})


//read community
router.route('/').get((req,res,next)=>{
    communitySchema.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

module.exports=router;