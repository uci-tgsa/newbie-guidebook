import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';

import './on-campus-page.js';
import './off-campus-page.js';

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
                type: Number,
                value: 0
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
            <paper-tabs selected="{{_page}}">
                <paper-tab>校內住宿</paper-tab>
                <paper-tab>校外住宿</paper-tab>
            </paper-tabs>
        </div>
        <iron-pages selected="[[_page]]" role="main">
            <on-campus-housing-page></on-campus-housing-page>
            <off-campus-housing-page></off-campus-housing-page>
        </iron-pages>
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }
}

customElements.define('housing-page', HousingPage);