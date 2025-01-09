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
//app.use() ka kaam hai kisi specific path ke liye middleware ya router ko connect karna.
//yaha pe (/users) ye base path set kiya hai (router wale sare) path isi pe route honge
app.use("/users", router);

//this line will start the server
app.listen(3000);

// const morgan = require("morgan");
//Yeh code server ke root route ("/") par GET request handle karta hai
// Jab koi user "/" open karega, toh response me "Home page" text bheja jayega
// app.get("/", (req, res) => {
//   res.send("Home page");
// });
