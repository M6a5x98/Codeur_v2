module.exports = {
  back: {
    log: function log(tolog, fs, file) {
      fs.appendFile(file + ".log", tolog + "\n", (err) => {
        if (err) {
          console.error(err);
        }
      });
    },
    joined: function memberjoin(member) {
      return (
        member.joinedAt.getDay +
        "/" +
        member.joinedAt.getMonth +
        "/" +
        member.joinedAt.getYear
      );
    },
    signal: function signal(username, date, lfs) {
      lfs.appendFile(
        "signalement.log",
        username + "\n" + date + "\n\n",
        (err) => {
          if (err) {
            console.error(err);
          }
        }
      );
      console.log(username + " signalé");
    },
    // date: function date(type) {
    //   let all = {
    //     date: new Date(),
    //     a: date.getFullYear(),
    //     m: date.getMonth(),
    //     j: date.getDay(),
    //     h: date.getHours(),
    //     min: date.getMinutes(),
    //     s: date.getSeconds(),
    //   };
    //   if (type === "HMS") {
    //     return all.h + ":" + all.min + ":" + all.s;
    //   } else if (type === "YMD") {
    //     return all.j + "/" + all.m + "/" + all.a;
    //   } else if (type === "ALL") {
    //     return (
    //       all.j +
    //       "/" +
    //       all.m +
    //       "/" +
    //       all.a +
    //       " à " +
    //       all.h +
    //       ":" +
    //       all.min +
    //       ":" +
    //       all.s
    //     );
    //   }
    // },
  },
  front: {
    destroy: function destroy(bot, message) {
      message.react("💥");
      bot.user.setStatus("invisible");
      return "outline";
    },
    restart: function restart(bot, message) {
      message.react("♻");
      bot.user.setStatus("online");
    },
    quiz: function quiz(message) {
      r = Math.random() * 3;
      switch (r) {
        case 1:
          message.reply(
            'Quelle est la méthode permettant de convertir un nombre en chaîne de caractères ? \n  1. float() \n  2. string() \n  3. convert("number", "string")'
          );
          message.delete();
          break;

        default:
          break;
      }
    },
    // logfile: function logfile(fs, message) {
    //   h = fs.readFileSync("Codeur_v2.log");
    //   console.log(h);
    //   message.reply();
    // },
  },
};
