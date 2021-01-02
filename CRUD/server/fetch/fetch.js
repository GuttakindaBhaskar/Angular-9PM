//fetch.js file used to create the GET Request.
//this file used to make the custom module (fetch)


//import the modules
const express = require("express");
const mongodb = require("mongodb");

const ashokIT = mongodb.MongoClient;

const fetch = express.Router().get("/",(req,res)=>{
    ashokIT.connect("mongodb://localhost:27017/angdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
});

module.exports = fetch;