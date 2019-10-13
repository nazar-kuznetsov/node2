const express = require('express');
const mongoose = require('mongoose');
const About = require('./models/friends');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// mongoose.connect("mongodb://d61797b123e1c5b9c82757e72defd031:123456@9a.mongo.evennode.com:27017/d61797b123e1c5b9c82757e72defd031", { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });


app.get('/api/nazar2', async (req, res) => {
    const {
        name,
    } = req.body;


    const data = new About({
        name,
    });

    await data.save().then(response => {
        return res.json(response);
    });
})

app.get('/api/nazar', async (req, res) => {
    console.log(23)
    return res.json(await About.find());
});


app.get('api/users', (req, res) => {
    console.log('users')
    // return res.json(await About.find());
});


// Главный сайт
app.use('/', express.static(path.join(__dirname, 'front-end')))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
});

// db.once('open', () => console.log('Подключение к базе данных успешно'));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`);
});
