const mongoose=require("mongoose");
const questionSchema=new mongoose.Schema(
    {
        content : {
            type : String,
            required: true ,
        },
        option1: {
            type : String,
            required : true,
        },
        option2: {
            type : String,
            required : true,
        },
        option3: {
            type :String,
            required : true,
        },
        option4: {
            type : String,
            required : true,
        },
        course : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Course",
        },
        marks : {
            type : Number,
            required : true,
        },
        answer : [
            {
                type:String,
                required:true
            },
        ],
    },{
        timestamps : true,
    }
);

const Question=mongoose.model('Question',questionSchema);
module.exports = Question ;