const Pokemon = require('../schemas/Pokemon');

// get all pokemons
const getAllPokemon = async (req, res) => {
	try {
		const pokemons = await Pokemon.find();
		if (!pokemons.length) {
			res.status(200).json({ msg: 'No pokemon in the DB' });
		} else {
			res.status(200).json({ pokemons });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// get one pokemon
const getOnePokemon = async (req, res) => {
	try {
		const { id } = req.params;
		const pokemon = await Pokemon.findById(id);

		if (pokemon) {
			return res.status(200).json(pokemon);
		}
		res.status(404).json({ msg: 'No pokemon found :(' });
	} catch (error) {
		res.status(500).json(error);
	}
};

// get random pokemon
const getRandomPokemon = async (req, res) => {
	try {
		const pokemon = await Pokemon.aggregate([
			{ $project: { _id: 0 } }, // Exclude the _id field
			{ $sample: { size: 1 } }, // Select a random document
		]);
		if (pokemon.length > 0) {
			return res.status(200).json(pokemon[0]);
		}
		res.status(404).json({ msg: 'No pokemon found :(' });
	} catch (error) {
		res.status(500).json(error);
	}
};

// create a new pokemon
const createPokemon = async (req, res) => {
	try {
		console.log('I am here with single');
		// Destructure the necessary fields from the request body
		const { name, type, stats, image_url } = req.body;

		// Create a new Pokemon document with the provided data
		const pokemon = await Pokemon.create({ name, type, stats, image_url });

		// Send the created Pokemon document as a response
		res.status(201).json(pokemon);
	} catch (error) {
		// Handle errors
		res.status(500).json(error);
	}
};

// insert many pokemons
// const createManyPokemons = async (req, res) => {
// 	try {
// 		console.log('I am inserting multiple data ');
// 		const pokemon = await Pokemon.create(req.body);
// 		res.status(201).json(pokemon);
// 	} catch (error) {
// 		res.status(500).json(error);
// 	}
// };

// update a pokemon
const updatePokemon = async (req, res) => {
	try {
		const { name, type, stats, image_url } = req.body;
		const { id } = req.params;

		const pokemon = await Pokemon.findByIdAndUpdate(
			id,
			{
				name,
				type,
				stats,
				image_url,
			},
			{
				new: true,
			}
		);

		if (!pokemon) {
			res.status(404).json({ msg: "I don't know this pokemon :(" });
		} else {
			res.status(200).json({ msg: 'Pokemon updated successfully', pokemon });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

// delete a pokemon
const deleteOnePokemon = async (req, res) => {
	try {
		const { id } = req.params;

		const pokemon = await Pokemon.findByIdAndDelete(id);

		if (!pokemon) {
			res.status(404).json({ msg: "I don't know this pokemon :(" });
		} else {
			res.status(200).json({ msg: 'Pokemon deleted successfully', pokemon });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	getAllPokemon,
	getOnePokemon,
	updatePokemon,
	deleteOnePokemon,
	createPokemon,
	getRandomPokemon,
};
