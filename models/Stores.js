// const mongoose = require("mongoose");

// const storeSchema = new mongoose.Schema({
//  storeLocation: {
//     type : String,
    
//  },
//  storePhone: {
//     type : Number,
//  },
//  storeAddress: {
//     type : String,
//  },
//  storeCity: {
//     type : String,
//  },
// });

// const Store = mongoose.model("Store",  storeSchema)
// module.exports = Store;






const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {
        storeLocation: {
            type: String,
            required: true, 
        },
        storePhone: {
            type: String, // Changed from Number to String
            required: true,
        },
        storeAddress: {
            type: String,
            required: true,
        },
        storeCity: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // Added timestamps
);

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
