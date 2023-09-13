import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnection from "./database/db.js";
import router from "./routes/route.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
const PORT = process.env.PORT;
dbConnection();

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});


