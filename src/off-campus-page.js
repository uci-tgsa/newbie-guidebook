import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import './shared-styles.js';

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
        <style include="shared-styles iron-flex iron-flex-alignment">
            :host {
                @apply --layout-vertical;
                @apply --layout-start;
                padding: 0 25vw;
            }

            h1[section-title] {
                font-size: 1.8em;
                font-weight: 500;
            }
            h1[subsection-title] {
                font-size: 1.4em;
                font-weight: bold;
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
                width: 54px;
                height: 54px;
                line-height: 54px;
                font-size: 25px;
            }
            .card {
                @apply --layout-vertical;
                @apply --layout-start;

                padding: 0;
                padding-left: 5%;
                padding-right: 5%;
                min-width: 40vw;
                max-width: calc(50vw - 74px);
            }
            @media (max-width: 640px) {
                .card {
                    max-width: calc(80vw - 74px);
                }
            }
            .card *:last-child:not([title]) {
                padding-bottom: 15px;
            }
            .card *:first-child:not([title]) {
                padding-top: 15px;
            }

            .card [title-bar] {
                @apply --layout-horizontal;
                @apply --layout-center;
                width: 100%;
            }

            .card [title] {
                color: black;
                font-size: 1.5em;
                margin-block-end: 0.53em;
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

        <h1 section-title>UTC 與 Irvine Company 一年一簽</h1>
        <div class="item-bar">
            <div class="circle">1</div>
            <div class="card">
                <span>進入
                    <a target="_blank" href="https://www.irvinecompanyapartments.com/locations/orange-county/irvine/university-town-center.html">UTC Village</a>
                    的網站，尋找你想住的community</span>
            </div>
        </div>
        <div class="item-bar">
            <div class="circle">2</div>
            <div class="card">
                <span>點選Contact Us，留下你的Email（用私人也可以，不一定要UCI 信箱）、資料跟有
興趣的房型。我的經驗是他們房仲都會蠻快回信的，如果太久（1 天~2 天）沒回信，
就在寫一次Contact Us</span>
            </div>
        </div>
        <div class="item-bar">
            <div class="circle">3</div>
            <div class="card">
                <span>房仲會傳一些floor plan 給你，很有可能不一定是你當初詢問的，需要花點時間跟他
們來回信。例如我想住Harvard Court 3B2B，結果房仲傳來Standford Court 1B1B
跟Cornell Court 1B1B。回信問，如果Harvard 3B2B 沒有了，其他Community 還有
3B2B 或4B2B 的房型嗎等等？ 有可能需要來回好幾封信，才會問到符合你需求的房
型。</span>
            </div>
        </div>
        <div class="item-bar">
            <div class="circle">4</div>
            <div class="card">
                <span>拿到房仲寄給你正式的quote 後，表示那間房子只要你簽下去就是你的了，上Irvine
Company 網站登錄就可以簽約了，恭喜！</span>
            </div>
        </div>
        <div class="item-bar">
            <div class="circle">5</div>
            <div class="card">
                <span>看到這邊你以為要結束了?! 不不不，進度條還不到一半呢。美國住宿都同都需要辦理
保險，意思是簽約時必須把「保險序號」附上才算簽約完成。2018 年UTC 合作的保
險公司是eRenter Plan，需要線上估價後，付款，拿到保險合約（pdf 檔），把上面
的序號填到UTC 簽約網站中insurance 的部分。最後，你會拿到住宿人與房東都有簽
字的Leasing Agreement，這資料很重要，是你居住證明（銀行開戶與考DMV 駕照
有可能會叫你出示），恭喜你走到這一步，接下來進到第二關，「斷水斷電斷網」。</span>
            </div>
        </div>

        <h1 subsection-title>UTC Village 水電網斯網路申請流程</h1>
        <div class="item-bar">
            <div class="circle">水</div>
            <div class="card">
                <h2 title>Irvine Ranch Water District</h2>
                <span>申辦帳號（印象中不用SSN），申請到帳號的話，應該就可以開通服務了。</span>
            </div>
        </div>
        <div class="item-bar">
            <div class="circle">電</div>
            <div class="card">
                <h2 title>Southern California Edison Co</h2>
                <span>要打電話給他們客服，記得是記護照電子檔給他們確認ID，才能申請到帳號並且開通
服務。如果不放心寄電子檔，可以去他們門市帶護照直接辦理（需要有車or
Uber/Lyft）。</span>
            </div>
        </div>
        <div class="item-bar">
            <div class="circle">瓦</div>
            <div class="card">
                <h2 title>SoCalGas</h2>
                <span>（同電力）</span>
            </div>
        </div>
        <div class="item-bar">
            <div class="circle">網</div>
            <div class="card">
                <h2 title>Cox Internet</h2>
                <span>建議到門市辦理，因為開通服務後（e.g., 100Mbps+Modem=$65/mo.），需要去拿
Modem（不是WiFi 路由器）。特別注意的是，櫃員一定會問你需不需要技術人員來
幫你裝機（$75），<span style="font-style: italic;">這時候請大聲說不！</span>因為安裝Modem 非常地簡單，自行安裝需
要 $25。</span>
            </div>
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
}

customElements.define('off-campus-housing-page', OffCampusHousingPage);