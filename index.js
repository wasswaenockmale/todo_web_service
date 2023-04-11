const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json()); // This will turn all the data passed into proper json format. This is a json.parser.


app.get('/api/tasks',(request, response)=>{

});

app.get('/api/tasks/:id', (request, response)=>{

});