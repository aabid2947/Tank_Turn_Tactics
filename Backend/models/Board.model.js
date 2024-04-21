const mongoose = require('mongoose')

const BoardSchema = mongoose.Schema(

    {
        gameGrid: {
            type: [[mongoose.Schema.Types.Mixed]],
            default: [[]] // Default value is an empty 2D array
        },

        boardID: {
            type: String,
            required: true
        }

    },
    // Provide two extra field 
    // when created and when updated
    {
        timestamp:true
    }
)

const Board = mongoose.model("Board",BoardSchema)

module.exports = Board