import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `off-campus-housing-page` Page for off-campus housing
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class OffCampusHousingPage extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
        <h1>Off Campus Housing</h1>
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

customElements.define('off-campus-housing-page', OffCampusHousingPage);