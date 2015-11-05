describe('Protractor Demo App', function() {
    var firstName = element(by.model('firstName'));
    var lastName = element(by.model('lastName'));
    var goButton = element(by.id('button'));

    beforeEach(function() {
        browser.get('http://localhost/SimpleProjectAngularjsProtractor/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Formulário');
    });
});