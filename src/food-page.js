import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@em-polymer/google-map/google-map.js';
import '@em-polymer/google-map/google-map-marker.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-media-query/iron-media-query.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/paper-styles/paper-styles.js';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import '@polymer/marked-element/marked-element.js';
import {APIKeys} from './keys.js';
import 'whatwg-fetch';
import './foldable-list.js';

/**
 * `better-map-marker` Better map marker content
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class BetterMapMarker extends PolymerElement {
    static get properties() {
        return {
            title: {
                type: String,
                value: "",
                reflectToAttribute: true
            },
            smallTitle: {
                type: String,
                value: "",
                reflectToAttribute: true
            },
            detailPath: {
                type: String,
                value: "",
                reflectToAttribute: true
            },

            _detail: {
                type: String,
                value: ""
            },
            _expand: {
                type: Boolean,
                value: false,
                observer: '_onExpandChanged'
            },
            _showMoreButton: {
                type: Boolean,
                computed: '_computeShowMore(_expand, detailPath)'
            },
            _showLessButton: {
                type: Boolean,
                computed: '_computeShowLess(_expand, detailPath)'
            }
        }
    }

    static get template() {
        return html`
        <style>
        :host {
            display: block;
            padding: 5px;
        }
        .content {
            @apply --layout-vertical;
            @apply --layout-start;

            min-width: 20vw;
            background-color: white;
            @apply --shadow-elevation-4dp;
            padding: 14px;
        }

        h3 {
            margin-top: 0;
            margin-bottom: 0.5em;
        }

        .small-title {
            color: gray;
            margin-top: 0;
        }

        paper-button {
            --paper-button: {
                margin: 0;
                padding: 0;
                padding-top: 0.5em;
                color: gray;
                font-weight: bold;
            };
        }
        </style>
        <div class="content">
            <h3>[[title]]</h3>
            <span class="small-title">[[smallTitle]]</span>
            <iron-collapse opened="[[_expand]]">
                <marked-element markdown="[[_detail]]">
                    <div slot="markdown-html"></div>
                </marked-element>
            </iron-collapse>
            <paper-button toggles active="{{_expand}}">
            <template is="dom-if" if="[[_showMoreButton]]">
                更多...
            </template>
            <template is="dom-if" if="[[_showLessButton]]">
                收起
            </template>
            </paper-button>
        </div>
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

    _onExpandChanged(expand) {
        if(expand === true &&
           this._detail.length === 0 &&
           this.detailPath.length !== 0) {
            // fetch content
            window.fetch(this.detailPath)
                .then(resp => resp.text())
                .then((txt => {
                    this.set('_detail', txt);
                }).bind(this))
                .catch((err => {
                    console.error(`Failed to fetch content from ${this.detailPath}:`);
                    console.error(err);
                }).bind(this));
        }
    }

    _computeShowMore(expand, detailPath) {
        return detailPath.length !== 0 && !expand;
    }
    _computeShowLess(expand, detailPath) {
        return expand && detailPath.length !== 0;
    }
}

customElements.define('better-map-marker', BetterMapMarker);

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
            _mapMarkers: {
                type: Array,
                computed: '_computeMarkers(_foodData)'
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

        <google-map id="foodMap" api-key="[[_GMAP_API_KEY]]"
            fit-to-markers
            disable-default-ui
            disable-map-type-control
            disable-street-view-control>
            <template is="dom-repeat" items="[[_mapMarkers]]" as="marker">
            <google-map-marker slot="markers"
                latitude="[[marker.latitude]]" longitude="[[marker.longitude]]">
                <better-map-marker
                    title="[[marker.title]]"
                    small-title="[[marker.address]]"
                    detail-path="[[marker.detailPath]]"></better-map-marker>
            </google-map-marker>
            </template>
        </google-map>

        <!-- Normal screen -->
        <template is="dom-if" if="[[!_isSmallScreen]]" restamp="true">
        <paper-dialog-scrollable class="list-container">
            <foldable-list class="list-body" list-items="[[_foodDisplay]]"
                on-item-click="_onItemClick"></foldable-list>
        </paper-dialog-scrollable>
        </template>

        <!-- Mobile screen -->
        <template is="dom-if" if="[[_isSmallScreen]]" restamp="true">
        <paper-fab icon="list" on-click="_onOpenDialog"></paper-fab>
        <paper-dialog id="listDialog">
            <paper-dialog-scrollable class="list-container">
                <foldable-list class="list-body" list-items="[[_foodDisplay]]"
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

    _computeMarkers(foodData) {
        let markers = [];
        for(let entity of foodData) {
            entity.items.forEach(item => {
                markers.push({
                    title: item.name,
                    address: item.address,
                    latitude: item.location.latitude,
                    longitude: item.location.longitude,
                    detailPath: item.detailPath || ""
                });
            });
        }
        return markers;
    }
}

customElements.define('food-page', FoodPage);