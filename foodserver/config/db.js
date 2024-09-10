import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://srujana:130899@cluster0.su52w.mongodb.net/food').then(()=>console.log("DB connected"));
}