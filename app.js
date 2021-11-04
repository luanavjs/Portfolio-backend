const express = require('express');
const cors = require('cors');

var app = express();

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('Hola express')
});

//Conexion a base de datos


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

