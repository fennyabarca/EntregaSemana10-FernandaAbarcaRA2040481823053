const mongoose = require ('mongoose'); //ativando conexão MongoDb no Angular
const { stringify } = require('querystring');

const clienteSchema = mongoose.Schema({
  id: { type: String, required: true},
  nome: {type: String, required: true},
  fone: {type: String, required: false, default: '00000000'},
  email: {type: String, required: true}
});

module.exports = mongoose.model ('Livro', livroSchema);
