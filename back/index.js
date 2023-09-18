require('dotenv').config();
const { database } = require('./src/db');
const server = require("./src/server")

const port = process.env.PORT || 3001;

// Syncing all the models at once.
// tambien puedo usar alter por force para no borrar todo de la base de datos
server.listen(port, async () => {
    await database.sync({ force: true });
    console.log(`listening on port ${port}`); 
  });