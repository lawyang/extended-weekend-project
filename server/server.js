const express = require('express');
const app = express();
const PORT = process.endPORT || 5000;
const bodyParser = require('body-parser');
const movieRouter = require('./module/router/movie.router');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/collection', movieRouter);

app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`)    
});