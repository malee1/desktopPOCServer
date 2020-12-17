const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

const customer = require('./data/mockCustomer');
const urls = require('./data/defaultUrls');

app.use(cors());

app.get('/', (req, res) => {
    res.send({
        name: 'From Server Hello World'
    });
});

app.get('/getcustomer', (req, res) => {
    res.send(customer);
});

app.get('/geturls', (req, res) => {
    res.send(urls);
})

app.listen(port, () => {
    console.log(`Server up on ${port}`);
});