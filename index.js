const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res, next) =>  { 
    res.render('home');
})

app.get('/contato',(req,res) => {
    res.render('contato');
})

app.listen(PORT, () => console.log('O servidor está rodando na port' + PORT));














// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req,res,next) => {
//     res.send('<h2>Hello World 3</h2>');
// })

// app.listen(PORT, () => console.log('O servidor está rodando na port ' + PORT));


