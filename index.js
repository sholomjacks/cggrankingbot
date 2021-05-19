require('dotenv').config();
const noblox = require("noblox.js")
const Discord = require('discord.js');
const bot = new Discord.Client();
const axios = require('axios')
const R = require("ramda")
const help = require('./help');
const deny = require('./deny')
const demote = require('./demote')
const accept = require('./accept')
const promote = require('./demote')

let commands = ['*help', '*demote', '*promote', '*deny', '*accept']

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});


bot.on('message', msg => {
    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
    console.info(`Called command: ${command}`);

    if (!commands.includes(command)) return;

    try {
        if (command === '*help') {
            help.execute(msg, args)
        } else if (command === '*demote') {
            demote.execute(msg, args)
        } else if (command === '*promote') {
            promote.execute(msg, args)
        } else if (command === '*deny') {
            deny.execute(msg, args)
        } else if (command === '*accept') {
            accept.execute(msg, args)
        }
    } catch (error) {
        console.error(error);
        msg.reply('There was an error trying to execute that command! It has been logged in the console.');
    }
});