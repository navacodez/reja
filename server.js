const http = require("http");
const { MongoClient } = require("mongodb");  // Use MongoClient instead of directly requiring mongodb
let db;
const connectionString = "mongodb+srv://storm:TtEE04LTttiOx9aB@cluster0.mnkq2.mongodb.net/Reja";

// Use MongoClient to connect to MongoDB
MongoClient.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("MongoDB connection succeeded");
    
    module.exports = client;  // Export client for other modules to use
    
    // Import the app after connecting to MongoDB
    const app = require("./app");
    const server = http.createServer(app);
    
    const PORT = 3000;
    server.listen(PORT, function() {
      console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("ERROR on connection to MongoDB:", err);
  });