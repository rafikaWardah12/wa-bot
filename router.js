const { Router } = require('pepesan');
const BotController = require('./controller');
const router = new Router()

router.keyword('hi', [BotController, "hi"])
router.button('{button}', [BotController, "selectedButton"])
router.button('Menu', [BotController, "menuButtonOne"])
router.button('{button}', [BotController, "gotButtonMenuOne"])