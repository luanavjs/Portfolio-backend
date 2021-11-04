const cors = require('cors');
const express = require('express');

var app = express();

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

const port = process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server on: ${port}`)
})