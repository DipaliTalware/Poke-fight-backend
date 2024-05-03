const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;
const pokemon = require('./routes/pokemon');
const threePokemon = require('./routes/threePokemon');
const connectDB = require('./dbinit');
connectDB();

app.get('/', (req, res) => {
	res.json('Welcome to List Of Pokemons API');
});

//form submission
app.use(express.urlencoded({ extended: true }));

app.use('/api/pokemons', pokemon);

app.use('/api/threepokemons', threePokemon);

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
