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
Element providing the boilerplate footer information for Sass modules. Is used inside px-sass-doc container element.

##### Usage

      <px-sass-doc-footer>
      </px-sass-doc-footer>
      Element providing the boilerplate footer information for Sass modules.

@element px-sass-doc-footer
@blurb Element providing the boilerplate footer information for Sass modules.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import './css/px-sass-doc-viewer-styles.js';
import './css/px-demo-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class PxSassDocFooter extends PolymerElement {
  static get template() {
    return html`
    <style include="px-sass-doc-viewer-styles"></style>
    <style include="px-demo-styles"></style>

    <footer class="demo-background--footer flex flex--center">
      <div class="demo-footer__container u-pv">
        <div>
          <a href="https://www.ge.com/digital"><img src="[[importPath]]monogram-wdmk.png" alt="GE Monogram" class=""></a>
        </div>
        <div class="demo-footer__list">
          <ul class="list-inline list-inline--delimited">
            <li><a href="https://predix.io/legal" class="actionable actionable--secondary" target="_blank">Legal</a></li>
            <li><a href="https://www.predix.io/support/article/KB0012081" class="actionable actionable--secondary" target="_blank">Contact Us</a></li>
            <li>Copyright © General Electric Company. All rights reserved.</li>
          </ul>
        </div>
      </div>
    </footer>
`;
  }

  static get is() { return 'px-sass-doc-footer'; }
}

customElements.define('px-sass-doc-footer', PxSassDocFooter);
