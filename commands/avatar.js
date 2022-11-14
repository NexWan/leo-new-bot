const { SlashCommandBuilder } = require('discord.js')
const { EmbedBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout;


module.exports ={
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Replies with the url of the user avatar')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('Select the user u wanna steal the pfp from')
        ),
    async execute(interaction) {
        let user = interaction.options.getUser('target') ?? interaction.user;
        let avatar = user.displayAvatarURL()
        const exampleEmbed = new EmbedBuilder()
            .setColor("Random")
            .setTitle(user.username + ' avatar')
            .setAuthor({name: user.username, iconURL: avatar})
            .setImage(avatar)
            .setTimestamp()
            .setFooter({ text: 'yea ight', iconURL: avatar})
        await interaction.reply({embeds: [exampleEmbed] })
    },
};