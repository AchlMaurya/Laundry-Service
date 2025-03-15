const { hashPassword, comparePassword } = require("../helpers/userHelper");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const nodemailer = require("nodemailer");

const registerController = async (req, res) => {
    try {
        const { name, email, phone, state, district, address, pincode, password } = req.body;

        if (!name || !email || !phone || !state || !district || !address || !pincode || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already registered, please login!"
            });
        }

        const hashedPassword = await hashPassword(password);
        const user = new User({ name, email, phone, state, district, address, pincode, password: hashedPassword });
        await user.save();

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.error(`Error in registration: ${error.message}`);
        res.status(500).json({ success: false, message: "Error in registration", error: error.message });
    }
};

const loginController = async (req, res) => {
    try {
        const { credential, password } = req.body;

        if (!credential || !password) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials or Password",
            });
        }

        let user = await User.findOne({ email: credential }) || await User.findOne({ phone: credential });
        if (!user) {
            return res.status(404).json({ success: false, message: "User is not registered" });
        }

        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(400).json({ success: false, message: "Invalid password" });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                photo: user.photo,
            },
            token,
        });
    } catch (error) {
        console.error(`Error in login: ${error.message}`);
        res.status(500).json({ success: false, message: "Error in login", error: error.message });
    }
};

const testController = (req, res) => {
    res.json({ success: true, message: "Protected route" });
};

const getUserDetailsController = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Error while getting user details", error: error.message });
    }
};


const updateUserPhotoController = async (req, res) => {
    try {
        if (!req.files || !req.files.photo) {
            return res.status(400).json({ success: false, message: "Photo is required" });
        }

        const { photo } = req.files;
        if (photo.size > 1000000) {
            return res.status(400).json({ success: false, message: "Photo must be less than 1MB" });
        }

        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        user.photo.data = fs.readFileSync(photo.tempFilePath);
        user.photo.contentType = photo.mimetype;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Profile photo updated successfully",
            user,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Error updating profile photo", error: error.message });
    }
};

const sendRecoveryEmailController = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        //  Implementing basic nodemailer setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD,
            },
        });

        const OTP = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
        const mailOptions = {
            from: process.env.MY_EMAIL,
            to: email,
            subject: "OTP for Password Reset",
            text: `Here is your OTP: ${OTP}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error.message);
                return res.status(500).json({ success: false, message: "Could not send email" });
            }
            console.log("Email sent: " + info.response);
            res.status(200).json({ success: true, message: "Email sent successfully", OTP });
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Error in password recovery", error: error.message });
    }
};

module.exports = {
    registerController,
    loginController,
    testController,
    getUserDetailsController,
    updateUserPhotoController,
    sendRecoveryEmailController,
};
