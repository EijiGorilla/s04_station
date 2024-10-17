"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[2487],{77491:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(67061);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},11668:(e,a,t)=>{t.d(a,{K:()=>d,Q:()=>s});var r=t(67061);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function s(e,a){var t;const{loadContext:n,...s}=a||{},l=n?await n.fetchServiceMetadata(e,s):await(0,r.V)(e,s);y(l),i(l);const c={serviceJSON:l};if((null!==(t=l.currentVersion)&&void 0!==t?t:0)<10.5)return c;const o="".concat(e,"/layers"),u=n?await n.fetchServiceMetadata(o,s):await(0,r.V)(o,s);return y(u),i(u),c.layersJSON={layers:u.layers,tables:u.tables},c}function l(e){const{type:a}=e;return!!a&&n.has(a)}function c(e){return"Table"===e.type}function i(e){var a,t;e.layers=null===(a=e.layers)||void 0===a?void 0:a.filter(l),e.tables=null===(t=e.tables)||void 0===t?void 0:t.filter(c)}function o(e){e.type||(e.type="Feature Layer")}function u(e){e.type||(e.type="Table")}function y(e){var a,t;null!==(a=e.layers)&&void 0!==a&&a.forEach(o),null===(t=e.tables)||void 0===t||t.forEach(u)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},64130:(e,a,t)=>{t.d(a,{Ju:()=>o,K8:()=>d,XH:()=>u,_r:()=>s,bO:()=>l,iK:()=>y,nu:()=>v,pJ:()=>c,rc:()=>i});var r=t(39323),n=t(11668);function s(e){const a={id:e.id,name:e.name},t=(0,n.K)(e.type);return"FeatureLayer"!==t&&(a.layerType=t),a}async function l(e,a,t){var r,n;if(null==(null===(r=e)||void 0===r?void 0:r.layers)||null==(null===(n=e)||void 0===n?void 0:n.tables)){var l,i,o;const r=await t.fetchServiceMetadata(a,{customParameters:null===(l=c(e))||void 0===l?void 0:l.customParameters});(e=e||{}).layers=e.layers||(null===r||void 0===r||null===(i=r.layers)||void 0===i?void 0:i.map(s)),e.tables=e.tables||(null===r||void 0===r||null===(o=r.tables)||void 0===o?void 0:o.map(s))}return e}function c(e){if(!e)return null;const{layers:a,tables:t}=e;return null!==a&&void 0!==a&&a.length?a[0]:null!==t&&void 0!==t&&t.length?t[0]:null}function i(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}function o(e,a){return[...e.layers||[],...e.tables||[]].filter((e=>{let{layerType:t}=e;return t?t===a:"ArcGISFeatureLayer"===a}))}function u(e){var a,t,r,n;return(null!==(a=null===e||void 0===e||null===(t=e.layers)||void 0===t?void 0:t.length)&&void 0!==a?a:0)+(null!==(r=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==r?r:0)}function y(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function d(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function v(e,a,t){var n,l,i;if(null===e||void 0===e||!e.url)return null!==(n=a)&&void 0!==n?n:{};if(null!==(l=a)&&void 0!==l||(a={}),!a.layers){var o;const r=await t.fetchServiceMetadata(e.url);a.layers=null===(o=r.layers)||void 0===o?void 0:o.map(s)}const{serverUrl:u,portalItem:y}=await(0,r.L)(e.url,{sceneLayerItem:e,customParameters:null===(i=c(a))||void 0===i?void 0:i.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==u)return a.tables=[],a;if(!a.tables&&y){const e=await y.fetchData();if(null!==e&&void 0!==e&&e.tables)a.tables=e.tables.map(s);else{var d,v;const r=await t.fetchServiceMetadata(u,{customParameters:null===(d=c(e))||void 0===d?void 0:d.customParameters});a.tables=null===r||void 0===r||null===(v=r.tables)||void 0===v?void 0:v.map(s)}}if(a.tables)for(const r of a.tables)r.url="".concat(u,"/").concat(r.id);return a}},2487:(e,a,t)=>{t.d(a,{fromItem:()=>d,n:()=>v});var r=t(50076),n=t(39323),s=t(11668),l=t(77491),c=t(31933),i=t(62487),o=t(70652),u=t(64130),y=t(72945);async function d(e){let{portalItem:a}=e;!a||a instanceof o.default||(a=new o.default(a));const t=await async function(e){await e.load();const a=new l.v;return async function(e){const a=e.className,t=i.S[a];return{constructor:await t(),properties:e.properties}}(await v(e,a))}(a);return new(0,t.constructor)({portalItem:a,...t.properties})}async function v(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,y.Y)(e,"Map Notes"),t=(0,y.Y)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,y.Y)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,u.XH)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await m(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){var t,r,n,s;await e.load();const l=null!==(t=null===(r=e.typeKeywords)||void 0===r?void 0:r.map((e=>e.toLowerCase())))&&void 0!==t?t:[];if(l.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(l.includes("tiled imagery"))return{className:"ImageryTileLayer"};const c=await a.fetchItemData(e),i=null===c||void 0===c?void 0:c.layerType;if("ArcGISTiledImageServiceLayer"===i)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===i)return{className:"ImageryLayer"};const o=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),u=null===(n=o.cacheType)||void 0===n?void 0:n.toLowerCase(),y=null===(s=o.capabilities)||void 0===s?void 0:s.toLowerCase().includes("tilesonly");return"map"===u||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await m(e,a,(async()=>{try{var t;if(!e.url)return[];const{serverUrl:r}=await(0,n.L)(e.url,{sceneLayerItem:e}),s=await a.fetchServiceMetadata(r);return null!==(t=null===s||void 0===s?void 0:s.tables)&&void 0!==t?t:[]}catch{return[]}}));if("object"==typeof t){var r;const n={};let s;if(null!=t.id?(n.layerId=t.id,s="".concat(e.url,"/layers/").concat(t.id)):s=e.url,null!==(r=e.typeKeywords)&&void 0!==r&&r.length)for(const a of Object.keys(c.XX))if(e.typeKeywords.includes(a))return{className:c.XX[a]};const l=await a.fetchServiceMetadata(s,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,u.pJ)(e))||void 0===a?void 0:a.customParameters}))});return{className:c.XX[null===l||void 0===l?void 0:l.layerType]||"SceneLayer",properties:n}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===(null===t||void 0===t?void 0:t.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function m(e,a,t){const{url:r,type:n}=e,l="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(l){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,u.pJ)(e))||void 0===a?void 0:a.customParameters}))});return{id:t.id,className:(0,s.K)(t.type),sourceJSON:t}}return{}}await e.load();let c=await a.fetchItemData(e);if(l){const e=await(0,u.bO)(c,r,a),t=f(e);if("object"==typeof t){const a=(0,u.rc)(e,t.id);t.className=(0,u.K8)(null===a||void 0===a?void 0:a.layerType)}return t}if("Scene Service"===n&&(c=await(0,u.nu)(e,c,a)),(0,u.XH)(c)>0)return f(c);const i=await a.fetchServiceMetadata(r);return t&&(i.tables=await t()),f(i)}function f(e){var a;return 1===(0,u.XH)(e)&&{id:null===(a=(0,u.pJ)(e))||void 0===a?void 0:a.id}}},67061:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(3825);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return t}}}]);
//# sourceMappingURL=2487.ff257886.chunk.js.map