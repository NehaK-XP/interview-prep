import express from "express"
import path from "path"
import cors from "cors"
import { serve } from "inngest/express"
import { clerkMiddleware } from "@clerk/express"
import { ENV } from "./lib/env.js"
import { connectDB } from "./lib/db.js"
import { inngest, functions } from "./lib/inngest.js"
import { fileURLToPath } from "url"
import { protectRoute } from "./middleware/protectRoute.js"
import chatRoutes from "./routes/chatRoutes.js"
import sessionRoutes from "./routes/sessionRoutes.js"


const app = express() 

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, "../../")

// middleware
app.use(express.json())

app.use(cors({
    origin: ENV.CLIENT_URL,
    credentials: true
}))
app.use(clerkMiddleware())

app.use("/api/inngest", serve({client: inngest, functions, signingKey: ENV.INNGEST_SIGNING_KEY }))

app.get("/api/health", (req, res) => {
    res.status(200).json({ msg: "success from api"})
})

app.get("/api/chat", chatRoutes)

app.get("/api/sessions", sessionRoutes)

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(rootDir, "frontend", "dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(rootDir, "frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
    try {
        await connectDB()
        app.listen(ENV.PORT, () => {
            console.log(`Server is running on port ${ENV.PORT}`)
        })
    } catch (error) {
        console.error("Error starting the server", error)
    }
}

startServer()