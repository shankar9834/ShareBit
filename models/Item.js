const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const itemSchema=new Schema(
    {
        Item_name:{
            type:String,
            required:true,
            unique:true
        },
        images:[{
            url:String,
            filename:String
        }],
        category:{
            type:String,
            required:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }


    }
);


module.exports=mongoose.model('Item',itemSchema);