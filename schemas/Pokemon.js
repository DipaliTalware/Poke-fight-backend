const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 100,
	},
	type: {
		type: [String],
		required: true,
		minlength: 1,
		maxlength: 100,
	},
	stats: {
		health_points: {
			type: Number,
			required: true,
		},
		attack: {
			type: Number,
			required: true,
		},
		defense: {
			type: Number,
			required: true,
		},
		special_attack: {
			type: Number,
			required: true,
		},
		special_defense: {
			type: Number,
			required: true,
		},
		speed: {
			type: Number,
			required: true,
		},
	},
	image_url: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Pokemon', PokemonSchema);
