
import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Resume from "../models/Resume.model.js";

const generateToken = (userId) => {
    const token = jwt.sign({userId }, process.env.JWT_SECRET,{expiresIn: '7d'});
    return token;
}

// POST : /api/register/user
// user registration controller

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const user = await User.findOne({ email: email.toLowerCase() });
        if (user) {
            return res.status(409).json({ message: "User with this email already exists" });
        }

        // Create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
        });

        const token = generateToken(newUser._id);

        newUser.password = undefined; // Exclude password from response

        return res.status(201).json({ message: "User registered successfully", token, user: newUser });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

}

// POST : /api/login/user
// user login controller


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

    

        // Check if user already exists
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        //check if password matches
        if(!user.comparePassword(password)){
            return res.status(400).json({ message: "Invalid email or password" });
        }

        //return success message
        const token = generateToken(user._id);
        user.password = undefined; // Exclude password from response

        return res.status(200).json({ message: "User logged in successfully", token, user })     

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

}

//controller for getting user by id

//GET : /api/users/data
export const getUserById = async (req, res) => {
    try {
        const userId = req.userId;

        //check if user exists
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        //return user data
        user.password = undefined; 
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

}


//controller for getting user resumes
//GET : /api/users/resumes

export const getUserResumes = async (req, res) => {
    try{
        const userId = req.userId;

        // return user resumes

        const resumes = await Resume.find({ userId });
        return res.status(200).json({ resumes });
    }catch(error){
        return res.status(400).json({ message: error.message });
    }
}