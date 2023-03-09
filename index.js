const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;
//to get data.json file
const apiData = require("./data.json");
app.get("/",(req,res) => {
    res.send("Hello I am Amrita");
});
app.get("/name", (req,res)=>{
    res.send(apiData)
});

app.listen(port, ()=>{
    console.log("I am here");
});
//http://localhost:3000/