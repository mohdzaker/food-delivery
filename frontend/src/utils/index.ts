import Cookies from "js-cookie";
import { BACKEND_URL } from "../config";

const getUserDetails = async () => {
    const token = Cookies.get("token");
    if (!token) {
        return "failed";
    }

    const response = await fetch(`${BACKEND_URL}/api/auth/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch user details");
    }
    const data = await response.json()
    return data?.status;
}

let isLoggedIn:Boolean;
const isSigned:any = getUserDetails();
if(isSigned === "failed"){
    isLoggedIn = false;
}else{
    isLoggedIn = true;
}

export default isLoggedIn;