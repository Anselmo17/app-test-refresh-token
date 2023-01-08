const http = require('http');
const express = require('express');
const app = express();
const SECRET = "testeRefresh";
const jwt = require('jsonwebtoken');
const cors = require('cors');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable cors
app.use(
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);

app.get('/', (req, res, next) => {
    res.json({ message: "Tudo ok por aqui!" });
})

app.get('/clientes', (req, res, next) => {
    console.log("Retornou todos clientes!");
    res.json([{ id: 1, nome: 'luiz' }]);
})

app.post('/login', cors(), (req, res, next) => {
    console.log("Gerando o Token jwt");
    const { email, senha } = req.body;

    // set header response
    res.header('Access-Control-Allow-Origin', ['http://localhost:4200']);
    //esse teste abaixo deve ser feito no seu banco de dados
    if (email === 'teste@gmail.com' && senha === 'teste') {
        //auth ok
        const id = 1; //esse id viria do banco de dados
        const token = jwt.sign({ id, email }, SECRET, {
            expiresIn: 300 // expires in 5min
        });
        return res.json({ auth: true, token: token });
    }

    res.status(500).json({ message: 'Login inválido!' });
})


const server = http.createServer(app);
server.listen(3000);
console.log("Servidor escutando na porta 3000...")