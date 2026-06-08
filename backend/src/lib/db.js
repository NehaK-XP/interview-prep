import mongoose, { connect } from "mongoose"
import { ENV } from "./env.js"

export const  connectDB = async () => {
    try {
        const conn = await connect(ENV.DB_URL)
        console.log("Successfully connected to MongoDB", conn.connection.host)
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
        process.exit(1)
    }
}


