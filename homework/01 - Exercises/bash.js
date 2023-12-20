const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", function (data) {
    const input = data.toString().trim();
    const [cmd, ...args] = input.split(" ");

    if (!commands.hasOwnProperty(cmd)) {
      print(`command not found: ${cmd}`);
    } else {
      commands[cmd](print, args.join(" "));
    }
    process.stdout.write("prompt > ");
  });
}

function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

bash();
module.exports = {
  print,
  bash,
};