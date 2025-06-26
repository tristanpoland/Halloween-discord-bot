const responses2 = [
  'https://i.ibb.co/TPmVsGr/Screen-Shot-2020-10-27-at-1-14-07-PM.png',
  'https://i.ibb.co/Qr7x8tz/Screen-Shot-2020-10-27-at-1-14-20-PM.png',
  'https://i.ibb.co/YWctc2H/Screen-Shot-2020-10-27-at-1-14-27-PM.png',
  '`https://i.ibb.co/LNZvnBL/Screen-Shot-2020-10-27-at-1-04-32-PM.png'
];

commands.raw('hack-halloween', async (message) => {
  await message.reply('👻👻Hackey Halloween👻👻');
  await message.reply(responses2[Math.floor(Math.random() * responses.length)]);
});


//the costume setting code:


//haloween

commands.raw('costumeset:ghost', async (message) => {
  await message.member.edit({ nick: `👻 ${message.member.nick} 👻` });
  await message.reply('Set your costume to 👻');
  await message.reply(`your username :👻 ${message.member.nick} 👻`);
});

commands.raw('costumeset:pumpkin', async (message) => {
  await message.member.edit({ nick: `🎃 ${message.member.nick} 🎃` });
  await message.reply('Set your costume to 🎃');
  await message.reply(`your username :🎃 ${message.member.nick} 🎃`);
});

commands.raw('costumeset:alian', async (message) => {
  await message.member.edit({ nick: `👽 ${message.member.nick} 👽` });
  await message.reply('Set your costume to 👽');
  await message.reply(`your username :👽 ${message.member.nick} 👽`);
});

commands.raw('costumeset:lion', async (message) => {
  await message.member.edit({ nick: `🦁 ${message.member.nick} 🦁` });
  await message.reply('Set your costume to 🦁');
  await message.reply(`your username :🦁 ${message.member.nick} 🦁`);
});

commands.raw('costumeset:tiger', async (message) => {
  await message.member.edit({ nick: `🐯 ${message.member.nick} 🐯` });
  await message.reply('Set your costume to 🐯');
  await message.reply(`your username :🐯 ${message.member.nick} 🐯`);
});

commands.raw('costumeset:bear', async (message) => {
  await message.member.edit({ nick: `🐻 ${message.member.nick} 🐻` });
  await message.reply('Set your costume to 🐻');
  await message.reply(`your username :🐻 ${message.member.nick} 🐻`);
});

commands.raw('costumeset:bat', async (message) => {
  await message.member.edit({ nick: `🦇 ${message.member.nick} 🦇` });
  await message.reply('Set your costume to 🦇');
  await message.reply(`your username :🦇 ${message.member.nick} 🦇`);
});

commands.raw('costumeset:candy', async (message) => {
  await message.member.edit({ nick: `🍬 ${message.member.nick} 🍬` });
  await message.reply('Set your costume to 🍬');
  await message.reply(`your username :🍬 ${message.member.nick} 🍬`);
});

commands.raw('costumeset:moon', async (message) => {
  await message.member.edit({ nick: `🌙 ${message.member.nick} 🌙` });
  await message.reply('Set your costume to 🌙');
  await message.reply(`your username :🌙 ${message.member.nick} 🌙`);
});

const responses = [
  'Congrats, you get a treat 🍬',
  'Congrats, you get a treat 🍬',
  'It"s a trick! No treats for you! 🎃',
  'Sorry, no treats for you! 🎃'
];

commands.raw('trickortreat', (message) =>
  message.reply(responses[Math.floor(Math.random() * responses.length)])
);
