const { SlashCommandBuilder, guild, PermissionFlagsBits} = require('discord.js')
module.exports ={
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans the user you enter')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('Select the user you wish to ban!'))
        .addStringOption(option2 =>
            option2
                .setName('reason')
                .setDescription('Type the reason for ban'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    async execute(interaction) {
        let user = interaction.options.getUser('user')
        let reason = interaction.options.getString('reason') || "No reason given"
        try{
            await interaction.guild.bans.create(user, {
                reason
            })
            return interaction.reply(`User ${user} has been banned with reason: ${reason}`)
        }catch(e){
            await interaction.reply('Something went wrong!');
        }
    },
};