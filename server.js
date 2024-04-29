const express = require('express');
const cors = require('cors');
// require('dotenv').config();
const app = express();
app.use(cors());
// const { Pool } = require('pg');
app.use(express.json());
const PORT = process.env.PORT || 8080;
// const pool = new Pool();

app.get('/', (req, res) => {
	res.json('Welcome to List Of Pokemons API');
});

app.listen(PORT, () =>
	console.log(`Listening on PORT  http://localhost:${PORT}`)
);
