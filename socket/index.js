import { Server } from "socket.io";

const io = new Server({ 
    cors:{
        origin:"http://localhost:3000"
    }
});

let onlineUsers = [];

//If we already have user inside onlineUsers array we are not going to add(push) user inside onlineUsers array
const addNewUser = (username, socketId) => {
    !onlineUsers.some((user)=> user.username === username) && 
    onlineUsers.push({ username, socketId });
} 

//Remove user when user leave teh application
const removeUser =(socketId)=>{
    onlineUsers = onlineUsers.filter((user)=>user.socketId !== socketId)
}

//Find user from onlineUsers array
const getUser = (username) =>{
    return onlineUsers.find((user)=> user.username === username)
}


io.on("connection", (socket) => {
    socket.on("newUser", (username)=>{
        addNewUser(username, socket.id);
    })
    socket.on("sendNotification", ({senderName, receiverName, type})=>{
        const receiver = getUser(receiverName)
        io.to(receiver.socketId).emit("getNotification", {
            senderName,
            type,
        });
    });

    socket.on("disconnect", ()=>{
        removeUser(socket.id);
    })
});

io.listen(5000);