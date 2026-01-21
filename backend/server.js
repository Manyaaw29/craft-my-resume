import express from "express";
import cors from "cors";
import "dotenv/config.js";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import openaiRouter from "./routes/openaiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Database Connection
await connectDB();

app.use(express.json());

// CORS configuration for production
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Server is live...");
});

//Routes
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/openai", openaiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
