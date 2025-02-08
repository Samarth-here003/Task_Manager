// import express from "express";
// import api from './routes/index.js'
// import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import cors from "cors";

// dotenv.config()
// mongoose.connect(process.env.MONGODB_PATH, () => {
//     console.log('connect');
// }, (e) => console.log(e))


// const PORT = process.env.SERVER_PORT || 9000
// const origin = process.env.CORS_ORIGIN || 'http://localhost:3000'

// const app = express()

// app.use(cors({
//     origin
// }));
// app.use(express.json())
// app.use(express.urlencoded())

// app.use(api)

// app.listen(PORT, () => {
//     console.log(`Your app is running in http://localhost:${PORT}`)
// })
// import express from "express";
// import api from './routes/index.js';
// import dotenv from 'dotenv';
// import mongoose from "mongoose";
// import cors from "cors";

// dotenv.config();

// const PORT = process.env.SERVER_PORT || 9000;
// const origin = process.env.CORS_ORIGIN || 'http://localhost:3000';
// const MONGODB_PATH = process.env.MONGODB_PATH || "mongodb://localhost:27017/mydb";

// // MongoDB connection setup
// const connectDB = async () => {
//     const connectionParams = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     };
    
//     try {
//         await mongoose.connect(MONGODB_PATH, connectionParams);
//         console.log("Connected to the database successfully.");
//     } catch (error) {
//         console.error("Database connection failed:", error);
//     }
// };

// // Call the connection function
// connectDB();

// const app = express();

// // Middleware
// app.use(cors({
//     origin
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use(api);

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Your app is running at http://localhost:${PORT}`);
// });
import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import api from './routes/index.js';

dotenv.config();

const PORT = process.env.PORT ;
const origin = process.env.CORS_ORIGIN || 'http://localhost:3000';
const MONGODB_PATH = process.env.MONGODBPATH ;

// MongoDB connection setup
const connectDB = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    
    try {
        await mongoose.connect(MONGODB_PATH, connectionParams);
        console.log("Connected to the database successfully.");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

// Call the connection function
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use(api)// Including additional API routes from 'routes/index.js'

// chatbot Route
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use(api); // Including additional API routes from 'routes/index.js'

// Chatbot Route
app.post("/api/chat", (req, res) => {
   
  const userMessage = req.body.message;

  // Simple chatbot logic
  let botResponse = "I'm sorry, I don't understand that.";

  if (userMessage.toLowerCase().includes("hello")) {
    botResponse = "Hi there! How can I help you today?";
  } else if (userMessage.toLowerCase().includes("bye")) {
    botResponse = "Goodbye! Have a great day!";
  }

  // Respond back to the client
  res.json({ message: botResponse });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}..`);
});
