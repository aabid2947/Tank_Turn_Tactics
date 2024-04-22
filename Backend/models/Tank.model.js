import mongoose from "mongoose"


const TankSchema = mongoose.Schema(

    {
        username: {
            type: String,
            required: [true, "Plese enter the product"]
        },
        color:{
            type:String,
            required:false
        },

        energy: {
            type: Number,
            required: true,
            default: 1
        },
        range:{
            type:Number,
            required:true,
            default:1
        },
        life:{
            type:Number,
            required:false,
            default:3
        },
        xCoordinate:{
            type:Number,
            required:false
        },
        yCoordinate:{
            type:Number,
            required:false
        },
        tankID:{
            type:String,
            required:false
        }
    },
    // Provide two extra field 
    // when created and when updated
    {
        timestamp:true
    }
)

const Tank = mongoose.model("Tank",TankSchema)

export default Tank