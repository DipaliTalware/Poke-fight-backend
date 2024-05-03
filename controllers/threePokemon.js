const ThreePokemon = require('../schemas/ThreePokemon');

// get all pokemons
const getAllPokemon = async (req, res) => {
	try {
		const pokemons = await ThreePokemon.find();
		if (!pokemons.length) {
			res.status(200).json({ msg: 'No pokemon in the DB' });
		} else {
			res.status(200).json({ pokemons });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

const createPokemon = async (req, res) => {
	try {
		console.log('I am here with single');
		const { name, type, stats, image_url } = req.body;
		const pokemon = await ThreePokemon.create({
			name,
			type,
			stats,
			image_url,
		});
		res.status(201).json(pokemon);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getAllPokemon,
	createPokemon,
};
