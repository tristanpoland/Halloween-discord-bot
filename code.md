```const responses2 = [
  'https://i.ibb.co/TPmVsGr/Screen-Shot-2020-10-27-at-1-14-07-PM.png',
  'https://i.ibb.co/Qr7x8tz/Screen-Shot-2020-10-27-at-1-14-20-PM.png',
  'https://i.ibb.co/YWctc2H/Screen-Shot-2020-10-27-at-1-14-27-PM.png',
  '`https://i.ibb.co/LNZvnBL/Screen-Shot-2020-10-27-at-1-04-32-PM.png'
];

commands.raw('hack-halloween', async (message) => {
  await message.reply('👻👻Hackey Halloween👻👻');
  await message.reply(responses2[Math.floor(Math.random() * responses.length)]);
});```
