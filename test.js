/**
* Constructor that creates a new Insert object with special behaviors. We use it
* to build an "insertable" string that is passed up to the parent to use in
* building demo snippets.
*
* # Building Inserts
* Insert methods are chainable. The best way to use the methods is to make changes
* immediately after you create the Insert. Example:
*
*     var Insert = new PxSassInsert("insertName",el).prependBase("prepend-string").joinedBy("\n")
*
* The following methods can be chained:
* - prependBase
* - appendBase
* - joinedBy
*
* The following methods cannot be chained:
* - render
* - _renderWithBase
* - _renderWhenCases
*
* @constructor PxSassInsert
* @param {string} name - The name of the insert (will be fired with events).
* @param {Object} polymerEl - A reference to the Polymer element that owns this Insert.
* @return {Object} this - Returns `this`, a reference to the Insert, to allow chaining methods.
*/
var PxSassInsert = function(name, polymerEl) {
  this.name = name;
  this.polymerEl = polymerEl;

  // Register additional necessary things
  this.whenCases = [];
  this.joiner = "";

  // Register constants
  this.POSITION_PREPEND = "prepend"
  this.POSITION_APPEND = "append"

  return this;
};

  /**
  * Adds a base to prepend to the rendered Insert. There should only be one base
  * (i.e. a prepend or append.)
  *
  * @method prependBase
  * @param {string} base - The base string we will prepend to the rendered Insert
  * @return {Object} this - Returns `this`, a reference to the Insert, to allow chaining methods.
  */
  PxSassInsert.prototype.prependBase = function(base) {
    this.base = { str: base, position: this.POSITION_PREPEND };
    return this;
  };

  /**
  * Adds a base to append to the rendered Insert. There should only be one base
  * (i.e. a prepend or append.)
  *
  * @method appendBase
  * @param {string} base - The base string we will append to the rendered Insert
  * @return {Object} this - Returns `this`, a reference to the Insert, to allow chaining methods.
  */
  PxSassInsert.prototype.appendBase = function(base) {
    this.base = { str: base, position: this.APPEND_PREPEND };
    return this;
  };

  /**
  * Adds a base to append to the rendered Insert. There should only be one base
  * (i.e. a prepend or append.)
  *
  * @method joinedBy
  * @param {string} joiner - The character(s) that we will join our whenCase strings with (i.e. space " " or newline "\n")
  * @return {Object} this - Returns `this`, a reference to the Insert, to allow chaining methods.
  */
  PxSassInsert.prototype.joinedBy = function(joiner) {
    this.joiner = joiner;
    return this;
  };

  /**
  * Renders the Insert based on the chosenOptions and returns a string to put in
  * the DOM. Expects an array of ["Type","Choice"] options to compare with the
  * Insert's `whenCase`s. For example, `chosenOptionsArr` might be:
  *
  *     [ ["Size","small"], ["Type","primary"] ]
  *
  * @method render
  * @param {Array} chosenOptionsArr - An array of arrays with the chosen options.
  * @return {string} renderedString - Returns a rendered string to put in the DOM.
  */
  PxSassInsert.prototype.render = function(chosenOptionsArr) {
    // Map over chosen options and build string
    var combinedStr = chosenOptionsArr.map(function(chosenOption){
      var type = chosenOption[0] || "", // Size
          choice = chosenOption[1] || ""; // small

      // Render whenCases based on the selectedChoice
      var whenCaseStr = this._renderWhenCases(type,choice);

      // Return the string, trimming leading/trailing whitespace
      return whenCaseStr.trim();
    }).join("joiner");

    // Return the final string to render with base
    return this._renderWithBase(combinedStr);
  };

  PxSassInsert.prototype._renderWithBase = function(str) {
    // Prepend or append base, depending on what the user wanted
    if (this.base) {
      if (this.base.position === this.POSITION_PREPEND) {
        str = this.base.str + this.joiner + str;
      }
      if (this.base.position === this.POSITION_APPEND) {
        str = str + this.joiner + this.base.str;
      }
    }
    return str || "";
  };

  PxSassInsert.prototype._renderWhenCases = function(type,choice) {
    // Loop through attached cases and return a string ready to render
    if (this.whenCases.length > 0) {
      // Prep the array we want to render from cases
      return this.whenCases
                .filter(function(kase){
                  return kase.choice === selectedChoice && kase.option === type;
                })
                .map(function(kase){
                  return kase.str;
                })
                .join(this.joiner);
    }
    // If there's nothing, return an empty string
    return "";
  };

  PxSassInsert.prototype.attachWhenCase = function(whenCaseObj) {
    // Add the case if we don't already have it
    if (!this.whenCases.indexOf(whenCaseObj) > -1) {
      this.whenCases.push(whenCaseObj);
    }
  };

var PxSassWhenCase = function(optionObj, polymerEl) {
  this.option = optionObj;
  this.polymerEl = polymerEl;
  return this;
}

PxSassWhenCase.prototype.is = function(choice) {
  this.choice = choice;
  return this;
};

PxSassWhenCase.prototype.include = function(str) {
  this.str = str;
  return this;
};

PxSassWhenCase.prototype.in = function(insertName) {
  this.insert = this.polymerEl._inserts[insertName];
  this.insert.attachWhenCase(this);
  return this;
};

var App = {
  _inserts: {},
  _cases: [],
  options: [
    {
      name: "Size",
      type: "dropdown",
      choices: [
        "small",
        { name: "regular (default)", isDefault: true },
        "large",
        "huge"
      ]
    },
    {
      name: "Type",
      type: "dropdown",
      choices: [
        "primary",
        { name: "secondary", isDefault: true },
        "tertiary"
      ]
    },
    {
      name: "Disabled",
      type: "boolean",
      defaultChoice: true
    }
  ],
  foo: function() {
    return "bar";
  },
  createInsert: function(name) {
    this._inserts[name] = new PxSassInsert(name, this);
    // this._inserts["classInsert"] = new PxSassInsert(classInsert, <px-sass-doc-viewer></px-sass-doc-viwer>);
    //
    return this._inserts[name];
  },
  whenOption: function(optionName) {
    var whenCase = new PxSassWhenCase(this.options[optionName], this);
    this._cases.push(whenCase);
    return whenCase;
  }
};
