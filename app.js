const cors = require('cors');
const express = require('express');

var app = express();

//Conexion con mongoDb
const mongoose = require('mongoose');

const user = "user1"
const password = "JEEhe4oickycfL0U"
const dbname = "portfolio-backend-lulu"
const uri = `mongodb+srv://${user}:${password}@cluster0.pzztn.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(()=> console.log('Base de datos conectada'))
    .catch(e=> console.log(e))

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hola express')
});

const {
    profileController,
    profileIdController,
    profileFilterController,
    profileSaveController,
    projectsController,
    projectsIdController
} = require('./controller')

app.get('/',(req,res)=>{
    res.send('Hola express')
});

/*app.get('/api',(req,res)=>{
    res.send(profile)
});*/

app.get('/profile',[
    profileController
])

app.get('/profile/:id',[
    profileIdController
])

app.get('/profile2',[
    profileFilterController
])

app.post('/profile',[
    profileSaveController
])

app.get('/projects',[
    projectsController
])

app.get('/projects/:id',[
    projectsIdController
])

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server on: ${port}`)
})