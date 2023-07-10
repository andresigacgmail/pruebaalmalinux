const express = require('express');
require('dotenv').config();
const fs = require('fs');
const https = require('https');
const app = express();
// Configura tus rutas y middleware de Express aquí

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/homeristicodeath.tech/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/homeristicodeath.tech/fullchain.pem')
  };
const cors = require('cors');

app.use(cors({origin:'*'}));
app.use(express.json());

app.get('/', (req, res) => res.json({message:'app is running'}));

app.get('/saludo', (req, res) => {
    return res.json({
        saludo:'hola desde alma'
    });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});



