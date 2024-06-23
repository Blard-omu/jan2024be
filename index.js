import express from "express";
import dotenv from "dotenv";
import AuthRouter from "./src/routes/auth.js"
import ProductRouter from "./src/routes/product.js"
import { connectDB } from "./src/db.config.js";
import cors from "cors";

dotenv.config();
// Express server
const app = express();

const port = process.env.PORT;
const url = process.env.MONGODB_URL;
app.use(express.json());
app.use(cors());



//Route
// app.get("/", myControllerFunction);

// Routes
app.use('/', AuthRouter);
app.use('/product', ProductRouter);


// connect db
connectDB(url)

// Listen to server
app.listen(port, () => {
  console.log(`NodeJS server listening on ${port}`);
});
