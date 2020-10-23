const mongoose=require("mongoose");
const attSchema=new mongoose.Schema(
    {
        user :{
            type:mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        marksObtained:{
            type:Number,
            required:true ,
        },
        course:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Courses",
            },
        ],
    },{
        timestamps:true ,
    }
);

const Attempts=mongoose.model("Attempts",attSchema);
module.exports=Attempts;