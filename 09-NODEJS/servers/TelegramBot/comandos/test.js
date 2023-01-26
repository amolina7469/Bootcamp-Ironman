module.exports = async (ctx) => {
  await ctx.reply('Hola amigo');
  await ctx.replyWithDice();
}