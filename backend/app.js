const express = require("express");
//this line will create server
const app = express();
const cors = require("cors");
const router = require("./routes/user-routes");
const dotenv = require("dotenv");
dotenv.config();
const connectToDb = require("./config/db");
connectToDb();
const cookieParser = require("cookie-parser");

//ye method call karte hi jo variables (.env) files me created hai unka acces mil jayega poori application me
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", router);

//this line will start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
