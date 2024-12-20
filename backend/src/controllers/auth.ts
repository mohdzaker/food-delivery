import User from "../models/User.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function handleRegister(req:any, res:any){
    try {
        const { name, email, password } = await req.body;
        if (!name) {
            res.json({
                status: "failed",
                message: "Please enter a name!"
            });
            return;
        }
        if (!email) {
            res.json({
                status: "failed",
                message: "Please enter an email address"
            });
            return;
        }
        if (!password) {
            res.json({
                status: "failed",
                message: "Please enter a password"
            });
            return;
        }
        if (password.length < 6) {
            res.json({
                status: "failed",
                message: "Password must be at least 6 characters"
            });
            return;
        }

        const checkEmailExists = await User.findOne({ email: email });

        if (checkEmailExists) {
            res.json({
                status: "failed",
                message: "Email already registered! Please try again with another email"
            });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();

        res.json({
            status: "success",
            message: "User registered successfully!"
        })
    } catch (error: any) {
        console.log(error.message);
        res.json({
            status: "failed",
            message: error.message
        })
    }
}

export async function handleLogin(req:any, res:any){
    try {
        const { email, password } = req.body;
        if (!email) {
            res.json({
                status: "failed",
                message: "Please enter an email address"
            });
            return;
        }
        if (!password) {
            res.json({
                status: "failed",
                message: "Please enter a password"
            });
            return;
        }

        const checkUserExists = await User.findOne({
            email
        });

        if (!checkUserExists) {
            res.json({
                status: "failed",
                message: "Email is not registered. Please register now and try again."
            });
            return;
        }

        const isMatch = await bcrypt.compare(password, checkUserExists.password);

        if(!isMatch) {
            res.json({
                status: "failed",
                message: "Incorrect password. Please try again."
            });
            return;
        }

        const token = jwt.sign({ id: checkUserExists._id }, process.env.JWT_SECRET as string, {
            expiresIn: "1h",
        });

        res.json({
            status: "success",
            message: "User logged in successfully",
            token
        });

    } catch (error: any) {
        console.log(error.message);
        res.json({
            status: "failed",
            message: error.message
        });
        return;
    }
}

export async function handleProfile(req:any, res:any){
        try {
            const user = await User.findById(req.user.id).select('-password');
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: 'Server error' });
        }
}