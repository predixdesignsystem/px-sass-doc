/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
Element providing documentation for a requested Predix UI CSS module.

Pass additional content into its light DOM to pass down to its children.

##### Usage

      <px-sass-doc
        module-name="px-buttons-design"
        description="Element providing styles for buttons."
        layer="objects"
        dependencies='[
          "https://github.com/PredixDev/px-colors-design",
          "https://github.com/PredixDev/px-defaults-design",
          "https://github.com/PredixDev/px-helpers-design"
        ]'
        selected-options="{{selectedOptions}}">
      </px-sass-doc>

@element px-sass-doc
@blurb Element providing documentation for a requested Predix UI CSS module.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import '@polymer/polymer/lib/elements/dom-if.js';
import 'px-clipboard/px-clipboard.js';
import 'px-dropdown/px-dropdown.js';
import 'px-icon-set/px-icon-set.js';
import './px-sass-doc-header.js';
import './px-sass-doc-demo.js';
import './px-sass-doc-viewer.js';
import './px-sass-doc-footer.js';
import './css/px-demo-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class PxSassDoc extends PolymerElement {
  static get template() {
    return html`
  <style include="px-demo-styles"></style>

  <!-- Header -->
  <px-sass-doc-header module-name="[[moduleName]]" module-description="[[description]]">
  </px-sass-doc-header>

  <template is="dom-if" if="[[!hideDemoContainer]]">
    <!-- Demo -->
    <px-sass-doc-demo selected-options="{{selectedOptions}}" selected-tab="{{selectedTab}}" tabs="[[tabs]]">
      <!-- Previously: <content select="px-sass-doc-option" ...> -->
      <slot name="options" slot="options"></slot>
      <!-- Previously: <content select="[data-slot=demoHTML]" ...> -->
      <slot name="demo-html" slot="demo-html"></slot>
      <!-- Previously: <content select="[data-slot=import]" ...> -->
      <slot name="import" slot="import"></slot>
    </px-sass-doc-demo>
  </template>
  <template is="dom-if" if="[[hideDemoContainer]]">
    <hr class="demo-hr u-m0">
  </template>

  <!-- Viewer -->
  <px-sass-doc-viewer library-name="[[moduleName]]" base-name="[[baseName]]" layer="[[layer]]" inuit-flags="[[inuitFlags]]" dependencies="[[dependencies]]" hide-import-sass="[[hideImportSass]]" sassdoc-path="[[sassdocPath]]">
    <slot name="intro-raw" slot="intro-raw"></slot>
    <!-- Previously: <content select="[data-slot=intro]" ...> -->
    <slot name="intro" slot="intro"></slot>
    <!-- Previously: <content select="[data-slot=usage]" ...> -->
    <slot name="usage" slot="usage"></slot>
  </px-sass-doc-viewer>

  <!-- Footer -->
  <px-sass-doc-footer></px-sass-doc-footer>
`;
  }

  static get is() { return 'px-sass-doc'; }

  static get properties() {
    return {
      /**
       * Name of the Sass module.
       */
      moduleName: {
        type: String
      },

      /**
       * Description of the Sass module.
       */
      description: {
        type: String
      },

      /**
       * Sass layer that this component belongs in, e.g. generic, objects,
       * trumps, etc.
       */
      layer: {
        type: String
      },

      /**
       * List of modules this module depends on (as Github repository URLs).
       */
      dependencies: {
        type: Array,
        value: () => []
      },

      /**
       * Path to a generated Sassdoc JSON file.
       */
      sassdocPath: {
        type: String
      },

      /**
       * Inuit flags that are used to enable features and functionality,
       * represented as an array of strings, which will display with line
       * breaks between each.
       */
      inuitFlags: {
        type: Array,
        value: () => []
      },

      /**
       * Base name of the component in the file path, e.g. _objects.BASENAME.scss.
       * Computed from the moduleName.
       */
      baseName: {
        type: String,
        computed: '_computeBaseName(moduleName)'
      },

      /**
       * A list of tabs that will change our demo container.
       */
      tabs: {
        type: Array,
        value: () => []
      },

      /**
       * Set to `true` to hide the demo container (i.e. if you just have
       * simple API docs.)
       */
      hideDemoContainer: {
        type: Boolean,
        value: false
      },

      /**
       * Set to `true` to hide the instructions to "Import in your Sass".
       */
      hideImportSass: {
        type: Boolean,
        value: false
      },

      /**
       * The currently selected options, passed up from px-sass-doc-demo.
       */
      selectedOptions: {
        type: Object,
        notify: true,
        value: () => []
      },

      /**
       * The currently selected tab, passed up from px-sass-doc-demo.
       */
      selectedTab: {
        type: String,
        notify: true,
        value: ''
      }
    };
  }

  _computeBaseName(moduleName) {
    if (!moduleName) return;
    return moduleName.replace('px-','').replace('-design','');

  }
}

customElements.define('px-sass-doc', PxSassDoc);
