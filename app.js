const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(cors({origin:'*'}));
app.use(express.json());

app.get('/', (req, res) => res.json({message:'app is running'}));

app.get('/saludo', (req, res) => {
    return res.json({
        saludo:'hola desde alma'
    });
});


const PORT = process.env.PORT || 443;
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});



