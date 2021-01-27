//import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");


//create the rest object
let app = express();

//enable the cors policy
app.use(cors());


//set the json as MIME Type
app.use(bodyparser.json());


//read the json
app.use(bodyparser.urlencoded({extended:false}));


let ashokIT = mongodb.MongoClient;


//create the get request
app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/miniproject-ashokit?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            let db = connection.db("miniproject-ashokit");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});


//assign the port number
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("Server Started");
});