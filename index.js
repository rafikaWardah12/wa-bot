require('dotenv').config();
const Pepesan = require('pepesan');
const router = require('./router');

const { ALLOWED_NUMBERS } = process.env;

(async() => {
  const config = {
    browserName: 'Balaraja Project',
    allowedNumbers: ALLOWED_NUMBERS ? ALLOWED_NUMBERS.split(',') : null,
    sessionPath: './session',
    clientIds: ['user1'],
    stateType: 'file',
    statePath: './state',
  }

  const pepesan = Pepesan.init(router, config)
  await pepesan.connect()
})()