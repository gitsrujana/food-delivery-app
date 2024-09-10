import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

const app=express()
const port=4000


app.use(express.json())
app.use(cors());



//db connection
connectDB();


//api endpoints
  app.use('/api/food',foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
 app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
  res.json({message:'cors is working'});
});

app.get("/",(req,res)=>{
    res.send("API working")
})
app.listen(port,()=>{
    console.log(`server stareted on http://localhost:${port}`)
})
//mongodb+srv://srujana:130899@cluster0.su52w.mongodb.net/?