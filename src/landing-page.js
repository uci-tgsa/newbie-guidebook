
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/maps-icons.js';
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
          <iron-icon icon="maps:directions-car"></iron-icon>
          <h1>自駕指南</h1>
          <p>考駕照、買車...</p>
        </div>
      </div>
    `;
  }
}

window.customElements.define('landing-page', LandingPage);
