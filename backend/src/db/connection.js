// connection.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connecttodatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://harshit340:hllMTFSPOgLVlppO@cluster0.4cfnw1v.mongodb.net/movie");
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
};


export { connecttodatabase};

