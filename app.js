const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');

app.use(cors({origin:'*'}));
app.use(express.json());


app.get('/saludo', (req, res) => {
    return res.json({
        saludo:'hola como estas'
    });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});



