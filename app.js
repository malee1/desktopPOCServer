const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

const customer = require('./data/mockCustomer');
const urls = require('./data/defaultUrls');
const findUser = require('./findUser');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        name: 'From Server Hello World'
    });
});

app.post('/getuser', (req, res) => {
    const userId = req.body.fileId;
    const user = findUser(userId);
    console.log(user)
    res.send(user);
})

app.get('/getcustomer', (req, res) => {
    res.send(customer);
});

app.get('/geturls', (req, res) => {
    res.send(urls);
})

app.listen(port, () => {
    console.log(`Server up on ${port}`);
});