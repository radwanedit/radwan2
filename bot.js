const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا بك شرفت بتمني انك تتفاعل!');
  }
});

client.login(process.env.BOT_TOKEN);
