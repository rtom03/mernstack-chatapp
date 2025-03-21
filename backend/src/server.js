import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT;

const __dirname = path.resolve();
const allowedOrigins = ["http://localhost:5173", "https://chimeln.vercel.app"];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoute);
if (process.env.MODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
  connectDB();
});
