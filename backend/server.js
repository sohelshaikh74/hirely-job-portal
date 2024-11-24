import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

const port = process.env.PORT || 3000;

// api's
// user
app.use("/api/v1/user", userRoute);
// company
app.use("/api/v1/company", companyRoute);
// job
app.use("/api/v1/job", jobRoute);
// application
app.use("/api/v1/application", applicationRoute);

http: app.get("/", (req, res) => {
  res.send("hello from node.js**");
});
app.listen(port, () => {
  connectDB();
  console.log(`Server has started at port:${port}`);
});
