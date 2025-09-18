import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ApiResponse from "./utils/ApiResponse";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json(ApiResponse.response(200, "success", "Api is working"));
});

const PORT: string = process.env.PORT || "5000";
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
