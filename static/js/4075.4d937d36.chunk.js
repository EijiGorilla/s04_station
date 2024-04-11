"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[4075],{64075:(e,t,r)=>{r.r(t),r.d(t,{registerFunctions:()=>k});var n=r(86560),o=(r(35238),r(26043)),i=r(67253),a=r(9861),s=r(43036),l=r(45018),u=r(89189),p=r(9624),c=r(45417),d=r(65308),f=r(70652),h=r(71334),y=r(9505),v=r(35380),w=r(38156),g=r(68325),m=r(23908),A=r(70414),G=r(13312);let S=null;async function _(e,t){const n=new f.default({portal:e,id:t});return await n.load(),null===S&&(S=await r.e(3576).then(r.bind(r,3576))),await S.fetchKnowledgeGraph(n.url)}function R(e,t,r,n,o){if(null===e)return null;if((0,s.c)(e)||(0,s.b)(e))return e;if((0,s.k)(e))return e.toJSDate();if((0,s.k)(e))return e.toJSDate();if((0,s.m)(e))return e.toStorageFormat();if((0,s.n)(e))return e.toStorageString();if((0,s.v)(e)){const i={};for(const a of e.keys())i[a]=R(e.field(a),t,r,n,o),i[a]instanceof u.A&&o.push({container:i,indexer:a});return i}if((0,s.o)(e)){const i=e.map((e=>R(e,t,r,n,o)));for(let e=0;e<i.length;e++)i[e]instanceof u.A&&o.push({container:i,indexer:e});return i}if((0,s.p)(e)){if(e.spatialReference.isWGS84)return e;if(e.spatialReference.isWebMercator&&t)return(0,c.ci)(e);if(!t||!r)return e;throw new a.D$(n,a.TX.WrongSpatialReference,null)}}function b(e,t){if(!e)return null;const r={};for(const n in e)r[n]=x(e[n],t);return r}function x(e,t){var r,n;return null===e?null:(0,s.o)(e)?e.map((e=>x(e,t))):e instanceof y.A?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:b(e.properties,t)}:e instanceof w.A?{graphType:"object",properties:b(e.properties,t)}:e instanceof m.A?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:null!==(r=e.originId)&&void 0!==r?r:null,destinationId:null!==(n=e.destinationId)&&void 0!==n?n:null,properties:b(e.properties,t)}:e instanceof g.A?{graphType:"path",path:e.path?e.path.map((e=>x(e,t))):null}:(0,s.p)(e)?function(e,t){if(!e)return e;if(e.spatialReference.isWGS84&&t.spatialReference.isWebMercator)return(0,c.Gh)(e);if(e.spatialReference.equals(t.spatialReference))return e;throw new a.D$(t,a.TX.WrongSpatialReference,null)}(e,t):(0,s.c)(e)||(0,s.b)(e)||(0,s.a7)(e)?e:null}function k(e){"async"===e.mode&&(e.functions.knowledgegraphbyportalitem=function(t,r){return e.standardFunctionAsync(t,r,((e,n,i)=>{var u,p;if((0,s.H)(i,2,2,t,r),null===i[0])throw new a.D$(t,a.TX.PortalRequired,r);if(i[0]instanceof o.A){var c;const e=(0,s.j)(i[1]);let r=null;return r=null!==(c=t.services)&&void 0!==c&&c.portal?t.services.portal:d.A.getDefault(),_((0,l.R)(i[0],r),e)}if(!1===(0,s.c)(i[0]))throw new a.D$(t,a.TX.InvalidParameter,r);const f=(0,s.j)(i[0]);return _(null!==(u=null===(p=t.services)||void 0===p?void 0:p.portal)&&void 0!==u?u:d.A.getDefault(),f)}))},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(t,o){return e.standardFunctionAsync(t,o,(async(e,l,u)=>{var c,d;(0,s.H)(u,2,4,t,o);const f=u[0];if(!(0,s.w)(f))throw new a.D$(t,a.TX.InvalidParameter,o);const y=u[1];if(!(0,s.c)(y))throw new a.D$(t,a.TX.InvalidParameter,o);null===S&&(S=await r.e(3576).then(r.bind(r,3576)));let w=null;const g=(0,s.K)(u[2],null);if(!(g instanceof i.A||null===g))throw new a.D$(t,a.TX.InvalidParameter,o);if(g){let e=[];w=R(g,!0,!1,t,e),e=e.filter((e=>!e.container[e.indexer].spatialReference.isWGS84)),e.length>0&&await async function(e){var t;const r=null!==(t=n.A.geometryServiceUrl)&&void 0!==t?t:"";if(!r){(0,p.isLoaded)()||await(0,p.load)();for(const t of e)t.container[t.indexer]=(0,p.project)(t.container[t.indexer],G.A.WGS84);return}const o=e.map((e=>e.container[e.indexer])),i=new A.A({geometries:o,outSpatialReference:G.A.WGS84}),a=await(0,h.C)(r,i);for(let n=0;n<a.length;n++){const t=e[n];t.container[t.indexer]=a[n]}}(e)}const m=new v.A({openCypherQuery:y,bindParameters:w});(null!==(c=null===f||void 0===f||null===(d=f.serviceDefinition)||void 0===d?void 0:d.currentVersion)&&void 0!==c?c:11.3)>11.2&&(m.outputSpatialReference=t.spatialReference);const _=(await S.executeQueryStreaming(f,m)).resultRowsStream.getReader(),b=[];try{for(;;){const{done:e,value:r}=await _.read();if(e)break;if((0,s.o)(r))for(const n of r)b.push(x(n,t));else{const e=[];for(const n of r)e.push(x(r[n],t));b.push(e)}}}catch(k){throw k}return i.A.convertJsonToArcade(b,(0,s.N)(t),!1,!0)}))},e.signatures.push({name:"querygraph",min:2,max:4}))}},45018:(e,t,r)=>{r.d(t,{R:()=>o});var n=r(65308);function o(e,t){return null===e?t:new n.A({url:e.field("url")})}},9505:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(35143),o=(r(35238),r(46053)),i=(r(81806),r(76460),r(47249),r(85842)),a=r(27544),s=r(13904);let l=class extends a.A{constructor(e){super(e),this.layoutGeometry=null}};(0,n._)([(0,o.MZ)({type:s.A,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.Entity")],l);const u=l},27544:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(85842)),a=r(12831);let s=class extends a.A{constructor(e){super(e),this.typeName=null,this.id=null}};(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],s.prototype,"typeName",void 0),(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],s.prototype,"id",void 0),s=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.GraphNamedObject")],s);const l=s},12831:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(35143),o=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842));let s=class extends o.oY{constructor(e){super(e),this.properties=null}};(0,n._)([(0,i.MZ)({json:{write:!0}})],s.prototype,"properties",void 0),s=(0,n._)([(0,a.$)("esri.rest.knowledgeGraph.GraphObject")],s);const l=s},35380:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(35143),o=r(46053),i=(r(81806),r(76460),r(47249),r(85842)),a=r(91967);let s=class extends a.A{constructor(e){super(e),this.openCypherQuery=""}};(0,n._)([(0,o.MZ)()],s.prototype,"openCypherQuery",void 0),s=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.GraphQuery")],s);const l=s;let u=class extends l{constructor(e){super(e),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null}};(0,n._)([(0,o.MZ)()],u.prototype,"bindParameters",void 0),(0,n._)([(0,o.MZ)()],u.prototype,"bindGeometryQuantizationParameters",void 0),(0,n._)([(0,o.MZ)()],u.prototype,"outputQuantizationParameters",void 0),(0,n._)([(0,o.MZ)()],u.prototype,"outputSpatialReference",void 0),u=(0,n._)([(0,i.$)("esri.rest.knowledgeGraph.GraphQueryStreaming")],u);const p=u},38156:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(35143),o=(r(76460),r(81806),r(47249),r(50076),r(85842)),i=r(12831);let a=class extends i.A{constructor(e){super(e)}};a=(0,n._)([(0,o.$)("esri.rest.knowledgeGraph.ObjectValue")],a);const s=a},68325:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(35143),o=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),s=r(12831);let l=class extends o.oY{constructor(e){super(e),this.path=null}};(0,n._)([(0,i.MZ)({type:[s.A],json:{write:!0}})],l.prototype,"path",void 0),l=(0,n._)([(0,a.$)("esri.rest.knowledgeGraph.Path")],l);const u=l},23908:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(35143),o=(r(35238),r(46053)),i=(r(81806),r(76460),r(47249),r(85842)),a=r(27544),s=r(23701);let l=class extends a.A{constructor(e){super(e),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],l.prototype,"originId",void 0),(0,n._)([(0,o.MZ)({type:String,json:{write:!0}})],l.prototype,"destinationId",void 0),(0,n._)([(0,o.MZ)({type:s.A,json:{write:!0}})],l.prototype,"layoutGeometry",void 0),l=(0,n._)([(0,i.$)("esri.rest.Relationship.Relationship")],l);const u=l}}]);
//# sourceMappingURL=4075.4d937d36.chunk.js.map