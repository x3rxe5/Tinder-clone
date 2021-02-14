const Card = require("./../models/cardModel");


exports.fetchInUsers = async (req,res) => {
    const user = await Card.create(req.body);
    try{
        res.status(201).json({
            status:"success",
            body:{
                user
            }
        })
    }catch(err){
        res.status(404).json({
            status:"failed",
            body:{
                err
            }
        })
    }
};

exports.getAllCards = async (req,res) => {
    const cards = await Card.find();
    try{
        res.status(200).send(cards);
    }catch(err){
        res.status(400).send(err);
    }
};