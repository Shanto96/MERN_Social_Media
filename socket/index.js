const io = require("socket.io")(8900,{
    cors :{
        origin : "http://localhost:3000",
    },
});
let users = [];


const addUser = (userId,socketId) => {
    !users.some((user) => user.userId === userId) &&  users.push({userId,socketId})
}

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
}

io.on("connection", (socket)=>{
    console.log("connected to socket")
    socket.on("addUser", (userId)=>{
        addUser(userId,socket.id);
        console.log(users)
        io.emit("getUsers",users);


    })
    socket.on("disconnect", ()=>{
        console.log("A user disconnected ");
        removeUser(socket.id);
        io.emit("getUsers",users);
    })
})