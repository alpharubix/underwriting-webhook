import mongoose from "mongoose"

export async function connectDB() {
  try {
    console.log(process.env.MONGODB_URL)
    const connection = await mongoose.connect(`${process.env.MONGODB_URL}/underwriting`)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  }
}
