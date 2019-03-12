import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js';
import '@polymer/marked-element/marked-element.js';
import 'whatwg-fetch';
import './shared-styles.js';

/**
 * `tldr-page` TL;DR page for the impatients
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class TlDrPage extends PolymerElement {
    static get properties() {
        return {
            _details: {
                type: Object,
                value: {
                    visa: {
                        path: 'assets/tldr/visa.md',
                        init: false,
                        content: '請稍等...'
                    },
                    school: {
                        path: 'assets/tldr/school.md',
                        init: false,
                        content: '請稍等...'
                    },
                    flight: {
                        path: 'assets/tldr/flight.md',
                        init: false,
                        content: '請稍等...'
                    },
                    luggage: {
                        path: 'assets/tldr/luggage.md',
                        init: false,
                        content: '請稍等...'
                    },
                    fromAirport: {
                        path: 'assets/tldr/from-airport.md',
                        init: false,
                        content: '請稍等...'
                    },
                    schoolCheckin: {
                        path: 'assets/tldr/checkin.md',
                        init: false,
                        content: '請稍等...'
                    },
                }
            }
        };
    }

    static get template() {
        return html`
        <style include="shared-styles iron-flex iron-flex-alignment">
            :host {
                @apply --layout-vertical;
                @apply --layout-start;
                padding: 0 25vw;
            }

            h1[section-title] {
                font-size: 2.3em;
                font-weight: 500;
            }

            @media (max-width: 640px) {
                :host {
                    padding: 0 10vw;
                }
            }

            .item-bar {
                @apply --layout-horizontal;
                @apply --layout-center;

                margin-bottom: 30px;
                min-width: 60vw;
                min-height: 10vh;
            }

            .circle {
                margin-right: 20px;
            }
            .card {
                @apply --layout-vertical;
                @apply --layout-start;

                padding: 0;
                padding-left: 5%;
                padding-right: 5%;
                min-width: 40vw;
            }

            .card [title-bar] {
                @apply --layout-horizontal;
                @apply --layout-center;
                width: 100%;
            }

            .card [title] {
                color: black;
                font-size: 1.7em;
            }
            .card [title] + * {
                margin-top: 0;
            }

            .card [content] {
                font-size: 1.2em;
                margin-top: 0;
            }

            .card paper-button,
            paper-dialog paper-button {
                --paper-button: {
                    background-color: transparent;
                };
            }

            paper-dialog {
                margin-top: 70px;
            }
            paper-dialog [dialog-confirm] {
                font-weight: bold;
            }
            paper-dialog [footer] {
                @apply --layout-horizontal;
                @apply --layout-center;
                margin-top: 12px;
                margin-bottom: 12px;
            }

            #bottomNavigate {
                @apply --layout-horizontal;
                @apply --layout-center;
                @apply --layout-center-justified;
                width: 100%;

                margin-top: 30px;
                --paper-button: {
                    background-color: #7E57C2;
                    color: white;
                };
            }
            #bottomNavigate a {
                text-decoration: none;
                text-transform: none;
            }
        </style>
        <paper-dialog id="detailDialog" no-cancel-on-outside-click>
            <paper-dialog-scrollable>
                <marked-element markdown="[[_dialogContent]]">
                    <div slot="markdown-html"></div>
                </marked-element>
            </paper-dialog-scrollable>
            <div footer>
                <div class="flex"></div>
                <paper-button dialog-confirm>關閉</paper-button>
            </div>
        </paper-dialog>

        <h1 section-title>行前準備</h1>
        <div class="item-bar">
            <div class="circle">1</div>
            <div class="card">
                <div title-bar>
                    <h2 title>簽證</h2>
                    <div class="flex"></div>
                    <paper-button id="butVisa" on-click="_openDialog">
                        更多
                    </paper-button>
                </div>
            </div>
        </div>

        <div class="item-bar">
            <div class="circle">2</div>
            <div class="card">
            <div title-bar>
                <h2 title>學校相關作業</h2>
                    <div class="flex"></div>
                    <paper-button  id="butSchool" on-click="_openDialog">
                        更多
                    </paper-button>
                </div>
            </div>
        </div>

        <div class="item-bar">
            <div class="circle">3</div>
            <div class="card">
                <div title-bar>
                    <h2 title>機票</h2>
                    <div class="flex"></div>
                    <paper-button  id="butFlight" on-click="_openDialog">
                        更多
                    </paper-button>
                </div>
            </div>
        </div>

        <div class="item-bar">
            <div class="circle">4</div>
            <div class="card">
                <div title-bar>
                    <h2 title>行李準備</h2>
                    <div class="flex"></div>
                    <paper-button  id="butLuggage" on-click="_openDialog">
                        更多
                    </paper-button>
                </div>
            </div>
        </div>

        <div class="item-bar">
            <div class="circle">！</div>
            <div class="card">
                <h2 title>重要文件檢查表</h2>
                <ul style="font-size: 1.2em; padding-inline-start: 20px;">
                    <li>I-20 / DS-2019</li>
                    <li>
                        有效期限超過
                        <span style="color: black;font-weight: bold;">
                            六個月
                        </span>
                        的護照
                    </li>
                    <li>
                        財力證明
                        <span style="font-size: 0.8em;">
                            (有 funding 的博士生不用)
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <h1 section-title>初來乍到</h1>
        <div class="item-bar">
            <div class="circle">1</div>
            <div class="card">
                <div title-bar>
                    <h2 title>從機場到 UCI</h2>
                    <div class="flex"></div>
                    <paper-button  id="butFromAirport" on-click="_openDialog">
                        更多
                    </paper-button>
                </div>
            </div>
        </div>

        <div class="item-bar">
            <div class="circle">2</div>
            <div class="card">
                <div title-bar>
                    <h2 title>學校報到</h2>
                    <div class="flex"></div>
                    <paper-button  id="butSchoolCheckin" on-click="_openDialog">
                        更多
                    </paper-button>
                </div>
            </div>
        </div>

        <div id="bottomNavigate">
            <a href="[[rootPath]]landing" tabindex="-1">
                <paper-button>
                    回到主目錄
                </paper-button>
            </a>
            <paper-button disabled>
                文件版新生手冊
            </paper-button>
        </div>
        `;
    }

    _prepareDialog(key) {
        let dialog = this.$.detailDialog;
        let exportContent = content => {
            this.set('_dialogContent', content);
        };

        exportContent(this.get(`_details.${key}.content`));
        if(this.get(`_details.${key}.init`) !== true) {
            // fetch
            let path = this.get(`_details.${key}.path`);
            console.debug(`Fetching detailed content for ${path}...`);
            window.fetch(path)
                .then(resp => resp.text())
                .then((txt => {
                    this.set(`_details.${key}.content`, txt);
                    this.set(`_details.${key}.init`, true);
                    exportContent(txt);
                    dialog.refit();
                }).bind(this))
                .catch(err => {
                    console.error(`Failed to fetch content from ${path}`);
                });
        }
        return dialog;
    }

    _openDialog(e) {
        switch(e.target.id) {
            case 'butVisa':
                this._prepareDialog('visa').open();
                break;
            case 'butSchool':
                this._prepareDialog('school').open();
                break;
            case 'butFlight':
                this._prepareDialog('flight').open();
                break;
            case 'butLuggage':
                this._prepareDialog('luggage').open();
                break;
            case 'butFromAirport':
                this._prepareDialog('fromAirport').open();
                break;
            case 'butSchoolCheckin':
                this._prepareDialog('schoolCheckin').open();
                break;
        }
    }
}

window.customElements.define('tldr-page', TlDrPage);