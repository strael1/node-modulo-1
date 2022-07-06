const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');// Módulo nativo

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));// Middleware para leitura de arquivos estáticos
app.use(express.urlencoded({extended: true}));
// app.use(express.urlencoded({extended: true}));

// query string  
// http://localhost:3000/application?id=1&name=rafael
// {
//     "name": "rafael"
// }



// software do meio 

// A     PONTE     B
// app.use((req,res,next) => {
//     req.messagem = 'Eu não gosto de estudar';
//     next();
// })

// app.use((req,res,next) => {
//     console.log(req.messagem);
//     next();
// })



let users = []

app.get('/', (req, res, next) =>  { 
    res.render('home', {title: 'André desenvolvedor FullStack', apply: 'Job'});
})

app.get('/contact', (req, res) =>{
    console.log(users);
    res.render('contact');
})

app.post('/contact', (req, res) => {
    const userData = {
        name:  req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
    users.push(userData);
    res.redirect('/users');
})

// app.get('/contact', (req,res) => {
//     console.log(users);
//     res.render('contact');
// })

// app.post('/contact', (req,res) => {
//     const userData = {
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone
//     }

//     users.push(userData);
//     res.redirect('/users');
// })
 


// Retorna os usuários
app.get('/users', (req, res) => {
    res.render('users', {users: users});
})

app.listen(PORT, () => console.log('O servidor está rodando na port: ' + PORT));