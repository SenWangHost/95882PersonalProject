const express = require('express');
const app = express();
const path = require('path');
// connnect the database
const mongoose = require('mongoose');
mongoose.connect('mongodb://SenWangBittiger:Wangsen123321@ds127936.mlab.com:27936/senwangfirstdb');

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

// app.get('/', (req, res) => res.send('Hello World!'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);

// other request will be redirected back the front end
app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/') });
});

app.listen(3000, () => console.log('News Server is listening on port 3000!'));