// const express = require("express");
// const userRoute = require("./routes/userRoute");
// const orderRoute = require("./routes/orderRoute");
// const dotenv = require("dotenv");
// const morgan = require("morgan");
// const connectDB = require("./config/db");
// const cors = require("cors");

// dotenv.config();

// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'));

// app.use("/api/v1/users", userRoute);
// app.use("/api/v1/orders", orderRoute);

// app.get("/", async(req, res) => {
//     res.send("<h1>Ok</h1>");
// })

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//     console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`);
// });



// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");
// const orderRoutes = require("./routes/orderRoute");
// const mongoose = require("mongoose")

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// connectDB();

// // Use Order Routes
// app.use("/api/orders", orderRoutes);

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config(); // For environment variables

// const app = express();
// app.use(cors());
// app.use(express.json()); // Allows API to handle JSON data

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Import Routes
// const orderRoutes = require("./routes/orderRoute");
// app.use("/api/orders", orderRoutes);

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require("express");
// const userRoutes = require("./Routes/userRoute");
// const orderRoutes = require("./Routes/orderRoute");
// const dotenv = require("dotenv");
// const morgan = require("morgan");
// const connectDB = require("./config/db");
// const cors = require("cors");

// dotenv.config();

// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'));

// app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/orders", orderRoutes);

// app.get("/", async(req, res) => {
//     res.send("<h1>Ok</h1>");
// })

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//     // console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`);
// });





const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const OrderModel = require("./models/Orders");


// Import Routes
const userRoutes = require("./routes/userRoute");
const orderRoutes = require("./routes/orderRoute");
const storeRoutes = require("./routes/storeRoute");

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Required for parsing form data
app.use(morgan("dev"));

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/stores", storeRoutes);

// Test Route
// app.get("/", async (req, res) => {
//     res.send("<h1>Ok</h1>");
// });

app.get("/", async (req, res) => {
    try {
        const orders = await OrderModel.find();  
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});


app.post("/api/orders", async (req, res) => {
    console.log("Order received:", req.body); 
    const newOrder = new OrderModel(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  });
  

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ success: false, message: "Internal Server Error" });
});

// Server Listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Server running in ${process.env.DEV_MODE} mode on port ${PORT}`);
});
