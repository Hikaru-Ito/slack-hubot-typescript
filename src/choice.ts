import hubot from 'hubot'

module.exports = (robot: hubot.Robot): void => {
  robot.hear(/choice (.+)/i, (msg: hubot.Response) => {
    const items = msg.match[1].split(/\s+/);
    const choice = items[Math.floor(Math.random() * items.length)];
    if(Math.random() < 0.2) {
      msg.send(`厳正な抽選の結果、「山田」に決まりました`);
      setTimeout(() => {
        msg.send(`冗談です。厳正な抽選の結果、「${choice}」に決まりました`);
      }, 4000);
    } else {
      msg.send(`厳正な抽選の結果、「${choice}」に決まりました`);
    }
  })
}
