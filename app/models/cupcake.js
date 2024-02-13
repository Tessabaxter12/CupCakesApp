const mongoose = require('mongoose')

const cupcakeSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		quanity: {
			type: Number,
			required: true,
		},
        purchase: {
			type: Boolean,
			required: true,
            default: false,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Cupcake', cupcakeSchema)