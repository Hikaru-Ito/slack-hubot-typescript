import hubot from 'hubot'

module.exports = (robot: hubot.Robot): void => {
  robot.respond(/PING$/i, (msg: hubot.Response) => {
    msg.reply('PONG');
  });
}
