"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserAuth = (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
        return res.json({
            status: "failed",
            message: "No token, authorization denied"
        });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    }
    catch (error) {
        console.log(error.message);
        res.json({
            status: "failed",
            message: "Token is not valid"
        });
    }
};
