"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_model_1 = __importDefault(require("../models/User.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthRouter = express_1.default.Router();
AuthRouter.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = yield req.body;
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
        const checkEmailExists = yield User_model_1.default.findOne({ email: password });
        if (checkEmailExists) {
            res.json({
                status: "failed",
                message: "Email already registered! Please try again with another email"
            });
            return;
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = new User_model_1.default({
            name,
            email,
            password: hashedPassword
        });
        yield newUser.save();
        res.json({
            status: "success",
            message: "User registered successfully!"
        });
    }
    catch (error) {
        console.log(error.message);
        res.json({
            status: "failed",
            message: error.message
        });
    }
}));
AuthRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const checkUserExists = yield User_model_1.default.findOne({
            email
        });
        if (!checkUserExists) {
            res.json({
                status: "failed",
                message: "Email is not registered. Please register now and try again."
            });
            return;
        }
        const token = yield jsonwebtoken_1.default.sign(email, process.env.JWT_SECRET);
        req.token = token;
        res.json({
            status: "success",
            message: "User logged in successfully"
        });
    }
    catch (error) {
        console.log(error.message);
        res.json({
            status: "failed",
            message: error.message
        });
        return;
    }
}));
exports.default = AuthRouter;
