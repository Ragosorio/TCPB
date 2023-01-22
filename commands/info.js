const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('¡Obtén más información y sigue adelante con confianza!'),
	async execute(interaction) {
		return interaction.reply(`¡No te preocupes! 😎 Entendemos que estás emocionado y te haces preguntas como ¿Qué sigue? ¿Cómo pago? ¿Es seguro? ¡Tranquilo! 😌 Somos una empresa altamente segura y confiable 🔒🛡️ para realizar tus pagos solo escribe "/metodosPago" en el canal, el resto depende de ti y de cuánto te animas 🤪`);
	},
};