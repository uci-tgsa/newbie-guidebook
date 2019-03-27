import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-grid/app-grid-style.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class ShellPage extends PolymerElement {
  static get template() {
    return html`
      <style include="app-grid-style iron-flex iron-flex-alignment">
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-toolbar {
          --app-toolbar-font-size: 25px;
        }

        app-header {
          color: #000;
          background-color: transparent;
          --app-header-background-rear-layer: {
            background-color: #CFD8DC;
          };
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }

        .footer {
          @apply --layout-vertical;
          @apply --layout-center;

          margin: 0;
          margin-top: 50px;
          padding: 24px;
          background-color: #455A64;
          color: #BDBDBD;
        }
      </style>

      <app-location
        route="{{route}}" url-space-regex="^[[rootPath]]"
        query-params="{{_queryParams}}">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed force-narrow narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>目錄</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="landing" href="[[rootPath]]landing">主選單</a>  
            <a name="tldr" href="[[rootPath]]tldr">懶人包</a>
            <template is="dom-if" if="[[_isBeta]]" restamp="true">
            <a name="food" href="[[rootPath]]food">飲食</a>
            </template>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" reveals condenses effects="waterfall blend-background">
            <app-toolbar>
              <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
              <div main-title class="layout vertical center">
                TGSA 2019 新生手冊
              </div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <landing-page name="landing" is-beta="[[_isBeta]]"></landing-page>
            <tldr-page name="tldr"></tldr-page>
            <food-page name="food"></food-page>
            <my-view404 name="view404"></my-view404>
          </iron-pages>

          <div class="footer">
            <span>Released Under Apache License 2.0 by UCI TGSA 2019</span>

          </div>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object,
      _queryParams: Object,
      _isBeta: {
        type: Boolean,
        computed: '_computeIsBeta(_queryParams.beta)'
      }
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'landing';
    } else if (['tldr', 'food', 'landing'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'landing':
        import('./landing-page.js');
        break;
      case 'tldr':
        import('./tldr-page.js');
        break;
      case 'food':
        import('./food-page.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }

  _computeIsBeta(beta) {
    return beta === 'true';
  }
}

window.customElements.define('shell-page', ShellPage);
