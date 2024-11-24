const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
    Uid:{
       type:String,
       required:true
    },
    title:{
        type: String,
        required: [true, "please add the title"],
    },
    description:{
        type: String,
        required: [true, "please add the description"],
    },
    pick_up:{
        type: String,
        required: [true, "please add the pick_up"],
    },
    meeting_point:{
        type: String,
        required: [true, "please add the meeting_point"],
    },
    drop_off:{
        type: String,
        required: [true, "please add the drop_off"],
    },
    duration:{
        type: Number,
        required: [true, "please add the duration"],
    },
    duration_unit:{
        type: String,
        required:[[true, "please add the duration_unit"],]
    }
    
},{
    timestamps: true,
})

module.exports = mongoose.model("Tours", tourSchema);