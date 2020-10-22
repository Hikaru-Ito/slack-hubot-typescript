import hubot from 'hubot'

module.exports = (robot: hubot.Robot): void => {
  robot.hear(/(https?:\/\/[^ \r\n]+)/i, (msg: hubot.Response) => {
    const who = msg.message.user.name;
    const url = msg.match[1];
    const url_decoded = decodeURI(url).replace(/[ <>]/g, (c) => encodeURI(c));
    if(url === url_decoded) return;
    msg.send(`@${who} 日本語でおｋ\n${url_decoded}`);
  })
}
