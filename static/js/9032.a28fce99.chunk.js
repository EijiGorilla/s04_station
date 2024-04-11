/*! For license information please see 9032.a28fce99.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[9032],{49032:(e,t,i)=>{i.r(t),i.d(t,{CalciteFlowItem:()=>oe,defineCustomElement:()=>ne});var a=i(82108),o=i(39879),n=i(65079),s=i(76527),l=i(62785),c=i(76988),r=i(6676),d=i(9185),h=i(27882),g=i(48897),p=i(67294),b=i(26964),m=i(53794),u=i(43901);const f="action-bar-container",v="container",k="header",C="header-container",w="header-container--border-end",x="heading",y="description",S="header-content",E="header-actions",F="header-actions--end",H="header-actions--start",z="content-wrapper",A="fab-container",P="footer",B="x",L="ellipsis",I="chevron-down",M="chevron-up",O="action-bar",D="header-actions-start",T="header-actions-end",_="header-menu-actions",R="header-content",N="fab",K="footer",j="footer-actions",W=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=(0,a.lh)(this,"calcitePanelClose",6),this.calcitePanelToggle=(0,a.lh)(this,"calcitePanelToggle",6),this.calcitePanelScroll=(0,a.lh)(this,"calcitePanelScroll",6),this.resizeObserver=(0,r.c)("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"===typeof e.scrollHeight&&"number"===typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=(0,o.d)(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=(0,o.d)(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=(0,o.d)(e)},this.handleActionBarSlotChange=e=>{const t=(0,o.s)(e).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=(0,o.d)(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=(0,o.d)(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=(0,o.d)(e)},this.handleFabSlotChange=e=>{this.hasFab=(0,o.d)(e)},this.setPanelScrollEl=e=>{var t,i;(this.panelScrollEl=e,null===(t=this.resizeObserver)||void 0===t||t.disconnect(),e)&&(null===(i=this.resizeObserver)||void 0===i||i.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){(0,n.c)(this),(0,l.c)(this),(0,c.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,c.s)(this)}componentDidLoad(){(0,s.a)(this)}componentDidRender(){(0,n.u)(this)}disconnectedCallback(){var e;(0,n.d)(this),(0,l.d)(this),(0,c.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this),(0,o.f)(this.containerEl)}async scrollContentTo(e){var t;null===(t=this.panelScrollEl)||void 0===t||t.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:i,hasHeaderContent:o}=this,n=e?(0,a.h)(h.H,{class:x,level:t},e):null,s=i?(0,a.h)("span",{class:y},i):null;return o||!n&&!s?null:(0,a.h)("div",{class:S,key:"header-content"},n,s)}renderActionBar(){return(0,a.h)("div",{class:f,hidden:!this.hasActionBar},(0,a.h)("slot",{name:O,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return(0,a.h)("div",{class:S,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,a.h)("slot",{name:R,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,a.h)("div",{class:{[H]:!0,[E]:!0},hidden:!e,key:"header-actions-start"},(0,a.h)("slot",{name:D,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:i,collapsed:n,collapseDirection:s,collapsible:l,hasMenuItems:c}=this,{collapse:r,expand:d,close:h}=t,g=[I,M];"up"===s&&g.reverse();const p=l?(0,a.h)("calcite-action",{"aria-expanded":(0,o.t)(!n),"aria-label":r,"data-test":"collapse",icon:n?g[0]:g[1],onClick:this.collapse,text:r,title:n?d:r}):null,b=i?(0,a.h)("calcite-action",{"aria-label":h,"data-test":"close",icon:B,onClick:this.close,text:h,title:h}):null,m=(0,a.h)("slot",{name:T,onSlotchange:this.handleHeaderActionsEndSlotChange}),u=e||p||b||c;return(0,a.h)("div",{class:{[F]:!0,[E]:!0},hidden:!u,key:"header-actions-end"},m,this.renderMenu(),p,b)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:i}=this;return(0,a.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:i,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},(0,a.h)("calcite-action",{icon:L,slot:d.S.trigger,text:t.options}),(0,a.h)("slot",{name:_,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:i,closable:o,collapsible:n,hasMenuItems:s,hasActionBar:l}=this,c=this.renderHeaderContent(),r=e||!!c||t||i||n||o||s;return this.showHeaderContent=r,(0,a.h)("header",{class:k,hidden:!(r||l)},(0,a.h)("div",{class:{[C]:!0,[w]:l},hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),c,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,i=e||t;return(0,a.h)("footer",{class:P,hidden:!i},(0,a.h)("slot",{key:"footer-slot",name:K,onSlotchange:this.handleFooterSlotChange}),(0,a.h)("slot",{key:"footer-actions-slot",name:j,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return(0,a.h)("div",{class:z,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,a.h)("slot",null),this.renderFab())}renderFab(){return(0,a.h)("div",{class:A,hidden:!this.hasFab},(0,a.h)("slot",{name:N,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:t,panelKeyDownHandler:i,closed:s,closable:l}=this,c=(0,a.h)("article",{"aria-busy":(0,o.t)(t),class:v,hidden:s,onKeyDown:i,tabIndex:l?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return(0,a.h)(n.I,{disabled:e},t?(0,a.h)("calcite-scrim",{loading:t}):null,c)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-color-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function $(){if("undefined"===typeof customElements)return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,W);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,p.d)();break;case"calcite-loader":customElements.get(e)||(0,b.d)();break;case"calcite-popover":customElements.get(e)||(0,m.d)();break;case"calcite-scrim":customElements.get(e)||(0,u.d)()}}))}$();const q="back-button",G="chevron-left",J="chevron-right",Q="action-bar",U="header-actions-start",V="header-actions-end",X="header-menu-actions",Y="header-content",Z="fab",ee="footer",te="footer-actions",ie=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=(0,a.lh)(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=(0,a.lh)(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=(0,a.lh)(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=(0,a.lh)(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,n.c)(this),(0,l.c)(this),(0,c.c)(this)}async componentWillLoad(){await(0,c.s)(this),(0,s.s)(this)}componentDidRender(){(0,n.u)(this)}disconnectedCallback(){(0,n.d)(this),(0,l.d)(this),(0,c.d)(this)}componentDidLoad(){(0,s.a)(this)}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this);const{backButtonEl:e,containerEl:t}=this;return e?e.setFocus():t?t.setFocus():void 0}async scrollContentTo(e){var t;await(null===(t=this.containerEl)||void 0===t?void 0:t.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t="rtl"===(0,o.a)(e),{showBackButton:i,backButtonClick:n,messages:s}=this,l=s.back,c=t?J:G;return i?(0,a.h)("calcite-action",{"aria-label":l,class:q,icon:c,key:"flow-back-button",onClick:n,scale:"s",slot:"header-actions-start",text:l,title:l,ref:this.setBackRef}):null}render(){const{collapsed:e,collapseDirection:t,collapsible:i,closable:o,closed:s,description:l,disabled:c,heading:r,headingLevel:d,loading:h,menuOpen:g,messages:p,overlayPositioning:b}=this;return(0,a.h)(a.xr,null,(0,a.h)(n.I,{disabled:c},(0,a.h)("calcite-panel",{closable:o,closed:s,collapseDirection:t,collapsed:e,collapsible:i,description:l,disabled:c,heading:r,headingLevel:d,loading:h,menuOpen:g,messageOverrides:p,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:b,ref:this.setContainerRef},this.renderBackButton(),(0,a.h)("slot",{name:Q,slot:O}),(0,a.h)("slot",{name:U,slot:D}),(0,a.h)("slot",{name:V,slot:T}),(0,a.h)("slot",{name:Y,slot:R}),(0,a.h)("slot",{name:X,slot:_}),(0,a.h)("slot",{name:Z,slot:N}),(0,a.h)("slot",{name:te,slot:j}),(0,a.h)("slot",{name:ee,slot:K}),(0,a.h)("slot",null))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function ae(){if("undefined"===typeof customElements)return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,ie);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,p.d)();break;case"calcite-loader":customElements.get(e)||(0,b.d)();break;case"calcite-panel":customElements.get(e)||$();break;case"calcite-popover":customElements.get(e)||(0,m.d)();break;case"calcite-scrim":customElements.get(e)||(0,u.d)()}}))}ae();const oe=ie,ne=ae}}]);
//# sourceMappingURL=9032.a28fce99.chunk.js.map