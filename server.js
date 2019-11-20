const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/proyecto'));

app.listen(process.env.PORT || 8080);


app.get('/*', function(req,res) {
    const fullPath = path.join(__dirname + '/proyecto/index.html');
    console.log(" Fetching from.." + fullPath);
      res.sendFile(fullPath);
//res.sendFile(path.join(__dirname+'/dist/proyecto/index.html'));
});


/*const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);

//PATH LOCATION STARTEGY

app.get('/*', function(req,res){
  const fullPath = path.join(__dirname + '/dist/index.html');
  console.log(" Fetching from.." + fullPath);
    res.sendFile(fullPath);
})

console.log('Server started running..');

//Changed to run on Heroku*/