const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fecha')
		.setDescription('¡Prepárate para la fecha del evento más esperado!'),
	async execute(interaction) {
		return interaction.reply('¡El 5 de Mayo del 2023 (06/05/23) será el día en el que todo sucederá! 🗓️🎉');
	},
};