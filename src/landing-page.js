
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/maps-icons.js';
import './shared-styles.js';

class LandingPage extends PolymerElement {
  static get properties() {
    return {
      isBeta: Boolean
    };
  }

  static get template() {
    return html`
      <style include="shared-styles app-grid-style">
        :host {
          display: block;

          --app-grid-columns: 3;
          --app-grid-gutter: 24px;
        }

        @media (max-width: 1024px) {
          :host {
            --app-grid-columns: 2;
          }
        }
        @media (max-width: 640px) {
          :host {
            --app-grid-columns: 1;
          }
        }

        a[navi-tile] {
          text-transform: none;
          text-decoration: none;
        }

        .card {
          @apply --layout-vertical;
          @apply --layout-center;
        }
        .card iron-icon {
          --iron-icon-width: 150px;
          --iron-icon-height: 150px;
        }
        .card h1 {
          font-size: 1.8em;
          margin-top: 20px;
          color: black;
        }
        .card h1[disabled] {
          color: #757575;
        }
        .card p {
          font-size: 1.2em;
          margin: 0;
          text-align: center;
        }
      </style>

      <div class="app-grid">
        <a navi-tile href="[[rootPath]]tldr">
          <div class="card" style="background-color: #E1F5FE;">
            <iron-icon icon="touch-app"></iron-icon>
            <h1>初心者懶人包</h1>
            <p>行前準備、初來乍到...</p>
          </div>
        </a>

        <template is="dom-if" if="[[!isBeta]]">
        <div class="card">
          <iron-icon icon="remove-circle-outline"></iron-icon>
          <h1 disabled>住宿</h1>
          <p>校內住宿、校外租屋...</p>
        </div>
        </template>
        <template is="dom-if" if="[[isBeta]]" restamp="true">
        <a navi-tile href="[[rootPath]]housing">
          <div class="card" style="background-color: #DCEDC8;">
            <iron-icon icon="home"></iron-icon>
            <h1>住宿</h1>
            <p>校內住宿、校外租屋...</p>
          </div>
        </a>
        </template>

        <template is="dom-if" if="[[!isBeta]]">
        <div class="card">
          <iron-icon icon="remove-circle-outline"></iron-icon>
          <h1 disabled>飲食</h1>
          <p>呷飽沒？</p>
        </div>
        </template>
        <template is="dom-if" if="[[isBeta]]" restamp="true">
        <a navi-tile href="[[rootPath]]food">
          <div class="card" style="background-color: #F4FF81;">
            <iron-icon icon="maps:local-dining"></iron-icon>
            <h1>飲食</h1>
            <p>呷飽沒？</p>
          </div>
        </a>
        </template>

        <div class="card">
          <iron-icon icon="remove-circle-outline"></iron-icon>
          <h1 disabled>交通</h1>
          <p>買車、考駕照...</p>
        </div>

        <div class="card">
          <iron-icon icon="remove-circle-outline"></iron-icon>
          <h1 disabled>生活雜項</h1>
          <p>購物、出遊...</p>
        </div>

        <div class="card">
          <iron-icon icon="remove-circle-outline"></iron-icon>
          <h1 disabled>學校</h1>
          <p>考試、TA...</p>
        </div>

        <div class="card">
          <iron-icon icon="remove-circle-outline"></iron-icon>
          <h1 disabled>眷屬相關</h1>
        </div>
      </div>
    `;
  }
}

window.customElements.define('landing-page', LandingPage);
