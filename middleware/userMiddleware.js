const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const requireSignIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized: No token provided",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id).select("-password");

        if (!req.user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        next();
    } catch (error) {
        console.error(`Error in Middleware: ${error.message}`);
        return res.status(401).send({
            success: false,
            message: "Unauthorized: Invalid token",
        });
    }
};

module.exports = requireSignIn;
