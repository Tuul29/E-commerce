// import express, { Request, Response } from "express";
// import dotenv from "dotenv";
// import { Resend } from "resend";
// import { sendEmail } from "./utils/send-email";
// dotenv.config();

// import authRoute from "./routes/auth-route";
// import { connectDB } from "./config/db";
// import cors from "cors";

// const PORT = process.env.PORT || "";
// const MONGO_URI = process.env.MONGO_URI || "";
// // express application object uusgeh
// const app = express();
// const resend = new Resend(process.env.RESEND_API_KEY);

// //middlewares
// app.use(express.json());
// app.use("/api/v1/auth", authRoute);

// app.get("/", async (req: Request, res: Response) => {
//   const rndOtp = Math.floor(Math.random() * 10_000)
//     .toString()
//     .padStart(4, "0");
//   sendEmail("tuul.tsegmed0329@gmail.com", rndOtp);
//   res.send("WElcome E-Commerce API Server");
// });

// connectDB(MONGO_URI);
// // server asaah
// app.listen(PORT, () => {
//   console.log(`Сервер localhost:${PORT} дээр аслаа.`);
// });
import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";

import { connectDB } from "./config/db";
import authRoute from "./routes/auth-route";
import categoryRoute from "./routes/category-route";

const PORT: string = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

// express application object uusgeh
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/categories", categoryRoute);

// home request
app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome E-Commerce API Server");
});

// connect mongodb
connectDB(MONGO_URI);
// server asaah
app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа.`);
});
