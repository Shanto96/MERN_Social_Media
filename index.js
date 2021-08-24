const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth")

dotenv.config();
mongoose.connect(process.env.MONGO_URL  , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},()=>{
    console.log("Connected to MongoDB ");
});
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//middleware

app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)


app.get("/", (req,res) => {
    res.send("Welcome to HomePage")

})

app.listen(8800,()=>{
    console.log("backend server is running")
})
