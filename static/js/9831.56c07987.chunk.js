"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[9831],{29831:(e,t,a)=>{a.d(t,{save:()=>f,saveAs:()=>v});var r=a(97924),o=a(79942),n=a(72945),i=a(79880);const s="Media Layer",l="media-layer-save",c="media-layer-save-as",u=["media-layer:unsupported-source"];function p(e){return{isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function d(e){return(0,o.m)(e,"portal-item",!0)}function m(e){return e.layerJSON}async function y(e,t){const{title:a,fullExtent:r}=e;t.title||(t.title=a),t.extent=r?await(0,n.sQ)(r):null,(0,n.OM)(t,n.mm.METADATA)}async function f(e,t){return(0,r.UN)({layer:e,itemType:s,validateLayer:p,createJSONContext:e=>d(e),createItemData:m,errorNamePrefix:l,supplementalUnsupportedErrors:u,saveResources:(t,a)=>(0,i.r)(e.resourceReferences,a)},t)}async function v(e,t,a){return(0,r.Uh)({layer:e,itemType:s,validateLayer:p,createJSONContext:e=>d(e),createItemData:m,errorNamePrefix:c,supplementalUnsupportedErrors:u,newItem:t,setItemProperties:y,saveResources:(t,a)=>(0,i.r)(e.resourceReferences,a)},a)}},97924:(e,t,a)=>{a.d(t,{UN:()=>N,Uh:()=>h});var r=a(50076),o=a(37888),n=a(65308),i=a(70652),s=a(79942),l=a(72945),c=a(65526),u=a(24907);async function p(e){const{layer:t,errorNamePrefix:a,validateLayer:o}=e;await t.load(),function(e,t,a){const o=a(e);if(!o.isValid)throw new r.A("".concat(t,":invalid-parameters"),o.errorMessage,{layer:e})}(t,a,o)}function d(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function m(e){const{item:t,errorNamePrefix:a,layer:o,validateItem:n}=e;if((0,c.X)(t),function(e){const{item:t,itemType:a,additionalItemType:o,errorNamePrefix:n,layer:i}=e,s=[a];if(o&&s.push(o),!s.includes(t.type)){const e=s.map((e=>"'".concat(e,"'"))).join(", ");throw new r.A("".concat(n,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:i})}}(e),n){const e=n(t);if(!e.isValid)throw new r.A("".concat(a,":invalid-parameters"),e.errorMessage,{layer:o})}}function y(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:o}=t;if(!o)throw new r.A("".concat(a,":portal-item-not-set"),d(t,"requires the portalItem property to be set"));if(!o.loaded)throw new r.A("".concat(a,":portal-item-not-loaded"),d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));m({...e,item:o})}function f(e){var t,a,r,o;const{newItem:s,itemType:l}=e;let c=i.default.from(s);return c.id&&(c=c.clone(),c.id=null),null!==(a=(t=c).type)&&void 0!==a||(t.type=l),null!==(o=(r=c).portal)&&void 0!==o||(r.portal=n.A.getDefault()),m({...e,item:c}),c}function v(e){return(0,s.m)(e,"portal-item")}async function w(e,t,a){var r,o;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const n=e.write({},t);return await Promise.all(null!==(r=null===(o=t.resources)||void 0===o?void 0:o.pendingOperations)&&void 0!==r?r:[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},a),n}function I(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function N(e,t){const{layer:a,createItemData:r,createJSONContext:n,saveResources:i,supplementalUnsupportedErrors:s}=e;await p(e),y(e);const l=a.portalItem,c=n?n(l):v(l),u=await w(a,c,{...t,supplementalUnsupportedErrors:s}),d=await r({layer:a,layerJSON:u},l);return I(l),await l.update({data:d}),(0,o.v)(c),await(null===i||void 0===i?void 0:i(l,c)),l}async function h(e,t){const{layer:a,createItemData:r,createJSONContext:n,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await p(e);const c=f(e),u=n?n(c):v(c),d=await w(a,u,{...t,supplementalUnsupportedErrors:l}),m=await r({layer:a,layerJSON:d},c);return await i(a,c),I(c),await async function(e,t,a){var r;const o=e.portal;await o.signIn(),await(null===(r=o.user)||void 0===r?void 0:r.addItem({item:e,data:t,folder:null===a||void 0===a?void 0:a.folder}))}(c,m,t),a.portalItem=c,(0,o.v)(u),await(null===s||void 0===s?void 0:s(c,u)),c}}}]);
//# sourceMappingURL=9831.56c07987.chunk.js.map