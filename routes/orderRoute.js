const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const Order = require("../models/Orders"); // Ensure correct filename



router.get("/", async (req, res) => {
  try {
      const orders = await Order.find(); // ✅ Use 'Order' instead of 'OrderModel'
      res.status(200).json(orders);
  } catch (error) {
      console.error("Error fetching orders:", error); // Debugging log
      res.status(500).json({ message: "Server error", error });
  }
});


// Create a new order
router.post("/", async (req, res) => {
  try {
    const { user_id, product_type, quantity, wash_type, store_location, city, store_phone, total_items, price } = req.body;

    // Validate required fields
    if (![user_id, product_type, quantity, wash_type, store_location, city, store_phone, total_items, price].every(Boolean)) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const newOrder = new Order({
      order_id: `OR${Date.now()}`, // Generate unique order ID
      user_id,
      product_type,
      quantity,
      wash_type,
      price,
      // order_date_time: new Date().toISOString(), // Use ISO format
      order_date_time: new Date(),

      store_location,
      city,
      store_phone,
      total_items,
      status: "Ready to Pickup" // Default status
    });

    await newOrder.save();
    res.status(201).json({ success: true, message: "Order created successfully!", order: newOrder });

  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ success: false, error: "Internal Server Error", details: error.message });
  }
});

module.exports = router;
