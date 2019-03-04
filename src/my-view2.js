/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';

class MyView2 extends LitElement {
  static get styles() {
    return css`
    :host {
      display: block;
      padding: 10px;
    }
    .card {
      margin: 24px;
      padding: 16px;
      color: #757575;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }

    .circle {
      display: inline-block;
      width: 64px;
      height: 64px;
      text-align: center;
      color: #555;
      border-radius: 50%;
      background: #ddd;
      font-size: 30px;
      line-height: 64px;
    }

    h1 {
      margin: 16px 0;
      color: #212121;
      font-size: 22px;
    }`;
  }

  render() {
    return html`
      <div class="card">
        <div class="circle">2</div>
        <h1>View Two</h1>
        <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
        <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
