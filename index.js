const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    bot.user.setGame('Warframe').catch(console.error)
})



bot.on('message', function (message) {
   if (message.content === '/marmotte') {
     message.channel.send('Master marmotte mertigo')  
   } 
}) 

bot.login(process.env.TOKEN);
