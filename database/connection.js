import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI;

export const connection =async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");

  } catch (e) {
    console.log("Server Error:", e.message);
    process.exit(1);
  }
}