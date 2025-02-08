import express from "express";
import { User, validateRegister } from "../models/user.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { error } = validateRegister(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send({ message: "User already registered." });

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        await new User({ ...req.body, password: hashedPassword }).save();
        res.status(201).send({ message: "User registered successfully." });
    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).send({ message: "Internal server error." });
    }
});

export default router;  // Use default export for ES module
