const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const productsRoute = require("./routes/products");
dotenv.config(); //load the environment variables

//MIDDLEWARES
app.use(cors()); //enabling Cross-Origin-Resource-Sharing so that everybody can access the backend
app.use(express.json()); //parse the JSON in the request body so that we have "body" field in the request object
app.use("/api/auth/", authRoute); //authentication router
app.use("/api/products/", productsRoute); //products route
app.listen(PORT, function () {
  console.log("Server is listening on port " + PORT);
});

app.get("/", (req, res) => {
  res.status(200).json("MINI-POS Backend API is listening your request");
});
