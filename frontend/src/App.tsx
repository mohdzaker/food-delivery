import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ForgotPassword from "./pages/user/auth/ForgotPassword"
import LoginPage from "./pages/user/auth/LoginPage"
import RegisterPage from "./pages/user/auth/RegisterPage"
import HomePage from "./pages/user/Home"

export default function App(){
  return(
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        {/* Register Page */}
        <Route path="/register" element={<RegisterPage />} />
        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        {/* Forgot Password Page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}