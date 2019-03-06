
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import './shared-styles.js';

class LandingPage extends PolymerElement {
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
          margin-top: 0;
        }
        .card p {
          font-size: 1.2em;
          margin: 0;
          text-align: center;
        }
      </style>

      <div class="app-grid">
        <div class="card">
          <iron-icon icon="error-outline"></iron-icon>
          <h1>初心者懶人包</h1>
          <p>行前準備、初來乍到...</p>
        </div>

        <div class="card">
          <iron-icon icon="error-outline"></iron-icon>
          <h1>住宿</h1>
          <p>校內住宿、校外租屋...</p>
        </div>

        <div class="card">
          <iron-icon icon="error-outline"></iron-icon>
          <h1>飲食</h1>
          <p>呷飽沒？</p>
        </div>

        <div class="card">
          <iron-icon icon="error-outline"></iron-icon>
          <h1>交通</h1>
          <p>買車、考駕照...</p>
        </div>

        <div class="card">
          <iron-icon icon="error-outline"></iron-icon>
          <h1>生活雜項</h1>
          <p>購物、出遊...</p>
        </div>

        <div class="card">
          <iron-icon icon="error-outline"></iron-icon>
          <h1>學校</h1>
          <p>考試、TA...</p>
        </div>

        <div class="card">
          <iron-icon icon="error-outline"></iron-icon>
          <h1>眷屬相關</h1>
        </div>
      </div>
    `;
  }
}

window.customElements.define('landing-page', LandingPage);
