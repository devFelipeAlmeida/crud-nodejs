
express = require('express');
app = express();
app.use(express.json())

const jogos = ['Sonic', 'Super Mario', 'Minecraft'];

app.get('/jogos', (req, res) => {
     return res.json(jogos)
})

app.get('/jogos/:index', (req, res) => {
     const { index } = req.params;

     return res.json(jogos[index]);
})

app.post('/jogos', (req, res) => {
    const { name } = req.body

    jogos.push(name);
    return res.json(jogos);
})

app.put('/jogos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    jogos[index] = name;

    return res.json(jogos);
})

app.delete('/jogos/:index', (req, res) =>{
    const { index } = req.params;

    jogos.splice(index, 1);
    return res.json({ message: `jogo ${index}, foi deletado` });
})
app.listen(3000);