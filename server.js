const express = require("express")
const app = express()

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port);

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

