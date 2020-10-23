const mongoose=require("mongoose");

const courseSchema=new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            unique : true,
        },
        pass_marks : {
            type : Number,
            required : true ,
        },
        questions:[
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "questions",
            },
        ],
    },{
        timestamps : true,
    }
);

const Courses = mongoose.model('Courses',courseSchema);
module.exports = Courses ;