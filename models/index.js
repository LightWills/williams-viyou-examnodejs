const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://root:root@cluster0-1hntq.mongodb.net/exam?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports.Cake = require('./CakeModel');