describe("Test Memberships Angular Extension", function () {

  browser.ignoreSynchronization = true;

  describe("Memberships List Menu", function () {

    it ("should exists the extension in the menu", function() {

      browser.driver.get(browser.baseUrl + browser.params.civiUrl);

      var membershipExtensionElement = element(by.xpath('.//*[.="Memberships Angular List"]'));

      expect(browser.isElementPresent(membershipExtensionElement)).toBe(true);

    });
  });


  describe("Memberships Data table", function () {
    
    it ("should exists the table in the extension", function() {

      browser.driver.get(browser.baseUrl + browser.params.extensionUrl);

      membershipTablePresent = browser.wait(function(){
        return element(by.id('membershipTable')).isPresent();
      });

      expect(membershipTablePresent).toBe(true);

    });
  });

});