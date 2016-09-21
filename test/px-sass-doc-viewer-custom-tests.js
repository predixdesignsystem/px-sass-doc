// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-sass-doc-viewer', function() {
    test('Check install statement', function(done){
      var sassEl = Polymer.dom(document).querySelector('px-sass-doc-viewer'),
          installEl = Polymer.dom(sassEl.root).querySelector('#install');
      assert.equal(installEl.textContent.trim(), 'bower install --save test');
      done();
    });
    test('Check import statement', function(done){
      var sassEl = Polymer.dom(document).querySelector('px-sass-doc-viewer'),
          importEl = Polymer.dom(sassEl.root).querySelector('#import2');
      assert.equal(importEl.textContent.trim(), '@import "test/_objects.test.scss";');
      done();
    });

  });
};
