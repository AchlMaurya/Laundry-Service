// const express = require("express");
// const Store = require("../models/Stores")

// const router = express.Router();

// router.post("/create", async (req, res) => {
//   try {
//     const newStore = new Store(req.body);
//     await newStore.save();
//     console.log(newStore, "newStore");
//     res.status(201).json({ message: "Store created Successfully", newStore });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// router.get("/", async (req, res) => {
//   try {
//     const store = await Store.find();
//     res.json(store);

//   } catch (error) {
//     res.status(500).json({ message: "Server Error" });
//   }
// });


// module.exports = router;





const express = require("express");
const Store = require("../models/Stores");

const router = express.Router();

// Create a new store
router.post("/create", async (req, res) => {
  try {
    const { storeLocation, storePhone, storeAddress, storeCity } = req.body;

    // Validate required fields
    if (!storeLocation || !storePhone || !storeAddress || !storeCity) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const newStore = new Store({ storeLocation, storePhone, storeAddress, storeCity });
    await newStore.save();
    console.log("New Store:", newStore);

    res.status(201).json({ success: true, message: "Store created successfully", store: newStore });
  } catch (error) {
    console.error("Error creating store:", error);
    res.status(500).json({ success: false, message: "Error creating store", details: error.message });
  }
});

// Get all stores
router.get("/", async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json({ success: true, stores });
  } catch (error) {
    console.error("Error fetching stores:", error);
    res.status(500).json({ success: false, message: "Error fetching stores", details: error.message });
  }
});

module.exports = router;
