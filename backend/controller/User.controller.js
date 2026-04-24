import bcrypt from "bcryptjs";
import User from "../models/User.model.js";
import { generateToken } from "../lib/utils.js";
export const signup = async (req, res) => {
  const { displayName, email, password } = req.body;
  try {
    if (!displayName || !email || !password)
      return res.status(400).json({
        message: "All fields are required to procees with this action.",
      });

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "Email already exist." });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be atleast 6 characters long." });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      displayName,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        uid: newUser._id,
        displayName: newUser.displayName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log(`Error in signup controller: ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
