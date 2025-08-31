let express = require('express');
let app = express();

let port = 8080;
const path =require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static("public/css"));
app.use(express.static("public/JS"));


app.listen(port,()=>{
    console.log("app is listening on port "+port);
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/home",(req,res)=>{
    res.render("home.ejs");
});

app.get("/posts/:username",(req,res)=>{
let {username} = req.params;
const instaposts = require(path.join(__dirname,"data.json"));
let data = instaposts[username];
console.log(data);

res.render("posts.ejs",{data,username});

});



        



