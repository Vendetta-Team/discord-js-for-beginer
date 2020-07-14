const Discord = require("discord.js");
const Client = new Discord.Client();
const Config = require("./Setting/config.json");
const Reload = require("self-reload-json");
const Data = new Reload("./Setting/ata.json");

Client.on("ready", () => {
  console.log(`User Tag | ${Client.user.tag}\nUser Id | ${Client.user.id}\nGuild Size | ${Client.guilds.cache.size}`);
});

Client.on("message", (Message) => {
    if (Message.author.bot) return;
    if (Message.channel.type == "dm") return;
    if (Message.content.indexOf(Config.prefix) !== 0) return;
    const Args = Message.content.slice(Config.prefix.length).trim().split(/ +/g);
    const Command = Args.shift().toLowerCase();
    if (Command == "login") {
        if (Data[Message.author.id]) return Message.reply("You already registered");
        Data[Message.author.id] = {
          xp : 0,
          level : 1,
          money : 0
        }
        Data.save();
    }
    if (Command == "my-money") {
      if (!Data[Message.author.id]) return Message.reply(`Please use ${config.prefix}login\nBefore using it`);
      Message.reply(`Your money is ${Data[Message.author.id]}`)
    }
});

client.login(Config.token);
