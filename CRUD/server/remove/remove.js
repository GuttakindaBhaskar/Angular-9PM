let express = require("express");
let mongodb = require("mongodb");
let ashokIT = mongodb.MongoClient;
let remove = express.Router().delete("/",(req,res)=>{
    ashokIT.connect("mongodb://localhost:27017/angdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("products").deleteOne({"p_id":req.body.p_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            });
        }
    });
});
module.exports = remove;