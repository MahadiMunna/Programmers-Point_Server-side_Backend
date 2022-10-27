const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT||5000;

app.use(cors());

const categories = require('./Data/categories.json')

const tutorials = require('./Data/tutorials.json');

app.get('/courses',(req,res)=>{
    res.send(categories);
})

app.get('/tutorials',(req,res)=>{
    res.send(tutorials);
})

app.get('/tutorials/:id',(req,res)=>{
    const id = req.params.id;
    const tutorial = tutorials.filter(t=>t.id === id)
    res.send(tutorial);
})

app.get('/',(req,res)=>{
    res.send('News api running')
});


app.listen(port,()=>{
    console.log('News server running on port',port);
})