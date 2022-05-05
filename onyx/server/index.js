const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const fileUpload = require('express-fileupload');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/static', express.static(path.join(__dirname,'/public')));
app.use(passport.initialize());

app.use(fileUpload({
    createParentPath: true
}));

const users = require('./routes/api/users');
app.use('/api/users', users);

const movies = require('./routes/api/movies');
app.use('/api/movies', movies);


require('./config/passport')(passport);

mongoose.connect(
    'mongodb+srv://tst123:onyx@cluster0.60l1l.mongodb.net/onyx?retryWrites=true&w=majority',
    {useNewUrlParser: true}
).then(() => {
    console.log("adatbázishoz csatlakoztatva")
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serever started on port ${port}`));

