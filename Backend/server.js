const express = require("express");
const ejs = require("ejs")
const app = express();


const pages = require("./routes/pages");

app.set("view engine", "ejs");
app.set("views", "/views");
app.use("/public", express.static(process.cwd() + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));


app.use("/pages", pages)
app.get("/", async (req, res) => {
    res.json("Welcome to Omarichet LMS");
})
app.listen(8000, () => {
    console.log("Listening at port 8000")
})