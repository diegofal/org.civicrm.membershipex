describe("Test Memberships Angular Extension", function () {

  browser.ignoreSynchronization = true;

  describe("Memberships List Menu", function () {
    it ("should exists the extension in the menu", function() {

      browser.driver.get('http://d7-master.dev/civicrm');
      var membershipExtensionElement = element(by.xpath('.//*[.="Memberships Angular List"]'));
      expect(browser.isElementPresent(membershipExtensionElement)).toBe(true);

    });
  });


  describe("Memberships Data table", function () {
    it ("should exists the table in the extension", function() {

      browser.driver.get('http://d7-master.dev/civicrm/a/#/membersExtension');
      var membershipTable = element(by.xpath('//table[@membershiptable]'));
      

      console.log(membershipTable.getTagName());
      expect(browser.isElementPresent(membershipTable)).toBe(true);

    });
  });

});