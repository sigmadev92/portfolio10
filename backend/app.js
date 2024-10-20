import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 1008;
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`Backend server is running on http://localhost:${PORT}`)
);

app.get("/", (req, res) => {
  console.log("Arrived at Root");
  res.send("<h1>Backend route reached</h1>");
});
