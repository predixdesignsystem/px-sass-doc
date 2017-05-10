// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-sass-doc-viewer', function() {
    suiteSetup(function(done) {
      setTimeout(function(){ done() }, 100);
    });

    test('Check install statement', function(done) {
      var sassDocEl = document.getElementById('fixture1');
      var viewerEl  = Polymer.dom(sassDocEl.root).querySelector('px-sass-doc-viewer');
      var installEl = Polymer.dom(viewerEl.root).querySelector('#install');

      assert.equal(installEl.textContent.trim(), 'bower install px-test-design --save-dev');
      done();
    });

    test('Check import statement', function(done) {
      var sassDocEl = document.getElementById('fixture1');
      var viewerEl  = Polymer.dom(sassDocEl.root).querySelector('px-sass-doc-viewer');
      var importEl = Polymer.dom(viewerEl.root).querySelector('#import2');

      assert.equal(importEl.textContent.trim(), '@import "px-test-design/_objects.test.scss";');
      done();
    });
  });
};
