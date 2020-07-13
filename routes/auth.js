const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");
const avatar = require("../middleware/avatar");
const database = require("../utils");

const {
    body
} = require("express-validator");

// Login
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

router.post("/users/edit", AuthController.updateUser);
router.get("/users", AuthController.getAllUsers);

// router.post("/social/login",AuthController.socialLogin)

// 
// Hamza Contribution
//

router.post("/validateUser", AuthController.validateUser);

router.post("/acceptESing", AuthController.acceptESing);

router.get("/content-providers", AuthController.getAllContentProviders);

router.post("/content-providers/create",
    [
        body("firstName").exists().trim().isAlpha().isLength({
            min: 3,
            max: 255
        }),

        body("lastName").exists().trim().isAlpha().isLength({
            min: 3,
            max: 255
        }),

        body("email").exists().trim().isEmail().isLength({
            min: 3,
            max: 255
        }),

        body("password").exists().trim().isLength({
            min: 3,
            max: 255
        }),
    ],
    AuthController.createContentProviders
);

router.delete("/content-providers/delete", AuthController.deleteContentProviders)

module.exports = router;