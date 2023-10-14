const discord = require("discord.js");
const con = require("./config");
const com = require("./commands");
const fs = require("fs");
const sn = "Programageek";
const bot = new discord.Client({ intents: 3276799 });
let sta;
const serv = bot.guilds.cache.get(1124340832850419742);

bot.login(con.token);

bot.on("ready", () => {
  // com.back.log("Codeur_v2 online", fs, "Codeur_v2");
  console.log("Codeur_v2 is online");
  sta = "online";
});

bot.on("guildMemberRemove", (member) => {
  com.back.log(member.user.username + " est parti", fs, "Codeur_v2");
});

bot.on("guildMemberAdd", (member) => {
  com.back.log(member.user.username + "vient juste d'arriver", fs, "Codeur_v2");
  com.back.log(com.back.joined(member), fs, "members");
  // member.send("Bienvenue sur " + sn);

  // contrôle des noms d'utilisateurs
  if (member.user.username === "aioli.dev") {
    member.setNickname("shidan", "Je prèfere ce nom là.");
  } else if (member.user.username === "Codeur v2#2787") {
    member.ban("Tentative d'usurpation d'identité.");
  }

  //kick des bots non autorisés
  if (
    member.user.bot &&
    !(
      member.user.username === "Codeur v2#2787" ||
      member.user.username === "Codeur v1#0684"
    )
  ) {
    member.kick();
  }
});

bot.on("messageCreate", (message) => {
  let b = 0;
  messcon = message.content.toLowerCase();

  if (messcon === "#servercore /m 'restart'") {
    com.front.restart(bot, message);
  } else if (
    message.author.bot &&
    message.author.username === "Codeur v2#2787" &&
    message.content ===
      'Quelle est la méthode permettant de convertir un nombre en chaîne de caractères ? \n  1. float() \n  2. string() \n  3. convert("number", "string")'
  ) {
  }

  if (!message.author.bot && sta === "online") {
    switch (messcon) {
      case "#servercore /m 'destroy'":
        sta = com.front.destroy(bot, message, fs);
        break;

      case "#botpicture":
        message.reply(
          "https://cdn.discordapp.com/app-icons/1147412101854416927/e580c1b2b2ffde21d3e9ae06d0b649ae.png"
        );
        break;

      case "#github":
        message.reply("https://github.com/M6a5x98/Codeur_v2/");
        break;

      case "#serverpicture":
        message.reply(
          "https://cdn.discordapp.com/icons/1124340832850419742/c73b9157ac26d2992184be21719fc212.webp?size=256"
        );
        message.react("👍");
        break;

      case "#quiz start /t 'random'":
        com.front.quiz(message);

      case "#secretcommand /a 'display'":
        message.reply("#servercore /m 'restart'");

      // case ".log":
      //   com.front.logfile(fs, message);

      default:
        break;
    }

    do {
      if (
        messcon.includes(con.words[b]) &&
        message.author.username !== "m6a5x98"
      ) {
        com.back.signal(
          message.author.username,
          new Date().toLocaleString(),
          fs
        );
        break;
      } else if (b === con.words.length) {
        console.log("1");
      } else {
        b++;
      }
    } while (b < con.words.length);
  }
});
