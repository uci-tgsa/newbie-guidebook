import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';

/**
 * `housing-page` Page showing housing information
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class HousingPage extends PolymerElement {
    static get properties() {
        return {
            _page: {
                type: String,
                value: 'off-campus',
                observer: '_pageChanged'
            }
        }
    }

    static get template() {
        return html`
        <style>
        :host {
            @apply --layout-vertical;
            @apply --layout-start;
        }

        #header {
            @apply --layout-horizontal;
            @apply --layout-center-center;
            width: 100%;
            margin-bottom: 20px;
        }

        paper-tabs {
            --paper-tabs-selection-bar-color: #E91E63;
        }
        paper-tab {
            --paper-tab-ink: white;
            --paper-tab: {
                font-size: 1.5em;
            };
        }
        </style>

        <div id="header">
            <paper-tabs selected="{{_page}}" attr-for-selected="name">
                <paper-tab name="off-campus">校外住宿</paper-tab>
                <paper-tab name="on-campus">校內住宿</paper-tab>
            </paper-tabs>
        </div>
        <iron-pages selected="[[_page]]" attr-for-selected="name" role="main">
            <on-campus-housing-page name="on-campus"></on-campus-housing-page>
            <off-campus-housing-page name="off-campus"></off-campus-housing-page>
        </iron-pages>
        `;
    }

    constructor() {
        super();
    }
    ready() {
        super.ready();
    }

    _pageChanged(page) {
        switch(page) {
        case 'on-campus':
            import('./on-campus-page.js');
            break;
        case 'off-campus':
            import('./off-campus-page.js');
            break;
        default:
            console.error('Unrecognized page value');
        }
    }
}

customElements.define('housing-page', HousingPage);