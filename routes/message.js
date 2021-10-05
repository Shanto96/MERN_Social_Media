const router = require("express").Router();
const Message = require("../models/Message");

//creating a message 
router.post('/',async(req, res)=>{
    const message = new Message({conversationId:req.body.conversationId,sender:req.body.sender,text:req.body.text});
    try {
        const savedMessage = await message.save();
        res.status(200).json(savedMessage);
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
})
//get Message of a conversation 
router.get('/:conversationId', async(req, res)=>{
    try {
        const messages = await Message.find({conversationId:req.params.conversationId});
        res.status(200).json(messages); 


    } catch (error) {
        res.status(500).json(error);
        console.log(error)
    }
})
module.exports = router;
