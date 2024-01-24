
const TelegramBot = require('node-telegram-bot-api');

const token = '6593941783:AAGJChLk-aIPOs0dbAemnGVfUTLrjiTaD44'
const webAppUrl = 'https://rococo-mandazi-7f34ef.netlify.app'

const bot = new TelegramBot(token, {polling: true});

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