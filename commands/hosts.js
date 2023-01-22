const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hosts')
		.setDescription('Quieres saber sobre el equipo detrás de TCP?'),
	async execute(interaction) {
		return interaction.reply('Nuestro equipo está con formado por: @ragosorio, @__mariomeri.da__, @daniel._.zayed, @isabellachacong, @nicolebelte, @natalia_ndlcn, @jeshua_mo, @jgramirezaragon.  Nuestro equipo esta para servirte en cualquier momento 🤪');
	},
};