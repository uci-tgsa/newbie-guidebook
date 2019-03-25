import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-collapse/iron-collapse.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-styles/paper-styles.js';

/**
 * `foldable-list` List whose items can fold into multiple categories
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class FoldableList extends PolymerElement {
    static get properties() {
        return {
            listItems: {
                type: Array
            }
        }
    }

    static get template() {
        return html`
        <style>
        :host {
            @apply --layout-vertical;
            /*@apply --layout-scroll;*/
            @apply --layout-start;
        }

        iron-collapse {
            width: 100%;
        }
        paper-icon-item {
            box-sizing: border-box;
        }

        .group-title {
            width: 100%;
            font-size: 1.4em;
            font-weight: bold;
            --paper-icon-item: {
                background-color: #E0E0E0;
            };
            --paper-item-focused: {
                @apply --shadow-elevation-4dp;
            };
        }
        .collapse-content {
            width: 100%;
        }
        .collapse-content > * {
            width: 100%;
            padding-left: 40px;
            font-size: 1.3em;
        }
        </style>
        <template is="dom-repeat" items="[[listItems]]" as="group">
        <paper-icon-item class="group-title" toggles active="{{group.expand}}">
            <template is="dom-if" if="[[group.expand]]">
            <iron-icon icon="expand-less" slot="item-icon"></iron-icon>
            </template>
            <template is="dom-if" if="[[!group.expand]]">
            <iron-icon icon="expand-more" slot="item-icon"></iron-icon>
            </template>
            [[group.key]]
        </paper-icon-item>
        <iron-collapse opened="[[group.expand]]">
            <div class="collapse-content">
            <template is="dom-repeat" items="[[group.values]]">
                <paper-icon-item on-click="_onItemClick">[[item]]</paper-icon-item>
            </template>
            </div>
        </iron-collapse>
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
    }
    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }

    _onItemClick(e) {
        let model = e.model;
        let parent = model.parentModel;
        let event = new CustomEvent('item-click', {
            bubbles: true, composed: true,
            detail: {
                groupIndex: parent.index,
                itemIndex: model.index
            }
        });
        this.dispatchEvent(event);
    }
}

customElements.define('foldable-list', FoldableList);