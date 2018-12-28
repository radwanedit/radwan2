const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🎆welcome🎆');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | اهلا بك في سيرفرنا شرفتنا يا حبي', `Welcome tاهلا بك في سيرفرنا شرفتنا${member}`)
        .addField('User ID :', `"[" + ${member.id} + "]"` )
                .addField(':arrow_down:',`** انت العضو رقم ${member.guild.memberCount}**`)

                  .addField("Name:",`**<@${member.id}>**`, true)

                                     .addField(' RMY bot', `${member.guild.name}`,true)

     .setFooter('PC ARMY bot')
        .setTimestamp()

      channel.sendEmbed(embed);
});

 client.on('guildMemberRemove', member => {
    var embed = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setThumbnail(member.user.avatarURL)
.setTitle('***لماذا خرجت من السيرفر يا صديقي فضلا و ليس امرا ارجع***')
.addField('**الاسم**',`[ ${member} ]`)
.addField('**عدد الاعضاء**',`[ ${member.guild.memberCount} ]`,true)
.setColor('Random')
   
   var channel =member.guild.channels.find('name', '🎆welcome🎆')
   if (!channel) return;
         channel.send({embed : embed});
 
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('اهلا بيك شرفت!');
  }
});
client.login(process.env.BOT_TOKEN);
