const Telegraf = require('../')
const { Markup } = require('../')
set BOT_TOKEN ='361612779:AAGe1bMbHz2-Pfd_tmt95oNsx82EFPO9QfQ';
const replyOptions = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org')
]).extra()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, replyOptions))
bot.startPolling()
