exports.config = {

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['e2e/controllerTest.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
  },

  //base URL for drupal
  baseUrl: 'http://d7-master.dev/',

  params: {
    login: {
      user: 'admin', //drupal username
      password: 'admin' //drupal password
    },
    civiUrl: 'civicrm/',
    extensionUrl: 'civicrm/a/#/membersExtension'
  },


  onPrepare: function() {

    browser.driver.get(browser.baseUrl);
    browser.driver.findElement(by.id('edit-name')).sendKeys(browser.params.login.user);
    browser.driver.findElement(by.id('edit-pass')).sendKeys(browser.params.login.password);
    browser.driver.findElement(by.id('edit-submit')).click();
  }
};