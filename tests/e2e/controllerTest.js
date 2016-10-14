describe("Test Memberships Angular Extension", function () {
  var baseUrl = 'http://d7-master.dev/civicrm/';
  var extensionUrl = baseUrl + 'a/#/membersExtension';

  browser.ignoreSynchronization = true;

  beforeEach(function(){
    browser.driver.get(extensionUrl);
  });
  
  it ("should exist the extension in the menu", function() {
    var membershipExtensionElement = element(by.xpath('.//*[.="Memberships Angular List"]'));
    expect(browser.isElementPresent(membershipExtensionElement)).toBe(true);

  });

  it ("should exist the table in the extension", function() {
    membershipTablePresent = browser.wait(function(){
      return element(by.id('membershipTable')).isPresent();
    });

    expect(membershipTablePresent).toBe(true);

  });

});