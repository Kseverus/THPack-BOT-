const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'beka') {
    	message.reply('w h*j');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTI3NTIyMTUyNjgxODMyNDcw.XSLrUA.UT1dgQeg7GBBOfoVQ6C8iiykZGU);
