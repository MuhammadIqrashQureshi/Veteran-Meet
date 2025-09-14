let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

let veteranSchema = require('../models/Veteran');
let eventSchema = require('../models/Event')

//manage veteran profile

//create veteran
router.route('/create-veteran').post((req,res,next)=>{
    veteranSchema.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data);
            res.json(data);
        }
    })
})

//Read veterans
router.route('/').get((req, res) => {
    veteranSchema.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

// Get Single Veteran
router.route('/edit-veteran/:name').get((req, res) => {
  // console.log(req.params)
    veteranSchema.find({name : req.params.name}, (error, data) => {
      if (error) {
        console.log(error)
      } else {
        res.json(data)
      }
    })
  })
  

  // Update Veteran
  router.route('/update-veteran/:name').put((req, res, next) => {
    veteranSchema.findOneAndUpdate({name : req.params.name}, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Veteran updated successfully !')
      }
    })
  })
  // Delete Veteran
  router.route('/delete-veteran/:name').delete((req, res, next) => {
    veteranSchema.remove({name : req.params.name}, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

//add hobbies
router.route('/add-hobbies/:name').put((req, res, next) => {
  veteranSchema.findOneAndUpdate({name : req.params.name}, {
    $push: {hobbies : req.body.hobbies}
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Veteran updated successfully !')
    }
  })
})


//update hobbies
router.route('/update-hobbies/:name').put((req, res, next) => {
  veteranSchema.findOneAndUpdate({name : req.params.name}, {
    $set: {hobbies : req.body.hobbies}
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Veteran updated successfully !')
    }
  })
})

//delete hobbies
router.route('/delete-hobbies/:name').put((req, res, next) => {
  veteranSchema.findOneAndUpdate({name : req.params.name}, {
    $pull: {hobbies : req.body.hobbies}
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('hobbies updated successfully !')
    }
  })
})


//add post
router.route('/add-posts/:name').put((req, res, next) => {
  veteranSchema.findOneAndUpdate({name : req.params.name}, {
    $push: {posts : req.body.posts}
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('posts updated successfully !')
    }
  })
})


//delete post
router.route('/delete-posts/:name').put((req, res, next) => {
  veteranSchema.findOneAndUpdate({name : req.params.name}, {
    $pull: {posts : req.body.posts}
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('hobbies updated successfully !')
    }
  })
})


//create an event
router.route('/create-event').post((req,res,next)=>{
  eventSchema.create(req.body,(error,data)=>{
      if(error){
          return next(error)
      }else{
          console.log(data);
          res.json(data);
      }
  })
})

//Read events
router.route('/event').get((req, res) => {
  eventSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
//Read following veterans
router.route('/veteran-by-name/:name').get((req, res) => {
    veteranSchema.find({name : req.params.name},(error, data) => {
      if (error) {
        console.log(error)
      } else {
        res.json(data)
        console.log(data)
      }
    })
  })

  module.exports = router;