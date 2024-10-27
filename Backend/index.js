import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;
const MngoURI = process.env.MongoURI;

// Connect to mongodb
try {
  mongoose.connect(MngoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongo");
} catch (error) {
  console.log("error: mongoose ", error);
}
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
