import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

//rest object
const app = express();

//REST API
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app mern stack project</h1>");
});

//PORT
const PORT = process.env.PORT || 8090;

//RUN listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .black
  );
});
