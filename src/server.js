const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const { Server } = require("socket.io");
const http = require("http");
const server = http.createServer(app);

dotenv.config();
const port = process.env.PORT || 8080;

const io = new Server(server, {
  cors: "http://localhost:3000",
});

let onlineUsers = [];

io.on("connection", (socket) => {
  // Listen to a connection:
  socket.on("addNewUser", (userID) => {
    if (onlineUsers.some((user) => user?.userID === userID) === false) {
      onlineUsers.push({
        userID: userID,
        socketID: socket.id,
      });
    }

    io.emit("getOnlineUsers", onlineUsers);

    // Add message
    socket.on("sendMessage", (message) => {
      const user = onlineUsers.find(
        (user) => user?.userID === message?.recipientID
      );

      if (user) {
        io.to(user?.socketID).emit("getMessage", message);
        io.to(user?.socketID).emit("getNotification", {
          senderID: message?.senderID,
          isRead: false,
          date: new Date(),
        });
      }
    });

    socket.on("disconnect", () => {
      onlineUsers = onlineUsers.filter((user) => user.socketID !== socket.id);
      io.emit("getOnlineUsers", onlineUsers);
    });
  });
});

// Databse connection
async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URI); // DATABSE_URI maybe change
    console.log("Database connection successful");

    server.listen(port, () => {
      console.log(`Student Council listening on port ${port}`);
    });
  } catch {
    console.log("Failed to connect with database");
  }
}

main();
