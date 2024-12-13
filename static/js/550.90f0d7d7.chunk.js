"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[550],{30550:(e,t,a)=>{a.r(t),a.d(t,{createArcadeExecutor:()=>T,createArcadeProfile:()=>x});var r=a(39356),n=a(46405),o=a(98264),s=a(50076),c=a(53084),l=a(16503),i=a(14902),u=a(38451),p=a(65308),f=a(77725),y=a(98976);let m=null;function d(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n=t.elementType,s="value",c="array"===n.type?[{name:s,type:n.type,elementType:n.elementType}]:"dictionary"===n.type?[{name:s,type:n.type,properties:n.properties}]:[{name:s,type:n.type}];return new o.A(e.map((e=>{const t={};return b(t,c,{[s]:e},a,r),t[s]})))}function h(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=e instanceof f.A?new u.default({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return t.constructFeatureSet(r,a.spatialReference,null,!0,a.lruCache,a.interceptor)}function g(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{spatialReference:r,interceptor:n,lruCache:o}=a;return"string"==typeof e?t.createFeatureSetCollectionFromService(e,r,o,n):t.createFeatureSetCollectionFromMap(e,r,o,n)}function v(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n={};return b(n,t.properties,e,a,r),new m.Dictionary(n)}function b(e,t,a,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const s={};for(const n of Object.keys(a))s[n.toLowerCase()]=a[n];for(const c of t){const t=c.name.toLowerCase();if(o.variablesPreProcessed)e[t]=s[t];else switch(c.type){case"array":{const a=s[t];e[t]=null==a?null:d(a,c,r,o);break}case"feature":{const a=s[t];e[t]=null==a?null:m.Feature.createFromGraphic(a,o?.timeZone);break}case"featureSet":{const a=s[t];e[t]=null==a?null:r?h(a,r,o):null;break}case"featureSetCollection":{const a=s[t];e[t]=null==a?null:r?g(a,r,o):null;break}case"dictionary":{const a=s[t];e[t]=null==a?null:v(a,c,r,o);break}case"date":{const a=s[t];e[t]=a?a instanceof n.lY?a:o?.timeZone?n.lY.dateJSAndZoneToArcadeDate(a,o?.timeZone):n.lY.dateJSToArcadeDate(a):null;break}case"dateOnly":{const a=s[t];e[t]=a?a instanceof l.n?a:l.n.fromReader(a):null;break}case"time":{const a=s[t];e[t]=a?a instanceof i.k?a:i.k.fromReader(a):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[t]=s[t]}}}function w(e,t){for(const a of e)t.push(a),"dictionary"===a.type&&w(a.properties,t);return t}function S(e,t,a,r,n){const{spatialReference:o,interceptor:s,lruCache:c,console:l,abortSignal:i,timeZone:u,services:f={portal:p.A.getDefault()}}=a,y={vars:{},spatialReference:o,interceptor:s,timeZone:u,lrucache:c,useAsync:n,services:f,console:l,abortSignal:i};return t?(b(y.vars,e.variables,t,r,a),y):y}function A(e,t){switch(t.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const t=(e.type,e),a="geometry"in t?t.geometry():null,n="readAttributes"in t?t.readAttributes():t.attributes;return new r.A({geometry:a,attributes:n})}case"dictionary":{const a=e,r=a.attributes,n={};for(const e of Object.keys(r))n[e]=A(a.field(e),t);return n}case"array":return("toArray"in e?e.toArray():e).map((e=>A(e,t)))}return e}const $={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},C={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},k=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",$],["popup-element",$],["feature-reduction-popup",C],["feature-reduction-popup-element",C],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function x(e){const t=k.get(e);if(!t){const t=Array.from(k.keys()).map((e=>`'${e}'`)).join(", ");throw new s.A("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${t}`)}return(0,c.o8)(t)}async function T(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};m||(m=await(0,y.lw)());const{arcade:r,arcadeUtils:n}=m,{loadScriptDependencies:o,referencesMember:c,scriptIsAsync:l}=r,i=w(t.variables,[]),u=i.filter((e=>"featureSet"===e.type||"featureSetCollection"===e.type)).map((e=>e.name.toLowerCase())),p=r.parseScript(e,u);if(!p)throw new s.A("arcade:invalid-script","Unable to create SyntaxTree");const f=n.extractFieldNames(p),d=r.scriptTouchesGeometry(p),h=i.map((e=>e.name.toLowerCase())).filter((e=>c(p,e))),g=l(p,u);await o(p,g,u);const v={vars:{},spatialReference:null,useAsync:g};for(const s of h)v.vars[s]="any";const{lruCache:b}=a,$=r.compileScript(p,v),C=r.featureSetUtils(),{services:k}=a;return{execute:function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(g)throw new s.A("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const r=$(S(t,e,{lruCache:b,...a},C,g));return a.rawOutput?r:A(r,n)},executeAsync:async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=await $(S(t,e,{lruCache:b,services:k,...a},C,g));return a.rawOutput?r:A(r,n)},isAsync:g,variablesUsed:h,fieldsUsed:f,geometryUsed:d,syntaxTree:p}}},98264:(e,t,a)=>{a.d(t,{A:()=>r});class r{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._elements=e}length(){return this._elements.length}get(e){return this._elements[e]}toArray(){return this.slice()}slice(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.length();const a=[];for(let r=e;r<t;r++)a.push(this.get(r));return a}}}}]);
//# sourceMappingURL=550.90f0d7d7.chunk.js.map