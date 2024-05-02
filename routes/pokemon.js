const express = require('express');

// import all the controllers
const {
	getAllPokemon,
	getOnePokemon,
	createPokemon,
	updatePokemon,
	deleteOnePokemon,
	createManyPokemons,
} = require('../controllers/pokemon');

// create a new instance or express router
const api = express.Router();

// decide which controllers to execute on the specific actions
api.route('/').get(getAllPokemon).post(createPokemon).post(createManyPokemons);

api
	.route('/:id')
	.get(getOnePokemon)
	.put(updatePokemon)
	.delete(deleteOnePokemon);

module.exports = api;
