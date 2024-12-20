import mongoose from "mongoose";
export default async function connectToDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log("Connected to MongoDB successfully!");
    } catch (error:any){
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}