const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, Events} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('precios')
		.setDescription('Quieres saber cuales son nuestros precios? Claro!'),
	async execute(interaction) {
		return interaction.reply('¡La entrada para TCP III - After Party cuesta solo Q180 e incluye todo lo necesario para pasar una noche inolvidable!🎉🍻 ¡Será la mejor fiesta de toda Guatemala!🎊 No olvides de visitar nuestra página web para más detalles y opciones 🌟');
	},
};