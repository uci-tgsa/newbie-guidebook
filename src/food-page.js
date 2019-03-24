import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@em-polymer/google-map/google-map.js';
import '@em-polymer/google-map/google-map-marker.js';
import {APIKeys} from './keys.js';
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
            _dummyObject: {
                type: Object,
                value: {
                    key1: ['value1'],
                    key2: ['value2', 'value3']
                }
            }
        }
    }

    static get template() {
        return html`
        <foldable-list list-items="[[_dummyObject]]"
            on-item-click="_onItemClick"></foldable-list>
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

    _onItemClick(e) {
        console.log(e.detail);
    }
}

customElements.define('food-page', FoodPage);