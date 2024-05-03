const express = require('express');

const api = express.Router();
const { getAllPokemon, createPokemon } = require('../controllers/threePokemon');

api.route('/').get(getAllPokemon).post(createPokemon);

module.exports = api;
