import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js'; 
import cookieParser from 'cookie-parser';
dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('Mongodb is connected')
})
.catch((err)=>{
    console.log(err);
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes);
app.use((err,req,res,next)=>{
const statusCode=err.statusCode||500;
const message=err.message||'Internal Server Error';
res.status(statusCode).json({
    success:false,
    statusCode,
    message
});
});