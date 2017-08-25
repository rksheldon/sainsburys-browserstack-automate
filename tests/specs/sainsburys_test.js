var assert = require('assert');

describe('Sainsburys Site', function() {
  it('can find some chicken', function () {
    
    browser.setViewportSize({
        width: 1280,
        height: 1024
    });

    browser.url('http://www.sainsburys.co.uk/shop/gb/groceries');


    $('input#search').setValue('chicken');
    $('input#searchSubmit').click();

    assert($('h1.resultsHeading').getText().match(/We found 906 products for ‘chicken’/i));
  });
});
