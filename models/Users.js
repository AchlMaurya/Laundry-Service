const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email."]
        },
        phone: {
            type: String, // Changed from Number to String
            required: true,
            unique: true,
            match: [/^\d{10}$/, "Please enter a valid 10-digit phone number."]
        },
        state: {
            type: String,
            required: true,
            trim: true
        },
        district: {
            type: String,
            required: true,
            trim: true
        },
        address: {
            type: String,
            required: true,
            trim: true
        },
        pincode: {
            type: String, // Changed from Number to String
            required: true,
            match: [/^\d{6}$/, "Please enter a valid 6-digit pincode."]
        },
        password: {
            type: String,
            required: true,
            minlength: [6, "Password should be at least 6 characters long."]
        },
        photo: {
            type: String, // Store photo as a URL instead of binary data
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
