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

bot.login(process.env.NDc4OTg5MDk1OTYwNDQ0OTI4.DlTwSA.xjhq3ZHvf96gYqj86wfy1rxRanQ);
