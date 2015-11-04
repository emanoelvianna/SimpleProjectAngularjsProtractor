describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get('http://localhost/SimpleProjectAngularjsProtractor/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Formulário');
    });
});