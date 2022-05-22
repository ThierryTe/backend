const express = require('express');
const cors = require("cors");
const app = express();
const config = require("./config");
const mongoose = require("mongoose");
const siteRoute = require('./routes/siteRoute');
const collaboRoute = require('./routes/collaboRoute');
const paysRoute = require('./routes/paysRoute');
const showBanner = require('node-banner');
const path = require('path');

// Filtrage des adresses de consommations des API
var corsOptions = {
    origin: "http://localhost:3000"
  };

//Affichage du banner
  app.use(cors(corsOptions));
  (async () => {
    await showBanner('START TOIBIBOU');
  })();

  //connexion à la BD
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
  })
  .then(() => {
    console.log("Connexion à la base de données réussie");
  })
  .catch(err => {
    console.error("Erreur de connexion", err);
    process.exit();
  });
// Utilisation de express
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Démarrage du serveur
app.listen(config.port, () => {
    console.log(`Le serveur est démarré sur le port ${config.redisHost}:${config.port}`);
  });

//Exposition des routes
app.use('/api/sites', siteRoute);
app.use('/api/collaborateurs',collaboRoute);
app.use('/api/pays', paysRoute);


