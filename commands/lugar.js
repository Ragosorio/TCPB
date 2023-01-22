const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lugar')
		.setDescription('¡Explora el misterio detrás del lugar oculto!'),
	async execute(interaction) {
		return interaction.reply('¡Prepárate para descubrir un secreto guardado durante siglos! 🤫🗝️');
	},
};