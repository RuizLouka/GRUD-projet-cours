const express = require('express');
const bodyParser = require('body-parser');
const dataBase = require('./app/models/modelUser');

const app = express();

// transforme le contenu en json
app.use(bodyParser.json());

// transforme url
app.use(bodyParser.urlencoded({ extended: true }));

// app use .static
app.use(express.static('public'));

const userRoutes = require('./app/routes/userRoute');
app.use('/users', userRoutes());

const port = 3000;
app.listen(port, () => {
    console.log(`Le port est: ${port}.`)
});

dataBase.mongoose
    .connect(dataBase.url, {
        useNewUrlParser: true
    })
    .then(() => console.log('Connecte'))
    .catch(error => console.log(error));