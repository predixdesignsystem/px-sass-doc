var SassDocModel = (function() {
  /**
  * Declare internal properties we'll use later with `this`
  */
  var template,
      demo,
      styleOptions;

  /**
  * Binds the dom-is template wrapping everything so we can interact with it
  *
  * @method bindTemplate
  * @param {string} docQuery - The attribute or identifier to pass to `document.querySelector` to find the element
  * @returns {Object} SassDocTemplate - The object we're binding to.
  */
  var bindTemplate = function(docQuery) {
    this.template = document.querySelector(docQuery);

    // Listen for changes in the demo and pass them into the template
    document.addEventListener('px-sass-doc-demo-selected-options-changed', function(evt) {
      this.template[evt.detail.insert] = evt.detail.string;
    }.bind(this));

    return this;
  };

  /**
  * Binds the demo so we can add values to it
  *
  * @method bindDemo
  * @param {string} docQuery - The attribute or identifier to pass to `document.querySelector` to find the element
  * @returns {Object} SassDocTemplate - The object we're binding to.
  */
  var bindDemo = function(docQuery) {
    this.demo = document.querySelector(docQuery);
    return this;
  };

  /**
  * Sets the additional metadata for the template
  *
  * @method setMetadata
  * @param {string} key - The name of the metadata variable.
  * @param {string} val - The value to set.
  * @returns {Object} SassDocTemplate - The object we're binding to.
  */
  var setMetadata = function(key,val) {
    // this.template.styleOptions = this.styleOptions = opts;
    this.template[key] = val;
    return this;
  };

  /**
  * Return public methods
  */
  return {
    // Properties
    template: template,
    demo: demo,
    styleOptions: styleOptions,
    // Methods
    bindTemplate: bindTemplate,
    bindDemo: bindDemo,
    setMetadata: setMetadata
  };
})();
