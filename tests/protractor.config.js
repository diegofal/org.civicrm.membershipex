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
  //eg: baseUrl: 'http://localhost/drupalTask/',

  baseUrl: 'http://d7-master.dev/',
  params: {
    login: {
      user: '', //drupal username
      password: '' //drupal password
    }
  },

  //login for site ::https://github.com/angular/protractor/blob/master/spec/withLoginConf.js
  onPrepare: function() {
   //console.log(this.params);
    //var ptor = protractor.getInstance();
    browser.driver.get('http://d7-master.dev/');
    browser.driver.findElement(by.id('edit-name')).sendKeys('admin');
    browser.driver.findElement(by.id('edit-pass')).sendKeys('admin');
    browser.driver.findElement(by.id('edit-submit')).click();
  }
};