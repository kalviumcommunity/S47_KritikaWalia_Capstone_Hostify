const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const data = require('./data.json');
const port = process.env.PORT 
const { startDatabase } = require('./Controller');

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send(data);
});

const startServer =  () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${port}`);
    })
}
startDatabase().then(() => startServer())
