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

// GET call for genres
router.get('/genres', (req, res) => {
    console.log(`GET GENRE request to DB from movie.router`);
    const queryText = "select * from genres"
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
    console.log('in post router:', req.body);
    
    let newMovie = req.body;
    let queryPost = "INSERT INTO movies (title, release_date, runtime, trailer, genres_id) VALUES ($1, $2, $3, $4, $5)";
    pool.query(queryPost, [newMovie.title, newMovie.release_date, newMovie.runtime, newMovie.trailer, newMovie.genres_id])
        .then((result) => {
            console.log('successful post to DB', result);
            res.sendStatus(200)
        })
        .catch((error) =>{
            console.log('Error posting to DB', error);
            res.sendStatus(500)
        })
})


module.exports = router;