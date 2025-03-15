// const express = require("express");
// const {registerController, loginController, testController, getUserDetailsController, updateUserPhotoController, sendRecoveryEmailController, getUserPhotoController} = require("../controllers/userController");
// const requireSignIn = require("../middleware/userMiddleware");
// const formidable = require('express-formidable');

// const router = express.Router();

// router.post('/register', registerController);

// router.post('/login', loginController);

// router.get('/test', requireSignIn, testController);

// router.get('/', requireSignIn, getUserDetailsController);

// router.put('/update/:id', requireSignIn, formidable(), updateUserPhotoController)

// router.post('/send-recovery-email', sendRecoveryEmailController);

// router.get('/auth-user', requireSignIn, (req, res) => {
//     res.status(200).send({ok:true});
// })



// module.exports = router;





const express = require("express");
const {
  registerController,
  loginController,
  testController,
  getUserDetailsController,
  updateUserPhotoController,
  sendRecoveryEmailController,
  getUserPhotoController
} = require("../controllers/userController");

const requireSignIn = require("../middleware/userMiddleware");
const formidable = require("express-formidable");

const router = express.Router();

// Register a new user
router.post("/register", registerController);

// Login user
router.post("/login", loginController);

// Test route (protected)
router.get("/test", requireSignIn, testController);

// Get user details (protected)
router.get("/", requireSignIn, getUserDetailsController);

// Update user profile photo (protected)
router.put("/update/:id", requireSignIn, formidable(), updateUserPhotoController);

// Send password recovery email (not implemented yet)
router.post("/send-recovery-email", sendRecoveryEmailController);

// Check if user is authenticated
router.get("/auth-user", requireSignIn, (req, res) => {
  res.status(200).send({ success: true, message: "User authenticated" });
});

// Get user profile photo (if implemented)
if (getUserPhotoController) {
  router.get("/photo/:id", getUserPhotoController);
}

module.exports = router;
