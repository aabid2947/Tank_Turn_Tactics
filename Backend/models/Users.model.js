const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(

    {
        username:{
            type:String,
            required: [true, "Plese enter the product"]
        },
        emailID: {
            type: String,
            required: true,
            default: 0
        }
    },
    // Provide two extra field 
    // when created and when updated
    {
        timestamp:true
    }
)

const User = mongoose.model("User",UserSchema)

module.exports = User