const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.MONGO_URL  , {useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("Connected to MongoDB ");
});

//middleware


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.get("/", (req,res) => {
    res.send("Welcome to HomePage")

})

app.listen(8800,()=>{
    console.log("backend server is running")
})
