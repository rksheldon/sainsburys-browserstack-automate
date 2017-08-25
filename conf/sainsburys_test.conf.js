exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './tests/specs/sainsburys_test.js'
  ],
  exclude: [],

  capabilities: [{
    resolution: '1280x1024',
    os: 'windows',
    os_version: 10,
    browser: 'internet explorer',
    build: 'webdriver-browserstack',
    name: 'chicken test',
    'browserstack.debug': false,
    'browserstack.networkLogs': false,
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 20000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,



  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 30000
  }
}
