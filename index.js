const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');// Módulo nativo


const axios = require('axios');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));// Middleware para leitura de arquivos estáticos
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let users = [];


// Consumindo API jsonplaceholder
// app.get('/anydata', (req,res,next) => {
//     axios
//         .get('https://jsonplaceholder.typicode.com/users')
//         .then(response => {
//             return res.render('home', {users: response.data})
//         });
// })

app.get('/anydata', (req, res, next) => {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return res.render('home', {users: response.data})
        });
})




app.get('/admin', (req, res) =>{
    console.log(users);
    res.render('admin');
})

app.post('/admin', (req, res) => {
    const userData = {
        name:  req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
    users.push(userData);
    res.redirect('/users');
})

// Retorna os usuários
app.get('/users', (req, res) => {
    res.render('users', {users: users});
})

app.listen(PORT, () => console.log('O servidor está rodando na port: ' + PORT));