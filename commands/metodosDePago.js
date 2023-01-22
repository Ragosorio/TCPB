const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('metodos_pago')
		.setDescription('🛍️ Compra online sin salir'),
	async execute(interaction) {
		const youtubeLink = "https://www.youtube.com";
        const instagramLink = "https://www.instagram.com/thechillpartys/"
		return interaction.reply(`¡Haz tus compras en línea sin salir de casa! en ${youtubeLink}. Además, escríbenos a ${instagramLink} y obtén ofertas exclusivas 🔥. ¡Compra fácil y segura con nosotros! 🛍️`);
	},
};