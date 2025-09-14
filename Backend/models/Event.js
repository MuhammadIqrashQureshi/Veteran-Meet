const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let eventSchema = new Schema({
    name : {
        type : String
    },
    categoryType : {
        type : String
    },
    date : {
        type : String
    },
    venue : {
        type : String
    },
    description : {
        type : String
    },
    stars : {
        type : String
    },
    creator : {
        type : String
    },
    interested : {
        type : Number
    }

},{
    collection : 'event'
})


module.exports = mongoose.model('Event',eventSchema)
