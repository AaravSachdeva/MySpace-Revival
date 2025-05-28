const express = require("express");
const { userController } = require("../../controllers");

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = userController;

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
