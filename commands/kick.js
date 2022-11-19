const { SlashCommandBuilder, guild, PermissionFlagsBits} = require('discord.js')
module.exports ={
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('kicks the user you enter')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('Select the user you wish to kick!'))
        .addStringOption(option2 =>
            option2
                .setName('reason')
                .setDescription('Type the reason for ban')),
    async execute(interaction) {
        let user = interaction.options.getMember('user')
        let reason = interaction.options.getString('reason') || "No reason given"
        try{
            await user.kick();
            return interaction.reply(`User ${user} has been kicked with reason: ${reason}`)
        }catch(e){
            await interaction.reply('Something went wrong!');
        }
    },
};