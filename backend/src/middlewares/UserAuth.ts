import jwt, { JwtPayload} from "jsonwebtoken";

interface DecodedJWT extends JwtPayload {
    id: string;
}

export const UserAuth = (req: any, res: any, next:any) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if(!token){
        return res.json({
            status: "failed",
            message: "No token, authorization denied"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedJWT;
        req.user = decoded.id;
        next();
    } catch (error: any) {
        console.log(error.message);
        res.json({
            status: "failed",
            message: "Token is not valid"
        });
    }
}