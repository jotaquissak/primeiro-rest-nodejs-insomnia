const express = require('express');
const server = express();
server.use(express.json());

const jogadores = ['Messi', 'Cristiano Ronaldo', 'Neymar', 'Haaland'];

server.get('/jogadore/:index', (req, res) => {
    const { index } = req.params;

    return res.json(jogadores[index]);
});

server.get('/jogadores', (req, res) => {
    return res.json(jogadores);
});

server.post('/jogadores', (req, res) => {
    const { name } = req.body;
    jogadores.push(name);
    
    return res.json(jogadores);
});

server.put('/jogadores/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    jogadores[index] = name;

    return res.json(jogadores);
});

server.delete('/jogadores/:index', (req, res) => {
    const { index } = req.params;
    jogadores.splice(index, 1);
    
    return res.json({message: "O jogador foi removido"});
});

server.listen(5000);
console.log('Servidor aberto');