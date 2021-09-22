const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");
const multer= require("multer");
const path = require("path");

dotenv.config();
const connection = async () => {
   await mongoose.connect(process.env.MONGO_URL  , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).catch(error => console.log({error}));

    ;
}
connection();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//middleware

app.use("/images",express.static(path.join(__dirname,"/public/images")))

app.use('/api/users',userRouter)
app.use('/api/posts',postRouter)
app.use('/api/auth',authRouter)

const storage =   multer.diskStorage({
    destination: (req,res,cb) =>{
        cb(null,"public/images");
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname);
    },
})

const upload = multer({storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
    try {
        return res.status(200).json("File Uploaded Successfully");
    } catch (error) {
        console.log(error)
    }
    
})

app.get("/", (req,res) => {
    res.send("Welcome to HomePage")

})

app.listen(8800,()=>{
    console.log("backend server is running")
})
