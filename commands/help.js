const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Comandos que se pueden ejecutar en TCP BOT'),
	async execute(interaction) {
		return interaction.reply(`"/precios", "/fecha", "/lugar", "/hosts", "/info", "/ping", "/server", "/user"`);
	},
};