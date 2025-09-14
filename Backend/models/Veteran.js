const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let veteranSchema = new Schema({
    name: {
        type : String
    },
    email: {
        type : String
    },
    password:{
        type : String
    },
    profession: {
        type : String
    },
    hobbies :{
        type : [String]
    },
    followingVeterans :{
        type : [String]
    },
    followingCommunities :{
        type : [String]
    },
    accountType : {
        type : String
    },
    eventsCreated :{
        type : [String]
    },
    eventsInterested :{
        type : [String]
    },
    starsCount:{
        type : Number
    },
    category :{
        type : String
    },
    posts : {
        type : [String]
    }

},
{
    collection : 'veterans'
})

module.exports = mongoose.model('Veteran', veteranSchema)