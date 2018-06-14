const pg = require('pg');
const pool = pg.Pool;

const DBNAME = 'movie_collection';
const config = {
    database: DBNAME,
    host: 'localhost',
    port: 5432,
    max: 10,
    indleTimeoutMillis: 30000
}

const pool = new Pool(config);

pool.on('connect', (client)=>{
    console.log(`connected to the dataase: ${DBNAME}`);
});

pool.on('error', (error, client)=>{
    console.log(`error connected to the databse from client: ${client}, error: ${error}`);
});

module.exports = pool;