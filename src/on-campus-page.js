import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/iron-image/iron-image.js';
import './shared-styles.js';

/**
 * `on-campus-housing-page` Page for on-campus housing
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class OnCampusHousingPage extends PolymerElement {
    static get properties() {
        return {}
    }

    static get template() {
        return html`
        <style include="shared-styles">
        :host {
            display: block;
            @apply --layout-horizontal;
            @apply --layout-start;
            @apply --layout-wrap;
        }

        #houseMap {
            width: 75vw;
            height: 560px;
            overflow:auto;
        }
        #houseMap iron-image {
            --iron-image-width: 980px;
            --iron-image-height: 560px;
            --iron-image-placeholder: {
                background-repeat: no-repeat;
                background-size: 980px 560px;
            };
        }

        #description {
            @apply --layout-vertical;
            @apply --layout-center;
            width: 25vw;
            height: 560px;
            overflow: auto;
            padding: 15px;
            box-sizing: border-box;
        }
        @media (max-width: 900px) {
            #houseMap {
                width: 100vw;
            }
            #description {
                width: 100vw;
            }
        }

        .card {
          @apply --layout-vertical;
          @apply --layout-start;
          width: 100%;
          box-sizing: border-box;
          margin: 5px;
          cursor: pointer;
        }
        .card [title] {
            margin-top: 0;
            margin-bottom: 0;
            color: black;
        }
        .card [content] {
            visibility: hidden;
            height: 0;
        }
        .card [content][expanded] {
            visibility: visible;
            height: auto;
        }

        .card .row {
            @apply --layout-horizontal
            @apply --layout-center;
        }
        .card .row .compare-cell{
            margin-right: 10px;
            margin-top: 5px;
        }
        .card .row .compare-cell:last-of-type{
            margin: 0;
        }
        .card .row .compare-cell::before{
            content: "沒";
            color: red;
        }
        .card .row .compare-cell[pos]::before{
            content: "有";
            color: green;
        }

        .card .rent {
            font-weight: bold;
            margin-top: 3px;
        }
        .card .rent::before {
            content: "房租：";
            font-weight: initial;
        }
        </style>
        <div id="houseMap">
        <iron-image preload
            src="images/on-campus-map.png"
            placeholder="images/on-campus-map-ph.png"></iron-image>
        </div>
        <div id="description">
            <div class="card">
                <h3 title>Palo Verde(PV)</h1>
                <span content>
                位於一個有點陡但是腳踏車還是騎得上去的坡上，跟教授們住個社區僅隔一條街。這個社
區通常很安靜，治安也很好。有兩個住戶可以免費預約的聚會場地，還有有機菜園可以供
居民申請耕種。離校園中心走路大約15 分鐘。缺點是離學校旁邊的兩個Plaza 較遠，需
要走20-30 分鐘。廚房與VP 同樣有四口電熱爐、烤箱、冰箱。房間不附家具。PV 全區
的房租都不包含電費。舊PV 建築（1100-6300，floor plan E, F, G）比舊VP 新，但是比
新VP 舊，房租也在兩者之間。新PV（7100-8800，其餘floor plan）與新VP 相仿。新
舊建築的差異影響最明顯的就是隔音。
                </span>
                <div class="row">
                    <span class="compare-cell">包電費</span>
                    <span class="compare-cell">附傢俱</span>
                </div>
                <div class="rent">中低(舊)&nbsp/&nbsp中高(新)</div>
            </div>
            <div class="card">
                <h3 title>Verano Place(VP) - Old</h1>
                <span content>
                (floor plan: A-J) UCI 最早建成的宿舍之一。雖然很舊，但是也因為此有最便宜的房租，而且包括電費。新
舊VP 都不附家具。廚房有電器有四口電熱爐、烤箱、冰箱、和抽油煙機。社區平時很安
靜，感覺治安也很好。Family housing 的區域會有小孩玩耍的聲音，不過就算這樣也不會
吵。社區內還有一個住戶可以免費預約的聚會場地。
                </span>
                <div class="row">
                    <span class="compare-cell" pos>包電費</span>
                    <span class="compare-cell">附傢俱</span>
                </div>
                <div class="rent">低</div>
            </div>
            <div class="card">
                <h3 title>Verano Place(VP) - New</h1>
                <span content>
                (floor plan: K-N) 新VP 為Building 66-69 四棟，最高到四樓。相較起舊VP 的確新不少，但沒有說超高
級，空間沒有一些舊VP 大，價格卻是最貴的。並且不包含電費。一層有十間住戶，全是
2B1B 房型，但衛浴可能是分開或是在一間的。Building 68 有共用的學習室（有電腦，桌
子，印表機等設備）。鄰近運動場ARC 和校車站，每兩棟之間的公共空間有烤肉架、單
車放置架、洗衣間和郵箱。Building 66 有Amazon locker 可以取或寄Amazon 貨物。
VP 地址普遍紊亂，最好理想接送地點在Housing Office（多數GPS 找的到）。
                </span>
                <div class="row">
                    <span class="compare-cell">包電費</span>
                    <span class="compare-cell">附傢俱</span>
                </div>
                <div class="rent">中高</div>
            </div>
            <div class="card">
                <h3 title>Campus Villege(CV)</h1>
                <span content>
                位於學校西南方，在學校裡面的宿舍，距離 Ayala Science Library 以及理學院的系館很
近，走路去上課相較其他宿舍方便，但是去超市較遠。除了周日跟節日以外時間，可搭校
內公車Anteater Express M line 到Campus Plaza 的超市、ARC。這個宿舍區博士生跟大
學生都可以選，博士班是兩個 bedroom 一人一間，大學生貌似是兩人一間，但博士生的
apartment 相對其他宿舍區少很多。治安很好（除了腳踏車擺外面要小心被偷之外），晚
上也很安靜。除了房租之外，瓦斯費、水費、電費、網路費都不用繳，宿舍有內建免費
Wi-Fi。有兩座停車場，沒有給 Visitor 停車的車位，只有幾個臨停停車位，需申請居民停
車證 (R-CV) 才可停放，博士生自動補助全額停車費。對於訪客很不方便，需要停到稍遠
的停車場 (需要停車費)，所以比較難邀請朋友到家。社區中心 (Community Center) 裡有
間小健身房、有間娛樂室內附 Xbox、以及自習室內附鋼琴。
                </span>
                <div class="row">
                    <span class="compare-cell">包電費</span>
                    <span class="compare-cell" pos>附傢俱</span>
                </div>
                <div class="rent">中高</div>
            </div>
            <div class="card">
                <h3 title>VDCN&nbsp&amp&nbspVDC</h1>
                <span content>
                VDC 跟VDCN 雖然都在校內，但是位於校園最東邊，位置偏遠。與CDS（VDCN 對
街）、PDS（Campus Plaza 對面）相同，都是學校BOT 給ACC 這間公司經營管理。房
租比VP 和PV 貴。由於位置較於偏僻，一年偶而會有幾起破窗竊案。
VDCN 跟VDC 的大學部跟研究生的房間是分開的， 圖中深色區域便是研究生宿舍。
一年四季任何時段都很安靜。騎腳踏車到學校中心右半邊（Business, Law, Education）
要10~15 分鐘，走路約20~25 分。如果不想騎車或走路可以搭公車，在Arroyo Drive 上
會有公車可搭，可是我從來沒搭過。買東西會比較麻煩因為最近的就Albertsons，不然
就UTC 的Trader Joe’s。優點是ARC 就在旁邊，大概走不到10 分鐘就到，常跑體育館的
話很方便。
基本上VDCN 跟VDC 有87%像，都有附家俱，房間內有桌子、椅子、櫃子。客廳有附
電視架、桌子與沙發。依個人需求不同可能還是要買一些家俱。申請時大學生住的與研究
生住的都可以申請，以VDCN graduate studio（單人房）非sublease 來說，房租是
$1,500/月，月租含水電、瓦斯、網路、整修費，除非用太兇才要多繳，住在研究生宿舍
的話不用繳停車費，會給你一個車位，宿舍內可以影印（可以跟宿舍拿紙，但一天最多十
張），有學習室、簡易健身房。ACC 管理的滿好的，會幫忙收包裹、東西壞了報修通常
是1 小時內就有人搞定，二十四小時都有人在leasing office 待命，而且入住前ACC 都會
先把房間打掃滿乾淨的，自己不用再花很多時間整理。
                </span>
                <div class="row">
                    <span class="compare-cell" pos>包電費</span>
                    <span class="compare-cell" pos>附傢俱</span>
                </div>
                <div class="rent">高</div>
            </div>
            <div class="card">
                <h3 title>Plaza Verde</h1>
                <span content>
                Plaza Verde 為2019 年新蓋好也是由ACC 管理的宿舍，預計2019 年9 月啟用，目前已
經開放申請，詳細情形請參考ACC 網站。
                </span>
                <div class="row">
                    <span class="compare-cell" pos>包電費</span>
                    <span class="compare-cell" pos>附傢俱</span>
                </div>
                <div class="rent">高</div>
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

    _onExpandClick(e) {
        let card = e.currentTarget;
        let contents = card.querySelectorAll('[content]');
        for(let content of contents) {
            content.toggleAttribute('expanded');
        }
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
        let cards = this.shadowRoot.querySelectorAll('.card');
        for(let card of cards) {
            card.addEventListener('click', this._onExpandClick);
        }
    }
}

customElements.define('on-campus-housing-page', OnCampusHousingPage);