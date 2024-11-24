import mongoose from "mongoose";
mongoose.connect(process.env.CONN_STR);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("DB Connection Successfull");
});
db.on("error", () => {
  console.log("DB Connection Failed");
});

export default db;
