const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    } catch (error) {
        console.error(`Error in Hashing password: ${error.message}`);
        throw new Error("Password hashing failed");
    }
};

const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.error(`Error in Comparing password: ${error.message}`);
        throw new Error("Password comparison failed");
    }
};

module.exports = {
    hashPassword,
    comparePassword,
};
