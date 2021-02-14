const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Should Require"]
    },
    imgurl:{
        type:String,
        required:[true,"Image url should require"]
    }
});

const Card = mongoose.model("Cards",cardSchema);
module.exports = Card;