const express = require ('express');
const app = express();

const bodyParser = require ('body-parser');
app.use (bodyParser.json());
const Cliente = require ('./models/cliente');
const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://fatec_ipi:senha1234@cluster0.ssm0w.mongodb.net/fatec_ipi?retryWrites=true&w=majority')
.then(() => console.log ("Conexão OK"))
.catch((e) => console.log ("Conexão falhou: " + e));

const livros = [
  {
    id: '1',
    titulo: 'Cem Sonetos de Amor',
    autor: 'Pablo Neruda',
    paginas: '100'
  },
  {
    id: '2',
    titulo: 'O Auto da Compadecida',
    autor: 'Ariano Suassuna',
    paginas: '300'
  }
]

app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader ('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader ('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/clientes', (req, res, next) => {

  const cliente = new Livros ({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    paginas: req.body.paginas
  });
  livro.save()
    .then((livroInserido) => {
      console.log(`Inserção ok: ${livroInserido}`);
    res.status(201).json({
      mensagem: 'o livro foi inserido',
      id: livroInserido._id
    });
  })
  .catch((error) => {
    console.log (`Inserção FALHA: ${error}`);
    res.status(404).json({
      mensagem: 'O livro não foi inserido, tente novamente mais tarde'
    })
  })
});

app.get ('/api/livros', (req, res, next) =>{
  Cliente.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      mensagem: 'OK',
      livros: documents
    })
  })
  .catch ((error) => {
    console.log ('Busca falhou: ' + error)
    res.status(404).json({
      mensagem: 'Falhou',
      livros: []
    })
  })
})

app.delete('/api/livros/:id', (req, res, next) => {
  Livro.deleteOne({_id: req.params.id})
  .then((resultado) => {
    console.log(resultado);
    res.status(200).json({mensagem: "Livro removido"});
  })
});

module.exports = app;
