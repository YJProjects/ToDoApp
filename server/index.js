const express = require("express");
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    console.log("Req: " + req);
    console.log("Request Recieved")
    res.json({
    id: 1,
    name: 'John eDoe',
    type: 'GET'
  });
})

app.listen(port, (err) => {
    if (err) console.log("Err: " + err);
    console.log("Listening on port : " + port)
})