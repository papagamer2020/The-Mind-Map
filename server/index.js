import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/Maps.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const URL =
  "mongodb+srv://mindmap:mindmap123@mindmap.wkwfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3001;

mongoose
  .connect(URL)
  .then(() =>
    app.listen(PORT, () => console.log("Server running on port: 3001"))
  )
  .catch((ERR) => console.log(error.message));

mongoose.set("debug", true);
