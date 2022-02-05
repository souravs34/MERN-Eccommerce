import dotenv from "dotenv";
import express from "express";
import path from "path";
import morgan from "morgan"; // For log routes in console
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Api is running");
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/uploads", uploadRoutes);
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
//Upload making folder static
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
const Environment = process.env.NODE_ENV;
app.listen(
  PORT,
  console.log(`Server running in ${Environment} on port ${PORT}`)
);
