const Discord = require('discord.js'); //get discord.js module
const client = new Discord.Client(); //get Client on discord.js
const config = {
    token: "your-token", //write your bot's token
    prefix: "!" //write your bot prefix
}
client.on('ready', () => {
    console.clear()
    var selfbot;
    if (client.user.bot == true) {
        selfbot = "X"
    } else {
        selfbot = "O"
    }
    console.log(`Bot is online`)
    console.log(`Bot tag : ${client.user.tag}`)
    console.log(`Bot duid : ${client.user.id}`)
    client.user.setActivity('Playing')
    console.log(`Bot Server count : ${client.guilds.cache.size}`)
    console.log(`Bot status : ${client.user.presence.status}`)
    console.log(`Bot avatar Link : ${client.user.displayAvatarURL()}`)
    console.log(`selfbot? : ${selfbot}`)
    console.log(`Bot invite link : https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
})

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') {
        return;
        //if you want your bot is work on dm too
        //delete return;
    }
    if (message.content == 'hello') { //if bot get message hello
        message.channel.send(`Hello ${message.author}`) //print it
    }
    if (message.content.indexOf(config.prefix) !== 0) return; //if message isn't start with prefix return 
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); //split all of author message like ['!say','hello']
    const command = args.shift().toLowerCase(); //get first args and make it Lower like Hi => hi
    if (command == 'hi') { //if you say !hi
        message.channel.send(`hello ${message.author}`) //print it
    }
})

client.login(config.token) //login to Discord
