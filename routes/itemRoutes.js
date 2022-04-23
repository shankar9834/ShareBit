// const express=require('express');

// const Item=require('../models/Item');
// const catchAsync = require("../utils/catchAsync.js");
// const ExpressError=require('../utils/ExpressError.js');
// const methodOverride = require("method-override");
// const {itemSchema}=require('../schemas.js');
// const {storage}=require('../cloudinary');
// const {isLoggedIn,validateCampground,isAuthor}=require('../middleware');
// const multer  = require('multer');
// const upload = multer({storage});

// const router=express.Router();




// new code
const express=require('express');
const router=express.Router();
const User=require('../models/user');
const catchAsync=require('../utils/catchAsync');
const passport=require('passport');
const Item=require('../models/Item');
const {itemSchema}=require('../schemas.js');
const {storage}=require('../cloudinary');
const multer  = require('multer');
const {isLoggedIn,isAuthor}=require('../middleware');
const methodOverride = require("method-override");
const upload = multer({storage});
const ExpressError=require('../utils/ExpressError.js');


router.get('/',async(req,res)=>{

    res.render('items/new.ejs');
    
})
router.post('/',isLoggedIn, catchAsync(async(req,res)=>{
  // res.send(req.body.Item);
   // console.log("here", req.body);
   // res.send(req.body);
   
  const item = new Item(req.body.item);
   item.owner=req.user._id;

  // console.log(req);
 
   await item.save();
   req.flash('success','Successfully made a new item');
   res.redirect(`/items/${item._id}`);

   res.redirect('/');
}))


router.get('/medicines',async(req,res)=>{
    res.render('items/medicines.ejs');
  // res.send('hello from medicines');
})




module.exports=router;