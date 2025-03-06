import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
       const conn = await mongoose.connect(process.env.MONGODB_URI)
       console.log('Connection Request: Granted')
    }catch(err){
        console.log(err)
    }
}