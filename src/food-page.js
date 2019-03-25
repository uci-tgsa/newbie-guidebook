import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@em-polymer/google-map/google-map.js';
import '@em-polymer/google-map/google-map-marker.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/paper-styles/paper-styles.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import {APIKeys} from './keys.js';
import 'whatwg-fetch';
import './foldable-list.js';

/**
 * `food-page` Page displaying foods info
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class FoodPage extends PolymerElement {
    static get properties() {
        return {
            _GMAP_API_KEY: {
                type: String,
                value: APIKeys.GOOGLE_MAP,
                readOnly: true
            },
            _foodData: {
                type: Object
            },
            /**
             * Object used for displayed on list.
             */
            _foodDisplay: {
                type: Array,
                computed: '_computeDisplay(_foodData)',
            },
            _dummyData: {
                type: Array,
                value: [
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key1', values: ['val1', 'val2']},
                    {key: 'key2', values: ['val3', 'val4', 'val5']},
                ]
            }
        }
    }

    static get template() {
        return html`
        <style>
        :host {
            @apply --layout-horizontal;
            @apply --layout-start;
        }

        #foodMap {
            width: 75vw;
            height: 100vh;
            background-color: white;
        }
        .list-body {
            width: 25vw;
        }
        .list-container {
            --paper-dialog-scrollable: {
                max-height: 100vh;
                padding: 0;
            };
        }
        @media (max-width: 648px) {
            #foodMap {
                width: 100vw;
            }
            .list-body {
                width: auto;
            }
            .list-container {
                --paper-dialog-scrollable: {
                    max-height: auto;
                };
            }
        }

        paper-fab {
            --paper-fab: {
                position: fixed;
                right: 5vw;
                bottom: 10vh;
            };
        }

        paper-dialog {
            margin-top: 140px;
            min-width: 60vw;
            background-color: #E0E0E0;
        }
        </style>
        <iron-media-query query="(max-width: 648px)"
            query-matches="{{_isSmallScreen}}"></iron-media-query>

        <div id="foodMap"></div>

        <!-- Normal screen -->
        <template is="dom-if" if="[[!_isSmallScreen]]" restamp="true">
        <paper-dialog-scrollable class="list-container">
            <foldable-list class="list-body" list-items="[[_dummyData]]"
                on-item-click="_onItemClick"></foldable-list>
        </paper-dialog-scrollable>
        </template>

        <!-- Mobile screen -->
        <template is="dom-if" if="[[_isSmallScreen]]" restamp="true">
        <paper-fab icon="list" on-click="_onOpenDialog"></paper-fab>
        <paper-dialog id="listDialog">
            <paper-dialog-scrollable class="list-container">
                <foldable-list class="list-body" list-items="[[_dummyData]]"
                    on-item-click="_onItemClick"></foldable-list>
            </paper-dialog-scrollable>
        </paper-dialog>
        </template>
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        // initialize food data
        window.fetch('assets/food/catalog.json')
            .then(resp => resp.json())
            .then((data => {
                this.set('_foodData', data);
            }).bind(this))
            .catch(err => {
                console.error('Failed to fetch food catalog:');
                console.error(err);
            });
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }

    _onItemClick(e) {
        console.log(e.detail);
    }

    _computeDisplay(foodData) {
        let display = [];
        for(let entity of foodData) {
            let displayItems = [];
            entity.items.forEach(item => {
                displayItems.push(item.name);
            });
            display.push({
                key: entity.groupName,
                values: displayItems
            })
        }
        return display;
    }

    _onOpenDialog() {
        let dialog = this.shadowRoot.querySelector('#listDialog');
        if(dialog) {
            dialog.open();
        }
    }
}

customElements.define('food-page', FoodPage);