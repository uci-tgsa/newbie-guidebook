define(["exports","./shell-page.js"],function(_exports,_shellPage){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.PaperItemBehaviorImpl=_exports.PaperItemBehavior=_exports.IronJsonpLibraryBehavior=_exports.APIKeys=_exports.$paperItemBehavior=_exports.$keys=_exports.$ironJsonpLibrary=void 0;function _templateObject8_0aa9e9e084b711e98c3fc7fd73e5d641(){var data=babelHelpers.taggedTemplateLiteral(["\n        <style>\n        :host {\n            @apply --layout-horizontal;\n            @apply --layout-start;\n        }\n\n        #foodMap {\n            width: 75vw;\n            height: 100vh;\n            background-color: white;\n        }\n        .list-body {\n            width: 25vw;\n        }\n        .list-container {\n            --paper-dialog-scrollable: {\n                max-height: 100vh;\n                padding: 0;\n            };\n        }\n        @media (max-width: 748px) {\n            #foodMap {\n                width: 100vw;\n            }\n            .list-body {\n                width: auto;\n            }\n            .list-container {\n                --paper-dialog-scrollable: {\n                    max-height: auto;\n                };\n            }\n        }\n\n        paper-fab {\n            --paper-fab: {\n                position: fixed;\n                right: 5vw;\n                bottom: 10vh;\n            };\n        }\n\n        paper-dialog {\n            margin-top: 140px;\n            min-width: 60vw;\n            background-color: #E0E0E0;\n        }\n        </style>\n        <iron-media-query query=\"(max-width: 748px)\"\n            query-matches=\"{{_isSmallScreen}}\"></iron-media-query>\n\n        <google-map id=\"foodMap\" api-key=\"[[_GMAP_API_KEY]]\"\n            fit-to-markers single-info-window\n            disable-default-ui\n            disable-map-type-control\n            disable-street-view-control>\n            <template is=\"dom-repeat\" items=\"[[_mapMarkers]]\" as=\"marker\">\n            <google-map-marker slot=\"markers\"\n                latitude=\"[[marker.latitude]]\" longitude=\"[[marker.longitude]]\">\n                <better-map-marker\n                    title=\"[[marker.title]]\"\n                    small-title=\"[[marker.address]]\"\n                    detail-path=\"[[marker.detailPath]]\"></better-map-marker>\n            </google-map-marker>\n            </template>\n        </google-map>\n\n        <!-- Normal screen -->\n        <template is=\"dom-if\" if=\"[[!_isSmallScreen]]\" restamp=\"true\">\n        <paper-dialog-scrollable class=\"list-container\">\n            <foldable-list class=\"list-body\" list-items=\"[[_foodDisplay]]\"\n                on-item-click=\"_onItemClick\"></foldable-list>\n        </paper-dialog-scrollable>\n        </template>\n\n        <!-- Mobile screen -->\n        <template is=\"dom-if\" if=\"[[_isSmallScreen]]\" restamp=\"true\">\n        <paper-fab icon=\"list\" on-click=\"_onOpenDialog\"></paper-fab>\n        <paper-dialog id=\"listDialog\">\n            <paper-dialog-scrollable class=\"list-container\">\n                <foldable-list class=\"list-body\" list-items=\"[[_foodDisplay]]\"\n                    on-item-click=\"_onItemClick\"></foldable-list>\n            </paper-dialog-scrollable>\n        </paper-dialog>\n        </template>\n        "]);_templateObject8_0aa9e9e084b711e98c3fc7fd73e5d641=function _templateObject8_0aa9e9e084b711e98c3fc7fd73e5d641(){return data};return data}function _templateObject7_0aa9e9e084b711e98c3fc7fd73e5d641(){var data=babelHelpers.taggedTemplateLiteral(["\n        <style>\n        :host {\n            display: block;\n            padding: 5px;\n        }\n        .content {\n            @apply --layout-vertical;\n            @apply --layout-start;\n\n            min-width: 20vw;\n            background-color: white;\n            @apply --shadow-elevation-4dp;\n            padding: 14px;\n        }\n        @media (max-width: 748px) {\n            .content {\n                min-width: 25vw;\n            }\n        }\n\n        h3 {\n            margin-top: 0;\n            margin-bottom: 0.5em;\n        }\n\n        .small-title {\n            color: gray;\n            margin-top: 0;\n        }\n\n        paper-button {\n            --paper-button: {\n                margin: 0;\n                padding: 0;\n                padding-top: 0.5em;\n                color: gray;\n                font-weight: bold;\n            };\n        }\n        </style>\n        <div class=\"content\">\n            <h3>[[title]]</h3>\n            <span class=\"small-title\">[[smallTitle]]</span>\n            <iron-collapse opened=\"[[_expand]]\">\n                <marked-element markdown=\"[[_detail]]\">\n                    <div slot=\"markdown-html\"></div>\n                </marked-element>\n            </iron-collapse>\n            <paper-button toggles active=\"{{_expand}}\">\n            <template is=\"dom-if\" if=\"[[_showMoreButton]]\">\n                \u66F4\u591A...\n            </template>\n            <template is=\"dom-if\" if=\"[[_showLessButton]]\">\n                \u6536\u8D77\n            </template>\n            </paper-button>\n        </div>\n        "]);_templateObject7_0aa9e9e084b711e98c3fc7fd73e5d641=function _templateObject7_0aa9e9e084b711e98c3fc7fd73e5d641(){return data};return data}function _templateObject6_0aa9e9e084b711e98c3fc7fd73e5d641(){var data=babelHelpers.taggedTemplateLiteral(["\n        <style>\n        :host {\n            @apply --layout-vertical;\n            /*@apply --layout-scroll;*/\n            @apply --layout-start;\n        }\n\n        iron-collapse {\n            width: 100%;\n        }\n        paper-icon-item {\n            box-sizing: border-box;\n        }\n\n        .group-title {\n            width: 100%;\n            font-size: 1.4em;\n            font-weight: bold;\n            --paper-icon-item: {\n                background-color: #E0E0E0;\n            };\n            --paper-item-focused: {\n                @apply --shadow-elevation-4dp;\n            };\n        }\n        .collapse-content {\n            width: 100%;\n        }\n        .collapse-content > * {\n            width: 100%;\n            font-size: 1.3em;\n        }\n        </style>\n        <template is=\"dom-repeat\" items=\"[[listItems]]\" as=\"group\">\n        <paper-icon-item class=\"group-title\" toggles active=\"{{group.expand}}\">\n            <template is=\"dom-if\" if=\"[[group.expand]]\">\n            <iron-icon icon=\"expand-less\" slot=\"item-icon\"></iron-icon>\n            </template>\n            <template is=\"dom-if\" if=\"[[!group.expand]]\">\n            <iron-icon icon=\"expand-more\" slot=\"item-icon\"></iron-icon>\n            </template>\n            [[group.key]]\n        </paper-icon-item>\n        <iron-collapse opened=\"[[group.expand]]\">\n            <div class=\"collapse-content\">\n            <template is=\"dom-repeat\" items=\"[[group.values]]\">\n                <paper-icon-item on-click=\"_onItemClick\">[[item]]</paper-icon-item>\n            </template>\n            </div>\n        </iron-collapse>\n        </template>\n        "]);_templateObject6_0aa9e9e084b711e98c3fc7fd73e5d641=function _templateObject6_0aa9e9e084b711e98c3fc7fd73e5d641(){return data};return data}function _templateObject5_0aa9e9e084b711e98c3fc7fd73e5d641(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"paper-item-shared-styles\"></style>\n    <style>\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n        @apply --paper-icon-item;\n      }\n\n      .content-icon {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n\n        width: var(--paper-item-icon-width, 56px);\n        @apply --paper-item-icon;\n      }\n    </style>\n\n    <div id=\"contentIcon\" class=\"content-icon\">\n      <slot name=\"item-icon\"></slot>\n    </div>\n    <slot></slot>\n"]);_templateObject5_0aa9e9e084b711e98c3fc7fd73e5d641=function _templateObject5_0aa9e9e084b711e98c3fc7fd73e5d641(){return data};return data}function _templateObject4_0aa9e9e084b711e98c3fc7fd73e5d641(){var data=babelHelpers.taggedTemplateLiteral(["\n  <style include=\"paper-material-styles\">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value `transparent`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation=\"1\"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation=\"2\"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation=\"3\"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation=\"4\"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation=\"5\"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id=\"icon\" hidden$=\"{{!_computeIsIconFab(icon, src)}}\" src=\"[[src]]\" icon=\"[[icon]]\"></iron-icon>\n  <span hidden$=\"{{_computeIsIconFab(icon, src)}}\">{{label}}</span>\n"],["\n  <style include=\"paper-material-styles\">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value \\`transparent\\`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation=\"1\"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation=\"2\"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation=\"3\"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation=\"4\"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation=\"5\"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id=\"icon\" hidden\\$=\"{{!_computeIsIconFab(icon, src)}}\" src=\"[[src]]\" icon=\"[[icon]]\"></iron-icon>\n  <span hidden\\$=\"{{_computeIsIconFab(icon, src)}}\">{{label}}</span>\n"]);_templateObject4_0aa9e9e084b711e98c3fc7fd73e5d641=function _templateObject4_0aa9e9e084b711e98c3fc7fd73e5d641(){return data};return data}function _templateObject3_0aa9e9e084b711e98c3fc7fd73e5d641(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        transition-duration: var(--iron-collapse-transition-duration, 300ms);\n        /* Safari 10 needs this property prefixed to correctly apply the custom property */\n        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);\n        overflow: visible;\n      }\n\n      :host(.iron-collapse-closed) {\n        display: none;\n      }\n\n      :host(:not(.iron-collapse-opened)) {\n        overflow: hidden;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject3_0aa9e9e084b711e98c3fc7fd73e5d641=function _templateObject3_0aa9e9e084b711e98c3fc7fd73e5d641(){return data};return data}function _templateObject2_0aa9e9e084b711e98c3fc7fd73e5d641(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: relative;\n        display: block;\n        height: 100%;\n      }\n\n      #map {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n    </style>\n\n    <google-maps-api id=\"api\" api-key=\"[[apiKey]]\" client-id=\"[[clientId]]\" version=\"[[version]]\" signed-in=\"[[signedIn]]\" language=\"[[language]]\" on-api-load=\"_mapApiLoaded\" maps-url=\"[[mapsUrl]]\">\n    </google-maps-api>\n\n    <div id=\"map\"></div>\n\n    <iron-selector id=\"selector\" multi=\"[[!singleInfoWindow]]\" selected-attribute=\"open\" activate-event=\"google-map-marker-open\" on-google-map-marker-close=\"_deselectMarker\">\n      <slot id=\"markers\" name=\"markers\"></slot>\n    </iron-selector>\n\n    <slot id=\"objects\"></slot>\n"]);_templateObject2_0aa9e9e084b711e98c3fc7fd73e5d641=function _templateObject2_0aa9e9e084b711e98c3fc7fd73e5d641(){return data};return data}function _templateObject_0aa9e9e084b711e98c3fc7fd73e5d641(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: none;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject_0aa9e9e084b711e98c3fc7fd73e5d641=function _templateObject_0aa9e9e084b711e98c3fc7fd73e5d641(){return data};return data}var IronJsonpLibraryBehavior={properties:{/**
     * True if library has been successfully loaded
     */libraryLoaded:{type:Boolean,value:!1,notify:!0,readOnly:!0},/**
     * Not null if library has failed to load
     */libraryErrorMessage:{type:String,value:null,notify:!0,readOnly:!0// Following properties are to be set by behavior users
/**
       * Library url. Must contain string `%%callback%%`.
       *
       * `%%callback%%` is a placeholder for jsonp wrapper function name
       *
       * Ex: https://maps.googleapis.com/maps/api/js?callback=%%callback%%
       * @property libraryUrl
       */ /**
           * Set if library requires specific callback name.
           * Name will be automatically generated if not set.
           * @property callbackName
           */ /**
               * name of event to be emitted when library loads. Standard is `api-load`
               * @property notifyEvent
               */ /**
                   * event with name specified in `notifyEvent` attribute
                   * will fire upon successful load2
                   * @event `notifyEvent`
                   */}},observers:["_libraryUrlChanged(libraryUrl)"],_libraryUrlChanged:function _libraryUrlChanged(libraryUrl){// can't load before ready because notifyEvent might not be set
if(this._isReady&&this.libraryUrl)this._loadLibrary()},_libraryLoadCallback:function _libraryLoadCallback(err,result){if(err){_shellPage.Base._warn("Library load failed:",err.message);this._setLibraryErrorMessage(err.message)}else{this._setLibraryErrorMessage(null);this._setLibraryLoaded(!0);if(this.notifyEvent)this.fire(this.notifyEvent,result,{composed:!0})}},/** loads the library, and fires this.notifyEvent upon completion */_loadLibrary:function _loadLibrary(){LoaderMap.require(this.libraryUrl,this._libraryLoadCallback.bind(this),this.callbackName)},ready:function ready(){this._isReady=!0;if(this.libraryUrl)this._loadLibrary()}};/**
    * LoaderMap keeps track of all Loaders
    */_exports.IronJsonpLibraryBehavior=IronJsonpLibraryBehavior;var LoaderMap={apiMap:{},// { hash -> Loader }
/**
   * @param {Function} notifyCallback loaded callback fn(result)
   * @param {string} jsonpCallbackName name of jsonpcallback. If API does not provide it, leave empty. Optional.
   */require:function require(url,notifyCallback,jsonpCallbackName){// make hashable string form url
var name=this.nameFromUrl(url);// create a loader as needed
if(!this.apiMap[name])this.apiMap[name]=new Loader(name,url,jsonpCallbackName);// ask for notification
this.apiMap[name].requestNotify(notifyCallback)},nameFromUrl:function nameFromUrl(url){return url.replace(/[\:\/\%\?\&\.\=\-\,]/g,"_")+"_api"}},Loader=function Loader(name,url,callbackName){this.notifiers=[];// array of notifyFn [ notifyFn* ]
// callback is specified either as callback name
// or computed dynamically if url has callbackMacro in it
if(!callbackName){if(0<=url.indexOf(this.callbackMacro)){callbackName=name+"_loaded";url=url.replace(this.callbackMacro,callbackName)}else{this.error=new Error("IronJsonpLibraryBehavior a %%callback%% parameter is required in libraryUrl");// TODO(sjmiles): we should probably fallback to listening to script.load
return}}this.callbackName=callbackName;window[this.callbackName]=this.success.bind(this);this.addScript(url)};/** @constructor */Loader.prototype={callbackMacro:"%%callback%%",loaded:!1,addScript:function addScript(src){var script=document.createElement("script");script.src=src;script.onerror=this.handleError.bind(this);var s=document.querySelector("script")||document.body;s.parentNode.insertBefore(script,s);this.script=script},removeScript:function removeScript(){if(this.script.parentNode){this.script.parentNode.removeChild(this.script)}this.script=null},handleError:function handleError(ev){this.error=new Error("Library failed to load");this.notifyAll();this.cleanup()},success:function success(){this.loaded=!0;this.result=Array.prototype.slice.call(arguments);this.notifyAll();this.cleanup()},cleanup:function cleanup(){delete window[this.callbackName]},notifyAll:function notifyAll(){this.notifiers.forEach(function(notifyCallback){notifyCallback(this.error,this.result)}.bind(this));this.notifiers=[]},requestNotify:function requestNotify(notifyCallback){if(this.loaded||this.error){notifyCallback(this.error,this.result)}else{this.notifiers.push(notifyCallback)}}};/**
     Loads specified jsonp library.
   
     Example:
   
         <iron-jsonp-library
           library-url="https://apis.google.com/js/plusone.js?onload=%%callback%%"
           notify-event="api-load"
           library-loaded="{{loaded}}"></iron-jsonp-library>
   
     Will emit 'api-load' event when loaded, and set 'loaded' to true
   
     Implemented by  Polymer.IronJsonpLibraryBehavior. Use it
     to create specific library loader elements.
   
     @demo demo/index.html
   */(0,_shellPage.Polymer)({is:"iron-jsonp-library",behaviors:[IronJsonpLibraryBehavior],properties:{/**
     * Library url. Must contain string `%%callback%%`.
     *
     * `%%callback%%` is a placeholder for jsonp wrapper function name
     *
     * Ex: https://maps.googleapis.com/maps/api/js?callback=%%callback%%
     */libraryUrl:String,/**
     * Set if library requires specific callback name.
     * Name will be automatically generated if not set.
     */callbackName:String,/**
     * event with name specified in 'notifyEvent' attribute
     * will fire upon successful load
     */notifyEvent:String/**
                            * event with name specified in 'notifyEvent' attribute
                            * will fire upon successful load
                            * @event `notifyEvent`
                            */}});var ironJsonpLibrary={IronJsonpLibraryBehavior:IronJsonpLibraryBehavior};_exports.$ironJsonpLibrary=ironJsonpLibrary;(0,_shellPage.Polymer)({is:"google-maps-api",behaviors:[IronJsonpLibraryBehavior],properties:{/** @private */mapsUrl:{type:String,value:"https://maps.googleapis.com/maps/api/js?callback=%%callback%%"},/**
     * A Maps API key. To obtain an API key, see developers.google.com/maps/documentation/javascript/tutorial#api_key.
     */apiKey:{type:String,value:""},/**
     * A Maps API for Business Client ID. To obtain a Maps API for Business Client ID, see developers.google.com/maps/documentation/business/.
     * If set, a Client ID will take precedence over an API Key.
     */clientId:{type:String,value:""},/**
     * Version of the Maps API to use.
     */version:{type:String,value:"3.exp"},/**
     * The localized language to load the Maps API with. For more information
     * see https://developers.google.com/maps/documentation/javascript/basics#Language
     *
     * Note: the Maps API defaults to the preffered language setting of the browser.
     * Use this parameter to override that behavior.
     */language:{type:String,value:""},/**
     * If true, sign-in is enabled.
     * See https://developers.google.com/maps/documentation/javascript/signedin#enable_sign_in
     */signedIn:{type:Boolean,value:!1},/**
     * Fired when the Maps API library is loaded and ready.
     * @event api-load
     */ /**
         * Name of event fired when library is loaded and available.
         */notifyEvent:{type:String,value:"api-load"},/** @private */libraryUrl:{type:String,computed:"_computeUrl(mapsUrl, version, apiKey, clientId, language, signedIn)"}},_computeUrl:function _computeUrl(mapsUrl,version,apiKey,clientId,language,signedIn){var url="".concat(mapsUrl,"&v=").concat(version);// Always load all Maps API libraries.
url+="&libraries=drawing,geometry,places,visualization";if(apiKey&&!clientId){url+="&key=".concat(apiKey)}if(clientId){url+="&client=".concat(clientId)}// Log a warning if the user is not using an API Key or Client ID.
if(!apiKey&&!clientId){var warning="No Google Maps API Key or Client ID specified. "+"See https://developers.google.com/maps/documentation/javascript/get-api-key "+"for instructions to get started with a key or client id.";console.warn(warning)}if(language){url+="&language=".concat(language)}if(signedIn){url+="&signed_in=".concat(signedIn)}return url},/**
   * Provides the google.maps JS API namespace.
   */get api(){return google.maps}});function setupDragHandler_(){if(this.draggable){this.dragHandler_=google.maps.event.addListener(this.marker,"dragend",onDragEnd_.bind(this))}else{google.maps.event.removeListener(this.dragHandler_);this.dragHandler_=null}}function onDragEnd_(e,details,sender){this.latitude=e.latLng.lat();this.longitude=e.latLng.lng()}(0,_shellPage.Polymer)({_template:(0,_shellPage.html$1)(_templateObject_0aa9e9e084b711e98c3fc7fd73e5d641()),is:"google-map-marker",/**
   * Fired when the marker icon was clicked. Requires the clickEvents attribute to be true.
   *
   * @param {google.maps.MouseEvent} event The mouse event.
   * @event google-map-marker-click
   */ /**
       * Fired when the marker icon was double clicked. Requires the clickEvents attribute to be true.
       *
       * @param {google.maps.MouseEvent} event The mouse event.
       * @event google-map-marker-dblclick
       */ /**
           * Fired repeatedly while the user drags the marker. Requires the dragEvents attribute to be true.
           *
           * @event google-map-marker-drag
           */ /**
               * Fired when the user stops dragging the marker. Requires the dragEvents attribute to be true.
               *
               * @event google-map-marker-dragend
               */ /**
                   * Fired when the user starts dragging the marker. Requires the dragEvents attribute to be true.
                   *
                   * @event google-map-marker-dragstart
                   */ /**
                       * Fired for a mousedown on the marker. Requires the mouseEvents attribute to be true.
                       *
                       * @event google-map-marker-mousedown
                       * @param {google.maps.MouseEvent} event The mouse event.
                       */ /**
                           * Fired when the DOM `mousemove` event is fired on the marker. Requires the mouseEvents
                           * attribute to be true.
                           *
                           * @event google-map-marker-mousemove
                           * @param {google.maps.MouseEvent} event The mouse event.
                           */ /**
                               * Fired when the mouse leaves the area of the marker icon. Requires the mouseEvents attribute to be
                               * true.
                               *
                               * @event google-map-marker-mouseout
                               * @param {google.maps.MouseEvent} event The mouse event.
                               */ /**
                                   * Fired when the mouse enters the area of the marker icon. Requires the mouseEvents attribute to be
                                   * true.
                                   *
                                   * @event google-map-marker-mouseover
                                   * @param {google.maps.MouseEvent} event The mouse event.
                                   */ /**
                                       * Fired for a mouseup on the marker. Requires the mouseEvents attribute to be true.
                                       *
                                       * @event google-map-marker-mouseup
                                       * @param {google.maps.MouseEvent} event The mouse event.
                                       */ /**
                                           * Fired for a rightclick on the marker. Requires the clickEvents attribute to be true.
                                           *
                                           * @event google-map-marker-rightclick
                                           * @param {google.maps.MouseEvent} event The mouse event.
                                           */ /**
                                               * Fired when an infowindow is opened.
                                               *
                                               * @event google-map-marker-open
                                               */ /**
                                                   * Fired when the close button of the infowindow is pressed.
                                                   *
                                                   * @event google-map-marker-close
                                                   */properties:{/**
     * A Google Maps marker object.
     *
     * @type google.maps.Marker
     */marker:{type:Object,notify:!0},/**
     * The Google map object.
     *
     * @type google.maps.Map
     */map:{type:Object,observer:"_mapChanged"},/**
     * A Google Map Infowindow object.
     *
     * @type {?Object}
     */info:{type:Object,value:null},/**
     * When true, marker *click events are automatically registered.
     */clickEvents:{type:Boolean,value:!1,observer:"_clickEventsChanged"},/**
     * When true, marker drag* events are automatically registered.
     */dragEvents:{type:Boolean,value:!1,observer:"_dragEventsChanged"},/**
     * Image URL for the marker icon.
     *
     * @type string|google.maps.Icon|google.maps.Symbol
     */icon:{type:Object,value:null,observer:"_iconChanged"},/**
     * When true, marker mouse* events are automatically registered.
     */mouseEvents:{type:Boolean,value:!1,observer:"_mouseEventsChanged"},/**
     * Z-index for the marker icon.
     */zIndex:{type:Number,value:0,observer:"_zIndexChanged"},/**
     * The marker's longitude coordinate.
     */longitude:{type:Number,value:null,notify:!0},/**
     * The marker's latitude coordinate.
     */latitude:{type:Number,value:null,notify:!0},/**
     * The marker's label.
     */label:{type:String,value:null,observer:"_labelChanged"},/**
     * A animation for the marker. "DROP" or "BOUNCE". See
     * https://developers.google.com/maps/documentation/javascript/examples/marker-animations.
     */animation:{type:String,value:null,observer:"_animationChanged"},/**
     * Specifies whether the InfoWindow is open or not
     */open:{type:Boolean,value:!1,observer:"_openChanged"}},observers:["_updatePosition(latitude, longitude)"],detached:function detached(){if(this.marker){google.maps.event.clearInstanceListeners(this.marker);this._listeners={};this.marker.setMap(null)}if(this._contentObserver){this._contentObserver.disconnect()}},attached:function attached(){// If element is added back to DOM, put it back on the map.
if(this.marker){this.marker.setMap(this.map)}},_updatePosition:function _updatePosition(){if(this.marker&&null!=this.latitude&&null!=this.longitude){this.marker.setPosition(new google.maps.LatLng(parseFloat(this.latitude),parseFloat(this.longitude)))}},_clickEventsChanged:function _clickEventsChanged(){if(this.map){if(this.clickEvents){this._forwardEvent("click");this._forwardEvent("dblclick");this._forwardEvent("rightclick")}else{this._clearListener("click");this._clearListener("dblclick");this._clearListener("rightclick")}}},_dragEventsChanged:function _dragEventsChanged(){if(this.map){if(this.dragEvents){this._forwardEvent("drag");this._forwardEvent("dragend");this._forwardEvent("dragstart")}else{this._clearListener("drag");this._clearListener("dragend");this._clearListener("dragstart")}}},_mouseEventsChanged:function _mouseEventsChanged(){if(this.map){if(this.mouseEvents){this._forwardEvent("mousedown");this._forwardEvent("mousemove");this._forwardEvent("mouseout");this._forwardEvent("mouseover");this._forwardEvent("mouseup")}else{this._clearListener("mousedown");this._clearListener("mousemove");this._clearListener("mouseout");this._clearListener("mouseover");this._clearListener("mouseup")}}},_animationChanged:function _animationChanged(){if(this.marker){this.marker.setAnimation(google.maps.Animation[this.animation])}},_labelChanged:function _labelChanged(){if(this.marker){this.marker.setLabel(this.label)}},_iconChanged:function _iconChanged(){if(this.marker){this.marker.setIcon(this.icon)}},_zIndexChanged:function _zIndexChanged(){if(this.marker){this.marker.setZIndex(this.zIndex)}},_mapChanged:function _mapChanged(){// Marker will be rebuilt, so disconnect existing one from old map and listeners.
if(this.marker){this.marker.setMap(null);google.maps.event.clearInstanceListeners(this.marker)}if(this.map&&babelHelpers.instanceof(this.map,google.maps.Map)){this._mapReady()}},_contentChanged:function _contentChanged(){var _this=this;if(this._contentObserver){this._contentObserver.disconnect()}// Watch for future updates.
this._contentObserver=new MutationObserver(this._contentChanged.bind(this));this._contentObserver.observe(this,{childList:!0,subtree:!0});var content=this.innerHTML.trim();if(content){if(!this.info){// Create a new infowindow
this.info=new google.maps.InfoWindow;this.openInfoHandler_=google.maps.event.addListener(this.marker,"click",function(){_this.open=!0});this.closeInfoHandler_=google.maps.event.addListener(this.info,"closeclick",function(){_this.open=!1})}this.info.setContent(content)}else if(this.info){// Destroy the existing infowindow.  It doesn't make sense to have an empty one.
google.maps.event.removeListener(this.openInfoHandler_);google.maps.event.removeListener(this.closeInfoHandler_);this.info=null}},_openChanged:function _openChanged(){if(this.info){if(this.open){this.info.open(this.map,this.marker);this.fire("google-map-marker-open")}else{this.info.close();this.fire("google-map-marker-close")}}},_mapReady:function _mapReady(){this._listeners={};this.marker=new google.maps.Marker({map:this.map,position:{lat:parseFloat(this.latitude),lng:parseFloat(this.longitude)},title:this.title,animation:google.maps.Animation[this.animation],draggable:this.draggable,visible:!this.hidden,icon:this.icon,label:this.label,zIndex:this.zIndex});this._contentChanged();this._clickEventsChanged();this._dragEventsChanged();this._mouseEventsChanged();this._openChanged();setupDragHandler_.bind(this)()},_clearListener:function _clearListener(name){if(this._listeners[name]){google.maps.event.removeListener(this._listeners[name]);this._listeners[name]=null}},_forwardEvent:function _forwardEvent(name){var _this2=this;this._listeners[name]=google.maps.event.addListener(this.marker,name,function(event){_this2.fire("google-map-marker-".concat(name),event)})},attributeChanged:function attributeChanged(attrName){if(!this.marker){return}// Cannot use *Changed watchers for native properties.
switch(attrName){case"hidden":this.marker.setVisible(!this.hidden);break;case"draggable":this.marker.setDraggable(this.draggable);setupDragHandler_.bind(this)();break;case"title":this.marker.setTitle(this.title);break;}}});(0,_shellPage.Polymer)({_template:(0,_shellPage.html$1)(_templateObject2_0aa9e9e084b711e98c3fc7fd73e5d641()),is:"google-map",/**
   * Fired when the Maps API has fully loaded.
   *
   * @event google-map-ready
   */ /**
       * Fired when the user clicks on the map (but not when they click on a marker, infowindow, or
       * other object). Requires the clickEvents attribute to be true.
       *
       * @event google-map-click
       * @param {google.maps.MouseEvent} event The mouse event.
       */ /**
           * Fired when the user double-clicks on the map. Note that the google-map-click event will also fire,
           * right before this one. Requires the clickEvents attribute to be true.
           *
           * @event google-map-dblclick
           * @param {google.maps.MouseEvent} event The mouse event.
           */ /**
               * Fired repeatedly while the user drags the map. Requires the dragEvents attribute to be true.
               *
               * @event google-map-drag
               */ /**
                   * Fired when the user stops dragging the map. Requires the dragEvents attribute to be true.
                   *
                   * @event google-map-dragend
                   */ /**
                       * Fired when the user starts dragging the map. Requires the dragEvents attribute to be true.
                       *
                       * @event google-map-dragstart
                       */ /**
                           * Fired whenever the user's mouse moves over the map container. Requires the mouseEvents attribute to
                           * be true.
                           *
                           * @event google-map-mousemove
                           * @param {google.maps.MouseEvent} event The mouse event.
                           */ /**
                               * Fired when the user's mouse exits the map container. Requires the mouseEvents attribute to be true.
                               *
                               * @event google-map-mouseout
                               * @param {google.maps.MouseEvent} event The mouse event.
                               */ /**
                                   * Fired when the user's mouse enters the map container. Requires the mouseEvents attribute to be true.
                                   *
                                   * @event google-map-mouseover
                                   * @param {google.maps.MouseEvent} event The mouse event.
                                   */ /**
                                       * Fired when the DOM `contextmenu` event is fired on the map container. Requires the clickEvents
                                       * attribute to be true.
                                       *
                                       * @event google-map-rightclick
                                       * @param {google.maps.MouseEvent} event The mouse event.
                                       */ /**
                                           * Fired when the map becomes idle after panning or zooming.
                                           *
                                           * @event google-map-idle
                                           */ /**
                                               * Polymer properties for the google-map custom element.
                                               */properties:{/**
     * A Maps API key. To obtain an API key, see https://developers.google.com/maps/documentation/javascript/tutorial#api_key.
     */apiKey:String,/**
     * Overrides the origin the Maps API is loaded from. Defaults to `https://maps.googleapis.com`.
     */mapsUrl:{type:String// Initial value set in google-maps-api.
},/**
     * A Maps API for Business Client ID. To obtain a Maps API for Business Client ID, see https://developers.google.com/maps/documentation/business/.
     * If set, a Client ID will take precedence over an API Key.
     */clientId:String,/**
     * A latitude to center the map on.
     */latitude:{type:Number,value:37.77493,notify:!0,reflectToAttribute:!0},/**
     * A Maps API object.
     */map:{type:Object,notify:!0,value:null},/**
     * A longitude to center the map on.
     */longitude:{type:Number,value:-122.41942,notify:!0,reflectToAttribute:!0},/**
     * A kml file to load.
     */kml:{type:String,value:null,observer:"_loadKml"},/**
     * A zoom level to set the map to.
     */zoom:{type:Number,value:10,observer:"_zoomChanged",notify:!0},/**
     * When set, prevents the map from tilting (when the zoom level and viewport supports it).
     */noAutoTilt:{type:Boolean,value:!1},/**
     * Map type to display. One of 'roadmap', 'satellite', 'hybrid', 'terrain'.
     */mapType:{type:String,value:"roadmap",// roadmap, satellite, hybrid, terrain,
observer:"_mapTypeChanged",notify:!0},/**
     * Version of the Google Maps API to use.
     */version:{type:String,value:"3.exp"},/**
     * If set, removes the map's default UI controls.
     */disableDefaultUi:{type:Boolean,value:!1,observer:"_disableDefaultUiChanged"},/**
     * If set, removes the map's 'map type' UI controls.
     */disableMapTypeControl:{type:Boolean,value:!1,observer:"_disableMapTypeControlChanged"},/**
     * If set, removes the map's 'street view' UI controls.
     */disableStreetViewControl:{type:Boolean,value:!1,observer:"_disableStreetViewControlChanged"},/**
     * If set, the zoom level is set such that all markers (google-map-marker children) are brought into view.
     */fitToMarkers:{type:Boolean,value:!1,observer:"_fitToMarkersChanged"},/**
     * If true, prevent the user from zooming the map interactively.
     */disableZoom:{type:Boolean,value:!1,observer:"_disableZoomChanged"},/**
     * If set, custom styles can be applied to the map.
     * For style documentation see https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyle
     */styles:{type:Object,value:function value(){return{}}},/**
     * A maximum zoom level which will be displayed on the map.
     */maxZoom:{type:Number,observer:"_maxZoomChanged"},/**
     * A minimum zoom level which will be displayed on the map.
     */minZoom:{type:Number,observer:"_minZoomChanged"},/**
     * If true, sign-in is enabled.
     * See https://developers.google.com/maps/documentation/javascript/signedin#enable_sign_in
     */signedIn:{type:Boolean,value:!1},/**
     * The localized language to load the Maps API with. For more information
     * see https://developers.google.com/maps/documentation/javascript/basics#Language
     *
     * Note: the Maps API defaults to the preffered language setting of the browser.
     * Use this parameter to override that behavior.
     */language:{type:String},/**
     * When true, map *click events are automatically registered.
     */clickEvents:{type:Boolean,value:!1,observer:"_clickEventsChanged"},/**
     * When true, map bounds and center change events are automatically
     * registered.
     */boundEvents:{type:Boolean,value:!0,observer:"_boundEventsChanged"},/**
     * When true, map drag* events are automatically registered.
     */dragEvents:{type:Boolean,value:!1,observer:"_dragEventsChanged"},/**
     * When true, map mouse* events are automatically registered.
     */mouseEvents:{type:Boolean,value:!1,observer:"_mouseEventsChanged"},/**
     * Additional map options for google.maps.Map constructor.
     * Use to specify additional options we do not expose as
     * properties.
     * Ex: `<google-map additional-map-options='{"mapTypeId":"satellite"}'>`
     *
     * Note, you can't use API enums like `google.maps.ControlPosition.TOP_RIGHT`
     * when using this property as an HTML attribute. Instead, use the actual
     * value (e.g. `3`) or set `.additionalMapOptions` in JS rather than using
     * the attribute.
     */additionalMapOptions:{type:Object,value:function value(){return{}}},/**
     * The markers on the map.
     */markers:{type:Array,value:function value(){return[]},readOnly:!0},/**
     * The non-marker objects on the map.
     */objects:{type:Array,value:function value(){return[]},readOnly:!0},/**
     * If set, all other info windows on markers are closed when opening a new one.
     */singleInfoWindow:{type:Boolean,value:!1}},listeners:{"iron-resize":"resize"},observers:["_debounceUpdateCenter(latitude, longitude)"],attached:function attached(){this._initGMap()},detached:function detached(){if(this._markersChildrenListener){this.unlisten(this.$.selector,"items-changed","_updateMarkers");this._markersChildrenListener=null}if(this._objectsMutationObserver){this._objectsMutationObserver.disconnect();this._objectsMutationObserver=null}},behaviors:[_shellPage.IronResizableBehavior],_initGMap:function _initGMap(){if(this.map){return;// already initialized
}if(!0!==this.$.api.libraryLoaded){return;// api not loaded
}if(!this.isAttached){return;// not attached
}this.map=new google.maps.Map(this.$.map,this._getMapOptions());this._listeners={};this._updateCenter();this._loadKml();this._updateMarkers();this._updateObjects();this._addMapListeners();this.fire("google-map-ready")},_mapApiLoaded:function _mapApiLoaded(){this._initGMap()},_getMapOptions:function _getMapOptions(){var mapOptions={zoom:this.zoom,tilt:this.noAutoTilt?0:45,mapTypeId:this.mapType,disableDefaultUI:this.disableDefaultUi,mapTypeControl:!this.disableDefaultUi&&!this.disableMapTypeControl,streetViewControl:!this.disableDefaultUi&&!this.disableStreetViewControl,disableDoubleClickZoom:this.disableZoom,scrollwheel:!this.disableZoom,styles:this.styles,maxZoom:+this.maxZoom,minZoom:+this.minZoom};// Only override the default if set.
// We use getAttribute here because the default value of this.draggable = false even when not set.
if(null!=this.getAttribute("draggable")){mapOptions.draggable=this.draggable}for(var p in this.additionalMapOptions){mapOptions[p]=this.additionalMapOptions[p]}return mapOptions},_attachChildrenToMap:function _attachChildrenToMap(children){if(this.map){for(var i=0,child;child=children[i];++i){child.map=this.map}}},// watch for future updates to marker objects
_observeMarkers:function _observeMarkers(){// Watch for future updates.
if(this._markersChildrenListener){return}this._markersChildrenListener=this.listen(this.$.selector,"items-changed","_updateMarkers")},_updateMarkers:function _updateMarkers(){var _this3=this,newMarkers=Array.prototype.slice.call(this.$.markers.assignedNodes({flatten:!0}));// do not recompute if markers have not been added or removed
if(newMarkers.length===this.markers.length){var added=newMarkers.filter(function(m){return _this3.markers&&-1===_this3.markers.indexOf(m)});if(0===added.length){// set up observer first time around
if(!this._markersChildrenListener){this._observeMarkers()}return}}this._observeMarkers();this.markers=this._setMarkers(newMarkers);// Set the map on each marker and zoom viewport to ensure they're in view.
this._attachChildrenToMap(this.markers);if(this.fitToMarkers){this._fitToMarkersChanged()}},// watch for future updates to non-marker objects
_observeObjects:function _observeObjects(){if(this._objectsMutationObserver){return}this._objectsMutationObserver=new MutationObserver(this._updateObjects.bind(this));this._objectsMutationObserver.observe(this,{childList:!0})},_updateObjects:function _updateObjects(){var _this4=this,newObjects=Array.prototype.slice.call(this.$.objects.assignedNodes({flatten:!0}));// Do not recompute if objects have not been added or removed.
if(newObjects.length===this.objects.length){var added=newObjects.filter(function(o){return-1===_this4.objects.indexOf(o)});if(0===added.length){// Set up observer first time around.
this._observeObjects();return}}this._observeObjects();this._setObjects(newObjects);this._attachChildrenToMap(this.objects)},/**
   * Clears all markers from the map.
   *
   * @method clear
   */clear:function clear(){for(var i=0,m;m=this.markers[i];++i){m.marker.setMap(null)}},/**
   * Explicitly resizes the map, updating its center. This is useful if the
   * map does not show after you have unhidden it.
   *
   * @method resize
   */resize:function resize(){if(this.map){// saves and restores latitude/longitude because resize can move the center
var oldLatitude=this.latitude,oldLongitude=this.longitude;google.maps.event.trigger(this.map,"resize");this.latitude=oldLatitude;// restore because resize can move our center
this.longitude=oldLongitude;if(this.fitToMarkers){// we might not have a center if we are doing fit-to-markers
this._fitToMarkersChanged()}}},_loadKml:function _loadKml(){if(this.map&&this.kml){var kmlfile=new google.maps.KmlLayer({url:this.kml,map:this.map})}},_debounceUpdateCenter:function _debounceUpdateCenter(){this.debounce("updateCenter",this._updateCenter)},_updateCenter:function _updateCenter(){this.cancelDebouncer("updateCenter");if(this.map&&this.latitude!==void 0&&this.longitude!==void 0){// allow for latitude and longitude to be String-typed, but still Number valued
var lati=+this.latitude;if(isNaN(lati)){throw new TypeError("latitude must be a number")}var longi=+this.longitude;if(isNaN(longi)){throw new TypeError("longitude must be a number")}var newCenter=new google.maps.LatLng(lati,longi),oldCenter=this.map.getCenter();if(!oldCenter){// If the map does not have a center, set it right away.
this.map.setCenter(newCenter)}else{// Using google.maps.LatLng returns corrected lat/lngs.
oldCenter=new google.maps.LatLng(oldCenter.lat(),oldCenter.lng());// If the map currently has a center, slowly pan to the new one.
if(!oldCenter.equals(newCenter)){this.map.panTo(newCenter)}}}},_zoomChanged:function _zoomChanged(){if(this.map){this.map.setZoom(+this.zoom)}},_idleEvent:function _idleEvent(){if(this.map){this._forwardEvent("idle")}else{this._clearListener("idle")}},_boundEventsChanged:function _boundEventsChanged(){if(this.map){if(this.boundEvents){this._forwardEvent("center_changed");this._forwardEvent("bounds_changed")}else{this._clearListener("center_changed");this._clearListener("bounds_changed")}}},_clickEventsChanged:function _clickEventsChanged(){if(this.map){if(this.clickEvents){this._forwardEvent("click");this._forwardEvent("dblclick");this._forwardEvent("rightclick")}else{this._clearListener("click");this._clearListener("dblclick");this._clearListener("rightclick")}}},_dragEventsChanged:function _dragEventsChanged(){if(this.map){if(this.dragEvents){this._forwardEvent("drag");this._forwardEvent("dragend");this._forwardEvent("dragstart")}else{this._clearListener("drag");this._clearListener("dragend");this._clearListener("dragstart")}}},_mouseEventsChanged:function _mouseEventsChanged(){if(this.map){if(this.mouseEvents){this._forwardEvent("mousemove");this._forwardEvent("mouseout");this._forwardEvent("mouseover")}else{this._clearListener("mousemove");this._clearListener("mouseout");this._clearListener("mouseover")}}},_maxZoomChanged:function _maxZoomChanged(){if(this.map){this.map.setOptions({maxZoom:+this.maxZoom})}},_minZoomChanged:function _minZoomChanged(){if(this.map){this.map.setOptions({minZoom:+this.minZoom})}},_mapTypeChanged:function _mapTypeChanged(){if(this.map){this.map.setMapTypeId(this.mapType)}},_disableDefaultUiChanged:function _disableDefaultUiChanged(){if(!this.map){return}this.map.setOptions({disableDefaultUI:this.disableDefaultUi})},_disableMapTypeControlChanged:function _disableMapTypeControlChanged(){if(!this.map){return}this.map.setOptions({mapTypeControl:!this.disableMapTypeControl})},_disableStreetViewControlChanged:function _disableStreetViewControlChanged(){if(!this.map){return}this.map.setOptions({streetViewControl:!this.disableStreetViewControl})},_disableZoomChanged:function _disableZoomChanged(){if(!this.map){return}this.map.setOptions({disableDoubleClickZoom:this.disableZoom,scrollwheel:!this.disableZoom})},attributeChanged:function attributeChanged(attrName){if(!this.map){return}// Cannot use *Changed watchers for native properties.
switch(attrName){case"draggable":this.map.setOptions({draggable:this.draggable});break;}},_fitToMarkersChanged:function _fitToMarkersChanged(){// TODO(ericbidelman): respect user's zoom level.
if(this.map&&this.fitToMarkers&&0<this.markers.length){for(var latLngBounds=new google.maps.LatLngBounds,i=0,m;m=this.markers[i];++i){latLngBounds.extend(new google.maps.LatLng(m.latitude,m.longitude))}// For one marker, don't alter zoom, just center it.
if(1<this.markers.length){this.map.fitBounds(latLngBounds)}this.map.setCenter(latLngBounds.getCenter())}},_addMapListeners:function _addMapListeners(){var _this5=this;google.maps.event.addListener(this.map,"center_changed",function(){var center=_this5.map.getCenter();_this5.latitude=center.lat();_this5.longitude=center.lng()});google.maps.event.addListener(this.map,"zoom_changed",function(){_this5.zoom=_this5.map.getZoom()});google.maps.event.addListener(this.map,"maptypeid_changed",function(){_this5.mapType=_this5.map.getMapTypeId()});this._clickEventsChanged();this._boundEventsChanged();this._dragEventsChanged();this._mouseEventsChanged();this._idleEvent()},_clearListener:function _clearListener(name){if(this._listeners[name]){google.maps.event.removeListener(this._listeners[name]);this._listeners[name]=null}},_forwardEvent:function _forwardEvent(name){var _this6=this;this._listeners[name]=google.maps.event.addListener(this.map,name,function(event){_this6.fire("google-map-".concat(name),event)})},_deselectMarker:function _deselectMarker(e,detail){// If singleInfoWindow is set, update iron-selector's selected attribute to be null.
// Else remove the marker from iron-selector's selected array.
var markerIndex=this.$.selector.indexOf(e.target);if(this.singleInfoWindow){this.$.selector.selected=null}else if(this.$.selector.selectedValues){this.$.selector.selectedValues=this.$.selector.selectedValues.filter(function(i){return i!==markerIndex})}}});(0,_shellPage.Polymer)({_template:(0,_shellPage.html)(_templateObject3_0aa9e9e084b711e98c3fc7fd73e5d641()),is:"iron-collapse",behaviors:[_shellPage.IronResizableBehavior],properties:{/**
     * If true, the orientation is horizontal; otherwise is vertical.
     *
     * @attribute horizontal
     */horizontal:{type:Boolean,value:!1,observer:"_horizontalChanged"},/**
     * Set opened to true to show the collapse element and to false to hide it.
     *
     * @attribute opened
     */opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},/**
     * When true, the element is transitioning its opened state. When false,
     * the element has finished opening/closing.
     *
     * @attribute transitioning
     */transitioning:{type:Boolean,notify:!0,readOnly:!0},/**
     * Set noAnimation to true to disable animations.
     *
     * @attribute noAnimation
     */noAnimation:{type:Boolean},/**
     * Stores the desired size of the collapse body.
     * @private
     */_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},/**
   * `maxWidth` or `maxHeight`.
   * @private
   */get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},/**
   * `max-width` or `max-height`.
   * @private
   */get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},/**
   * Toggle the opened state.
   *
   * @method toggle
   */toggle:function toggle(){this.opened=!this.opened},show:function show(){this.opened=!0},hide:function hide(){this.opened=!1},/**
   * Updates the size of the element.
   * @param {string} size The new value for `maxWidth`/`maxHeight` as css property value, usually `auto` or `0px`.
   * @param {boolean=} animated if `true` updates the size with an animation, otherwise without.
   */updateSize:function updateSize(size,animated){// Consider 'auto' as '', to take full size.
size="auto"===size?"":size;var willAnimate=animated&&!this.noAnimation&&this.isAttached&&this._desiredSize!==size;this._desiredSize=size;this._updateTransition(!1);// If we can animate, must do some prep work.
if(willAnimate){// Animation will start at the current size.
var startSize=this._calcSize();// For `auto` we must calculate what is the final size for the animation.
// After the transition is done, _transitionEnd will set the size back to
// `auto`.
if(""===size){this.style[this._dimensionMax]="";size=this._calcSize()}// Go to startSize without animation.
this.style[this._dimensionMax]=startSize;// Force layout to ensure transition will go. Set scrollTop to itself
// so that compilers won't remove it.
this.scrollTop=this.scrollTop;// Enable animation.
this._updateTransition(!0);// If final size is the same as startSize it will not animate.
willAnimate=size!==startSize}// Set the final size.
this.style[this._dimensionMax]=size;// If it won't animate, call transitionEnd to set correct classes.
if(!willAnimate){this._transitionEnd()}},/**
   * enableTransition() is deprecated, but left over so it doesn't break
   * existing code. Please use `noAnimation` property instead.
   *
   * @method enableTransition
   * @deprecated since version 1.0.4
   */enableTransition:function enableTransition(enabled){_shellPage.Base._warn("`enableTransition()` is deprecated, use `noAnimation` instead.");this.noAnimation=!enabled},_updateTransition:function _updateTransition(enabled){this.style.transitionDuration=enabled&&!this.noAnimation?"":"0s"},_horizontalChanged:function _horizontalChanged(){this.style.transitionProperty=this._dimensionMaxCss;var otherDimension="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this.style[otherDimension]="";this.updateSize(this.opened?"auto":"0px",!1)},_openedChanged:function _openedChanged(){this.setAttribute("aria-hidden",!this.opened);this._setTransitioning(!0);this.toggleClass("iron-collapse-closed",!1);this.toggleClass("iron-collapse-opened",!1);this.updateSize(this.opened?"auto":"0px",!0);// Focus the current collapse.
if(this.opened){this.focus()}},_transitionEnd:function _transitionEnd(){this.style[this._dimensionMax]=this._desiredSize;this.toggleClass("iron-collapse-closed",!this.opened);this.toggleClass("iron-collapse-opened",this.opened);this._updateTransition(!1);this.notifyResize();this._setTransitioning(!1)},_onTransitionEnd:function _onTransitionEnd(event){if((0,_shellPage.dom)(event).rootTarget===this){this._transitionEnd()}},_calcSize:function _calcSize(){return this.getBoundingClientRect()[this.dimension]+"px"}});var template=(0,_shellPage.html)(_templateObject4_0aa9e9e084b711e98c3fc7fd73e5d641());template.setAttribute("strip-whitespace","");/**
                                               Material design: [Floating Action
                                               Button](https://www.google.com/design/spec/components/buttons-floating-action-button.html)
                                               
                                               `paper-fab` is a floating action button. It contains an image placed in the
                                               center and comes in two sizes: regular size and a smaller size by applying the
                                               attribute `mini`. When the user touches the button, a ripple effect emanates
                                               from the center of the button.
                                               
                                               You may import `iron-icons` to use with this element, or provide a URL to a
                                               custom icon. See `iron-iconset` for more information about how to use a custom
                                               icon set.
                                               
                                               Example:
                                               
                                                   <script type="module">
                                                     import '@polymer/iron-icons/iron-icons.js';
                                                   </script>
                                               
                                                   <paper-fab icon="add"></paper-fab>
                                                   <paper-fab mini icon="favorite"></paper-fab>
                                                   <paper-fab src="star.png"></paper-fab>
                                               
                                               
                                               ### Styling
                                               
                                               The following custom properties and mixins are available for styling:
                                               
                                               Custom property | Description | Default
                                               ----------------|-------------|----------
                                               `--paper-fab-background` | The background color of the button | `--accent-color`
                                               `--paper-fab-keyboard-focus-background` | The background color of the button when focused | `--paper-pink-900`
                                               `--paper-fab-disabled-background` | The background color of the button when it's disabled | `--paper-grey-300`
                                               `--paper-fab-disabled-text` | The text color of the button when it's disabled | `--paper-grey-500`
                                               `--paper-fab` | Mixin applied to the button | `{}`
                                               `--paper-fab-mini` | Mixin applied to a mini button | `{}`
                                               `--paper-fab-disabled` | Mixin applied to a disabled button | `{}`
                                               `--paper-fab-iron-icon` | Mixin applied to the iron-icon within the button | `{}`
                                               `--paper-fab-label` | Mixin applied to the label within the button | `{}`
                                               
                                               @group Paper Elements
                                               @demo demo/index.html
                                               */(0,_shellPage.Polymer)({_template:template,is:"paper-fab",behaviors:[_shellPage.PaperButtonBehavior],properties:{/**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */src:{type:String,value:""},/**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */icon:{type:String,value:""},/**
     * Set this to true to style this is a "mini" FAB.
     */mini:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * The label displayed in the badge. The label is centered, and ideally
     * should have very few characters.
     */label:{type:String,observer:"_labelChanged"}},_labelChanged:function _labelChanged(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function _computeIsIconFab(icon,src){return 0<icon.length||0<src.length}});var $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML="<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer.content);var PaperItemBehaviorImpl={hostAttributes:{role:"option",tabindex:"0"}};/** @polymerBehavior */_exports.PaperItemBehaviorImpl=PaperItemBehaviorImpl;var PaperItemBehavior=[_shellPage.IronButtonState,_shellPage.IronControlState,PaperItemBehaviorImpl];_exports.PaperItemBehavior=PaperItemBehavior;var paperItemBehavior={PaperItemBehaviorImpl:PaperItemBehaviorImpl,PaperItemBehavior:PaperItemBehavior};_exports.$paperItemBehavior=paperItemBehavior;(0,_shellPage.Polymer)({_template:(0,_shellPage.html)(_templateObject5_0aa9e9e084b711e98c3fc7fd73e5d641()),is:"paper-icon-item",behaviors:[PaperItemBehavior]});var FoldableList=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(FoldableList,_PolymerElement);babelHelpers.createClass(FoldableList,null,[{key:"properties",get:function get(){return{listItems:{type:Array}}}},{key:"template",get:function get(){return(0,_shellPage.html$1)(_templateObject6_0aa9e9e084b711e98c3fc7fd73e5d641())}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */}]);function FoldableList(){babelHelpers.classCallCheck(this,FoldableList);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(FoldableList).call(this))}/**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */babelHelpers.createClass(FoldableList,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(FoldableList.prototype),"ready",this).call(this)}},{key:"_onItemClick",value:function _onItemClick(e){var model=e.model,parent=model.parentModel,event=new CustomEvent("item-click",{bubbles:!0,composed:!0,detail:{groupIndex:parent.index,itemIndex:model.index}});this.dispatchEvent(event)}}]);return FoldableList}(_shellPage.PolymerElement);customElements.define("foldable-list",FoldableList);var APIKeys=/*#__PURE__*/function(){function APIKeys(){babelHelpers.classCallCheck(this,APIKeys)}babelHelpers.createClass(APIKeys,null,[{key:"GOOGLE_MAP",get:function get(){return"AIzaSyBBVpogIqJI7rR0qVbBE-sVpuyMH8bGaLM"}}]);return APIKeys}();_exports.APIKeys=APIKeys;var keys={APIKeys:APIKeys};_exports.$keys=keys;var BetterMapMarker=/*#__PURE__*/function(_PolymerElement2){babelHelpers.inherits(BetterMapMarker,_PolymerElement2);babelHelpers.createClass(BetterMapMarker,null,[{key:"properties",get:function get(){return{title:{type:String,value:"",reflectToAttribute:!0},smallTitle:{type:String,value:"",reflectToAttribute:!0},detailPath:{type:String,value:"",reflectToAttribute:!0},_detail:{type:String,value:""},_expand:{type:Boolean,value:!1,observer:"_onExpandChanged"},_showMoreButton:{type:Boolean,computed:"_computeShowMore(_expand, detailPath)"},_showLessButton:{type:Boolean,computed:"_computeShowLess(_expand, detailPath)"}}}},{key:"template",get:function get(){return(0,_shellPage.html$1)(_templateObject7_0aa9e9e084b711e98c3fc7fd73e5d641())}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */}]);function BetterMapMarker(){babelHelpers.classCallCheck(this,BetterMapMarker);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(BetterMapMarker).call(this))}/**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */babelHelpers.createClass(BetterMapMarker,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(BetterMapMarker.prototype),"ready",this).call(this)}},{key:"_onExpandChanged",value:function _onExpandChanged(expand){var _this7=this;if(!0===expand&&0===this._detail.length&&0!==this.detailPath.length){// fetch content
window.fetch(this.detailPath).then(function(resp){return resp.text()}).then(function(txt){_this7.set("_detail",txt)}.bind(this)).catch(function(err){console.error("Failed to fetch content from ".concat(_this7.detailPath,":"));console.error(err)}.bind(this))}}},{key:"_computeShowMore",value:function _computeShowMore(expand,detailPath){return 0!==detailPath.length&&!expand}},{key:"_computeShowLess",value:function _computeShowLess(expand,detailPath){return expand&&0!==detailPath.length}}]);return BetterMapMarker}(_shellPage.PolymerElement);customElements.define("better-map-marker",BetterMapMarker);/**
                                                              * `food-page` Page displaying foods info
                                                              *
                                                              * @customElement
                                                              * @polymer
                                                              * @demo
                                                              * 
                                                              */var FoodPage=/*#__PURE__*/function(_PolymerElement3){babelHelpers.inherits(FoodPage,_PolymerElement3);babelHelpers.createClass(FoodPage,null,[{key:"properties",get:function get(){return{_GMAP_API_KEY:{type:String,value:APIKeys.GOOGLE_MAP,readOnly:!0},_foodData:{type:Object},/**
       * Object used for displayed on list.
       */_foodDisplay:{type:Array,computed:"_computeDisplay(_foodData)"},_mapMarkers:{type:Array,computed:"_computeMarkers(_foodData)"},_dummyData:{type:Array,value:[{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key1",values:["val1","val2"]},{key:"key2",values:["val3","val4","val5"]}]}}}},{key:"template",get:function get(){return(0,_shellPage.html$1)(_templateObject8_0aa9e9e084b711e98c3fc7fd73e5d641())}/**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */}]);function FoodPage(){var _this8;babelHelpers.classCallCheck(this,FoodPage);_this8=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(FoodPage).call(this));// initialize food data
window.fetch("assets/food/catalog.json").then(function(resp){return resp.json()}).then(function(data){_this8.set("_foodData",data)}.bind(babelHelpers.assertThisInitialized(_this8))).catch(function(err){console.error("Failed to fetch food catalog:");console.error(err)});return _this8}/**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */babelHelpers.createClass(FoodPage,[{key:"ready",value:function ready(){babelHelpers.get(babelHelpers.getPrototypeOf(FoodPage.prototype),"ready",this).call(this)}},{key:"_computeFlatIndex",value:function _computeFlatIndex(groupIdx,itemIdx){for(var offset=0,i=0,group;i<groupIdx;++i){group=this._foodData[i];offset+=group.items.length}offset+=itemIdx;return offset}},{key:"_onItemClick",value:function _onItemClick(e){var map=this.$.foodMap,_e$detail=e.detail,groupIndex=_e$detail.groupIndex,itemIndex=_e$detail.itemIndex,flatIdx=this._computeFlatIndex(groupIndex,itemIndex),marker=this._mapMarkers[flatIdx],markerObj=map.markers[flatIdx];// navigate to the corresponding map marker
map.latitude=marker.latitude;map.longitude=marker.longitude;map.zoom=18;markerObj.open=!0;// close dialog if any
if(this._isSmallScreen){var dialog=this.shadowRoot.querySelector("#listDialog");dialog.close()}}},{key:"_computeDisplay",value:function _computeDisplay(foodData){var display=[],_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _loop=function _loop(){var entity=_step.value,displayItems=[];entity.items.forEach(function(item){displayItems.push(item.name)});display.push({key:entity.groupName,values:displayItems})},_iterator=foodData[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){_loop()}}catch(err){_didIteratorError=!0;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&null!=_iterator.return){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}return display}},{key:"_onOpenDialog",value:function _onOpenDialog(){var dialog=this.shadowRoot.querySelector("#listDialog");if(dialog){dialog.open()}}},{key:"_computeMarkers",value:function _computeMarkers(foodData){var markers=[],_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _iterator2=foodData[Symbol.iterator](),_step2,entity;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){entity=_step2.value;entity.items.forEach(function(item){markers.push({title:item.name,address:item.address,latitude:item.location.latitude,longitude:item.location.longitude,detailPath:item.detailPath||""})})}}catch(err){_didIteratorError2=!0;_iteratorError2=err}finally{try{if(!_iteratorNormalCompletion2&&null!=_iterator2.return){_iterator2.return()}}finally{if(_didIteratorError2){throw _iteratorError2}}}return markers}}]);return FoodPage}(_shellPage.PolymerElement);customElements.define("food-page",FoodPage)});