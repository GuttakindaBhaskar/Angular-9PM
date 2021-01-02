//used to encapsulates the modules    @fetch        @insert     @update     @remove
let express = require("express");
let cors = require("cors");

let app = express();
//where "app" called as rest object (master object)
//where "app" object used to "use the custom modules"


//enable the ports communication
app.use(cors());


app.use("/fetch",require("./fetch/fetch"));
app.use("/insert",require("./insert/insert"))
app.use("/update",require("./update/update"));
app.use("/remove",require("./remove/remove"));


let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server started");
});

