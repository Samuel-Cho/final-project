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

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

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

app.post('/api/save', (req, res, next) => {
  const { alias, url, imageUrl, name, location: { address1 }, rating, reviewCount } = req.body;
  if (!alias || !url || !imageUrl || !name || !address1 || !rating || !reviewCount) {
    throw new ClientError(400, 'alias, url, image_url, name, address1, rating, and review_count are required fields');
  }
  const sql = `
    insert into "restaurants" ("alias", "url", "imageUrl", "name", "address1", "rating", "reviewCount")
    values ($1, $2, $3, $4, $5, $6, $7)
    returning *;
  `;
  const params = [alias, url, imageUrl, name, address1, rating, reviewCount];
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => next(err));
});

app.delete('/api/delete', (req, res, next) => {
  const { alias } = req.body;
  if (!alias) {
    throw new ClientError(400, 'alias is a required field');
  }
  const sql = `
    delete from "restaurants"
     where "alias" = $1
    returning *;
  `;
  const params = [alias];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        throw new ClientError(404, `cannot find restaurant with alias ${alias}`);
      }
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
