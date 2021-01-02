let express = require("express");
let mongodb = require("mongodb");
let ashokIT = mongodb.MongoClient;
const update = express.Router().put("/",(req,res)=>{
    ashokIT.connect("mongodb://localhost:27017/angdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("products")
              .updateOne({"p_id":req.body.p_id},
                         {$set:{"p_name":req.body.p_name,"p_cost":req.body.p_cost}},(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send({"update":"success"});
                    }
            });
        }
    });
});
module.exports = update;