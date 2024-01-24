
const TelegramBot = require('node-telegram-bot-api');

const express = require('express');
const cors = require('cors')

const token = '6593941783:AAGJChLk-aIPOs0dbAemnGVfUTLrjiTaD44'
const webAppUrl = 'https://rococo-mandazi-7f34ef.netlify.app'

const bot = new TelegramBot(token, {polling: true});
const app = express();

app.use(express.json())
app.use(cors())

bot.on('message', async (msg) => {

  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === '/start') {

    await bot.sendMessage(chatId, 'Доброго времени суток, это тестовый бот-кликер посвященный TON токену "Arbuz"')

    await bot.sendMessage(chatId, 'Заработать арбузы: ', {
      reply_markup: {
        inline_keyboard: [
          [{text: 'Начать игру', web_app: {url: webAppUrl}}]
        ]
      }
    })
  }

});

const PORT = 8000;

app.listen(PORT, () => console.log('server started on PORT' + PORT))