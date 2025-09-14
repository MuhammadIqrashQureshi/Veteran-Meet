const mongoose = require("mongoose");
const Schema = mongoose.Schema;



let communitySchema = new Schema( {
    name : {
        type : String
    },
    email : {
        type : String
    },
    followers :{
        type : String
    },
    about :{
        type : String
    },
    accountType : {
        type : String
    }

},{
    collection : 'community'
})

module.exports = mongoose.model('Comminuty',communitySchema)