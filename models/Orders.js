const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        order_id: {
            type: String,
            required: false,
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        product_type: {
            type: String,
            required: true, 
        },
        quantity: {
            type: Number,
            required: true,
        },
        wash_type: {
            type: [String],
            required: true,
            enum: ["washing-machine", "ironing", "towel", "bleach"],
        },
        price: {
            type: Number,
            required: true,
        },
        order_date_time: {
            type: Date,
            required: true,
            default: Date.now, 
        },
        store_location: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        store_phone: {
            type: String, 
            required: true,
        },
        total_items: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ["Ready to Pickup", "In Washing", "In Ironing", "Ready to Deliver"],
            default: "Ready to Pickup", 
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
