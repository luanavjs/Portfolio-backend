const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/',(req,res)=>{
    res.send('Hola express')
});

/*app.get('/api',(req,res)=>{
    res.send({
        "nombre":"Luana",
        "apellido":"Vallejos",
        "edad":"24",
        "pais":"Argentina",
        "ocupacion":"Estudiante",
        "descripcion":""
    })
})
app.listen(process.env.PORT || 3000)*/

//Actividad

/*const {
    profile,
} = require('./media')*/

const {
    profileController,
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

app.listen(process.env.PORT || 3000)

