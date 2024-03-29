const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.
    once('open', () => {
        console.log('MongoDB database connection established successfully');
    })
    .catch(err => console.log(err));

const journalRouter = require('./routes/journals');

app.use('/journals', journalRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
