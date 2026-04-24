import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/User.route.js";
import connectDB from "./lib/db.js";
import path from "path";

const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", userRoutes);

if (process.env.NODE_ENV === "development") {
  app.get("/", (req, res) => {
    res.send("server is ready!");
  });
}
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("../frontend/dist")));

  app.get("/{*any}", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started on PORT: ${PORT}`);
});
