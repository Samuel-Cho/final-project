require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);

app.get('/api/search/:location/:foodType', (req, res, next) => {
  const location = req.params.location;
  const foodType = req.params.foodType;
  if (!location || !foodType) {
    throw new ClientError(400, 'location and food type fields are required');
  }
  client.search({
    location: location,
    categories: foodType,
    limit: 21,
    open_now: true
  })
    .then(searchResults => res.json(searchResults.jsonBody))
    .catch(err => next(err));
});

app.get('/api/randomizerList', (req, res, next) => {
  const sql = `
    select "alias"
      from "restaurants"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
