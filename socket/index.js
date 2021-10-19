const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});
let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
  console.log(users);
};

const getUser = (userId) => {
  console.log(users, userId);
  return users.find((user) => user.userId === userId);
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  //Connection start

  console.log("connected to socket");

  //get user info
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    console.log(users);
    io.emit("getUsers", users);
  });


  //get & send a message from socket
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    console.log(senderId, receiverId, text);
    const user = getUser(receiverId);
   console.log("sending to", user?.socketId)
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });



  //on disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected ");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
