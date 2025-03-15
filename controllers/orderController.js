const Order = require("../models/Orders");


const getOrdersController = async (req, res) => {
    try {
        const orders = await Order.find({ user_id: req.user._id }); // Ensure req.user exists
        res.status(200).json({
            success: true,
            data: orders
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: "Error while getting orders",
            error: error.message
        });
    }
};


const deleteOrdersController = async (req, res) => {
    try {
        const delOrder = await Order.findByIdAndDelete(req.params.id);
        if (delOrder) {
            return res.status(200).json({
                success: true,
                message: "Order deleted successfully",
            });
        } 
        res.status(404).json({
            success: false,
            message: "Order not found"
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false,
            message: "Error while deleting order",
            error: error.message
        });
    }
};




const mongoose = require("mongoose");

const createOrdersController = async (req, res) => {
    try {
        console.log("Request Body:", req.body); 

        let { user_id, product_type, quantity, wash_type, store_location, city, store_phone, total_items, price } = req.body;

        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            return res.status(400).json({ 
                success: false, 
                error: "Invalid user_id. Must be a 24-character MongoDB ObjectId."
            });
        }

        const newOrder = new Order({
            order_id: `OR${Date.now()}`, 
            user_id, 
            product_type,
            quantity,
            wash_type,
            price,
            order_date_time: new Date(), 
            store_location,
            city,
            store_phone,
            total_items,
            status: "Ready to Pickup"
        });

        await newOrder.save();
        res.status(201).json({ success: true, message: "Order created successfully!", data: newOrder });

    } catch (error) {
        console.error("Error while creating order:", error);
        res.status(500).json({
            success: false,
            message: "Error while creating order",
            error: error.message
        });
    }
};


module.exports = {
    getOrdersController,
    deleteOrdersController,
    createOrdersController
};
