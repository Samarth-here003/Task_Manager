import express from "express";
import { User, validateLogin } from "../models/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { error } = validateLogin(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).send({ message: "Invalid Email or Password." });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).send({ message: "Invalid Email or Password." });

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "Logged In successfully." });
    } catch (error) {
        console.error("Login Error:", error);
        return res.status(500).send({ message: "Internal server error." });
    }
});

export default router;
