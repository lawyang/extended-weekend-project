const express = require('express');
const router = express.Router();

const pool = require('../pool/movie.pool');

// GET call to DB
router.get('/', (req, res) => {
    console.log(`in GET request to DB from movie.router`);
    const queryText = "SELECT * FROM movies JOIN genres on movie_id = movies.id;"
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



module.exports = router;