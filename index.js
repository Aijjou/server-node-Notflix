const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const fs = require('fs')

//Autoriser les requetes quelque soit l'origin
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

//analyser et parser le body request
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.json({msg:'bonjour tout le monde'})
})

app.get('/personne',(req,res) => {
    res.json(data)
})



app.get('/listNews', (req, res) => {
    let obj = {}
    const contenuFichierAnnonce1 = fs.readFileSync('news.json')
    const news = JSON.parse(contenuFichierAnnonce1)
    const contenuFichierAnnonce2 = fs.readFileSync('films.json')
    const film = JSON.parse(contenuFichierAnnonce2)
    const contenuFichierAnnonce3 = fs.readFileSync('fav.json')
    const fav = JSON.parse(contenuFichierAnnonce3)
    const contenuFichierAnnonce4 = fs.readFileSync('serie.json')
    const serie = JSON.parse(contenuFichierAnnonce4)
    obj.film = film
    obj.news = news
    obj.fav = fav
    obj.serie = serie
    res.json(obj)
})

app.listen(80,function(){
    console.log("une nouvelle connexion")
})