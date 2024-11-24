import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
// import db from "./utils/db.config.js";
import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());

const port = process.env.PORT || 3001;
console.log(process.env);
// api's
app.use("api/v1/user", userRoute);
connectDB();

app.get("/", (req, res) => {
  res.send("hello from node.js*");
});
app.listen(port, () => {
  console.log(`server has started at:${port}`);
});
