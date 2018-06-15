const express = require('express');
const router = express.Router();

const pool = require('../pool/movie.pool');

// GET call to DB
router.get('/', (req, res) => {
    console.log(`in GET request to DB from movie.router`);
    const queryText = "select * from movies join genres on genres_id = genres.id"
    pool.query(queryText)
        .then((result) => {
            console.log('back from the GET CALL with:', result.data);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('ERROR handling GET call', error);
            res.sendStatus(500);
        })
}) // end GET call

//POST to DB
router.post('/', (req, res) => {
    let newMovie = req.body;
    let queryPost = 'INSERT INTO movies (title, release_date, runtime, trailer) VALUES ($1, $2, $3, $4, $5)';
})


module.exports = router;