const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { User } = require('./models/User');
const config = require('./config/key');
const uri = config.mongoURI;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {console.log("mongodb connected")}).catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hi~~'));

app.post('/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if (err) {
            console.log(err)
            return res.json({ success: false, err })
        }
        return res.status(200).json({ success: true });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));