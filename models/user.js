const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose');
const Schema=mongoose.Schema;

/* const userSchema=new Schema({
    email:{
        type:String,
        required:true,s
        unique:true
    }
}); */


// edited --> start
const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
 /*    mobile_num:{
        type:String,
        required:true,
        unique:true
    },
    room_number:{
        type:Number,
    },
    hostel_number:{
        type:Number
    },
   
   products:[
        {
           type: Schema.Types.ObjectId,
           ref:'Product'

        }
           ] */
    

});

//end

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model('User',userSchema);




/* user  */
// mobile number
//room number
//hostel number
//products

/* product */


//  name
//category
//owner



