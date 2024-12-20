import express from 'express';
import { handleLogin, handleProfile, handleRegister } from '../controllers/auth';

const AuthRouter = express.Router();
AuthRouter.post('/register', handleRegister);
AuthRouter.post("/login", handleLogin);
AuthRouter.get("/profile", handleProfile);

export default AuthRouter;