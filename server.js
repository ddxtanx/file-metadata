var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();
app.use(fileUpload());

app.get("/", function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<p>Submit a file to view it's size</p><br/><form method='POST' action='/' encType='multipart/form-data'><input type='file' name='file'/> <input type='submit'></form>");
    res.end();
});
app.post("/", function(req,res){
   var file = req.files.file;
   var data = file.data;
   var len = data.length;
   var jsonData = {
       "size": len 
   }
   res.writeHead(200, {'Content-Type': 'text/json'});
   res.end(JSON.stringify(jsonData));
});
app.listen(process.env.PORT || 8080);