const express = require('express');
const { Telegraf } = require('telegraf');
const { Wit, log } = require('node-wit')
const fs = require('fs');

const { create } = require('./models/user.models');

// Configuramos el .env
require('dotenv').config();

//Config BD
require('./config/db');

const app = express();

const bot = new Telegraf(process.env.BOT_TOKEN);

app.use(bot.webhookCallback('/url_telegram'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/url_telegram`);

app.get('/message', (req, res) => {
  bot.telegram.sendMessage(19987445, 'Mensaje desde la ruta http://localhost:3000/message de Express');
  res.send('Termina');
})

app.post('/url_telegram', (req, res) => {
  res.send('Funciona');
});

bot.use(async (ctx, next) => {
  ctx.from.telegram_id = ctx.from.id;
  try {
    await create(ctx.from);
  } catch (error) {
    console.log('Usuario ya insertado');
  } finally {
    next();
  }
});

//COMANDOS
bot.command('test', require('./comandos/test'));
bot.command('tiempo', require('./comandos/tiempo'));
bot.command('donde', require('./comandos/donde'));
bot.command('adios', async (ctx) => {
  await ctx.reply('Sayonara baby')
});

bot.on('text', async (ctx) => {

  const client = new Wit({
    accessToken: process.env.WIT_TOKEN,
    logger: new log.Logger(log.DEBUG), // optional
  });
  const result = await client.message(ctx.message.text);

  if (result.intents.length === 0) {
    return ctx.reply('No te entiendo');
  }
  const name = result.intents[0].name;
  const content = fs.readFileSync(`./frases/${name}.txt`, 'utf-8');
  const frases = content.split('\n');
  ctx.reply(frases[Math.floor(Math.random() * frases.length)]);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});