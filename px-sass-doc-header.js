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
Element providing the introductory header information for Sass modules. Is used inside px-sass-doc container element.

##### Usage

      <px-sass-doc-header
        module-name="px-toggle-design"
        module-description="Module providing design for toggles."
      </px-sass-doc-header>

@element px-sass-doc-header
@blurb Element providing the introductory header information for px-sass-doc elements.
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import 'px-icon-set/px-icon-set-navigation.js';
import 'px-icon-set/px-icon.js';
import './css/px-sass-doc-viewer-styles.js';
import './css/px-demo-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class PxSassDocHeader extends PolymerElement {
  static get template() {
    return html`
    <style include="px-sass-doc-viewer-styles"></style>
    <style include="px-demo-styles"></style>

    <section class="demo-background--base">
      <div class="demo-layout--center demo-u-pb+++ u-pt++ text--shadow">
        <a class="actionable flex flex--right flex--middle" href="https://github.com/PredixDev/[[moduleName]]" target="_new">
          <px-icon class="menu__open u-mr--" icon="px-nav:new-window"></px-icon>View on Github
        </a>
        <h1 class="delta">[[moduleName]]</h1>
        <p class="demo-text-width--max">
          [[moduleDescription]]
        </p>
        <div class="flex">
          <img class="u-mr--" src\$="https://img.shields.io/github/tag/predixdev/[[moduleName]].svg?style=flat-square&amp;label=bower" alt="Bower" onerror="this.style.display='none'">
          <img class="u-mr--" src\$="https://img.shields.io/github/issues-raw/PredixDev/[[moduleName]].svg?style=flat-square" alt="Issues" onerror="this.style.display='none'">
        </div>
      </div>
    </section>
`;
  }

  static get is() { return 'px-sass-doc-header'; }

  static get properties() {
    return {
      /** Name of the Sass module. */
      moduleName: String,

      /** Description of the Sass module. */
      moduleDescription: String
    };
  }
}

customElements.define('px-sass-doc-header', PxSassDocHeader);
