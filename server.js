import dotenv from "dotenv";
dotenv.config();
import express from "express";
import colors from "colors";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";

const app = express();

// import connectDB from "./config/db.js";
import mongoose from "mongoose";
import cors from "cors";
app.use(cors({
  origin: true,
  credentials: true
}));

// config
// app.use(cors());
const DB =
  "mongodb+srv://Rghemendra1:Hemedra%407676@cluster1.rlm17w9.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(DB)
  .then(() => {
    console.log("connectionssssssss");
  })
  .catch((err) => {
    console.log("no");
  });


app.use(express.json());
app.use(morgan("dev"));
// app.use(cors({
//   credentials:true,
//   origin:"http://localhost:8080"
// }));


// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);

// rest api\
app.get("/", (req, res) => {
  res.send("wellcome hemendrea gour");
});

// port
// const PORT = 3000;
const PORT = process.env.PORT || 8080;
// run listen
app.listen(PORT, () => {
  console.log(`server is  running  ${PORT}`);
});
