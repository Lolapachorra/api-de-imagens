const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config()
require("./db")
app.use(cors())

app.use(express.json());
app.use('/uploads', express.static('uploads'));
const port = process.env.PORT || 3000;

const pictureRouter = require('./routes/picture')

app.use('/pictures', pictureRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

