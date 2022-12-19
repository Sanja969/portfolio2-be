const https = require('https');
require('dotenv').config();
const fs = require('fs');

const app = require('./app');
const { mongoConnect } = require('./services/mongo');

const PORT = process.env.PORT || 8000;


const server = https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
}, app);


async function startServer() {
  await mongoConnect();

  server.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer(); 