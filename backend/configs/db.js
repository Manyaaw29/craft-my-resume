import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const projectName = "CraftMyResume"; 
    let mongodbURI = process.env.MONGODB_URI;
    
    if (!mongodbURI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

   
    if (mongodbURI.endsWith('/')) {
      mongodbURI = mongodbURI.slice(0, -1);
    }

    await mongoose.connect(`${mongodbURI}/${projectName}`);
    
    console.log("MongoDB connected successfully");
    
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
 
  }
};


export default connectDB;
