const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const env = require('dotenv');

const app = express();

//config
env.config({ path: './.env' });

//middle ware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

//routes
const routes = require('./Routes/index');

app.use(routes);
app.use('*', (req, res) => {
  res.status(404).json({ message: 'no route found' });
});
app.listen(9000, () => {
  console.log('App is running @ port-->http://localhost:9000');
});
