import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
dotenv.config();
const app=express();
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