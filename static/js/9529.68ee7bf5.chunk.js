"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[9529],{95085:(e,t,n)=>{n.d(t,{A:()=>h});var r=n(35143),i=n(91967),s=n(18690),l=n(69098),o=n(5632),a=n(42553),u=n(46053),d=(n(81806),n(76460),n(85842));let c=0,p=class extends((0,a.Te)((0,l.O)((0,o.sA)(i.A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":case"viewshed":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(s.Ru)}};(0,r._)([(0,u.MZ)({type:String,constructOnly:!0,clonable:!1})],p.prototype,"id",void 0),(0,r._)([(0,u.MZ)({type:String})],p.prototype,"title",void 0),(0,r._)([(0,u.MZ)({clonable:!1,value:null})],p.prototype,"parent",null),(0,r._)([(0,u.MZ)({readOnly:!0})],p.prototype,"isEditable",null),p=(0,r._)([(0,d.$)("esri.analysis.Analysis")],p);const h=p},32864:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(35143),i=(n(35238),n(42251)),s=n(69098),l=n(73582),o=n(42553),a=n(30726),u=n(46053),d=n(21403),c=(n(47249),n(81806),n(85842)),p=n(40565),h=n(19247);let y=class extends((0,o.Te)(s.P)){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return null!=this.observer&&this.farDistance>0}equals(e){return(0,a.CM)(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&(0,i.xH)(this.feature,e.feature)}};(0,r._)([(0,u.MZ)({type:h.A,json:{write:!0}})],y.prototype,"observer",void 0),(0,r._)([(0,u.MZ)({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],y.prototype,"farDistance",void 0),(0,r._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,d.w)((e=>l.ie.normalize((0,p.GB)(e),void 0,!0)))],y.prototype,"heading",void 0),(0,r._)([(0,u.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],y.prototype,"tilt",void 0),(0,r._)([(0,u.MZ)({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],y.prototype,"horizontalFieldOfView",void 0),(0,r._)([(0,u.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],y.prototype,"verticalFieldOfView",void 0),(0,r._)([(0,u.MZ)(i.N1)],y.prototype,"feature",void 0),(0,r._)([(0,u.MZ)({json:{read:!1}})],y.prototype,"isValid",null),y=(0,r._)([(0,c.$)("esri.analysis.Viewshed")],y);const w=y},42251:(e,t,n)=>{n.d(t,{N1:()=>d,uY:()=>c,wY:()=>u,xH:()=>a});var r=n(20664),i=n(9392),s=n(95925),l=n(3112),o=n(30310);function a(e,t){return u(e)===u(t)}function u(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let n=null;return n=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==n?null:`o-${t}-${n}`}const d={json:{write:{writer:function(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};function c(e,t,n,a){const{sceneIntersectionHelper:d}=e,{observer:c,observerFeatureId:h,targetFeatureId:v,target:f}=n;if(null==h&&null==v)return;a||(a=e=>e),(0,r.a)(w,c,f);const b=(0,r.l)(w);(0,r.b)(w,c,w,1/b);const g=(0,s.Cr)(w,f,y);t.options.store=l.oH.ALL,d.intersectToolIntersectorRay(g,t);let m=null,_=null,M=null,x=null;for(const r of t.results.all){const t=(0,o.Gy)(r,e);if(null==t||null==r.distanceInRenderSpace)continue;const n=u(t);null!=n&&(null!=h&&n===h&&(m??=a(p(r,e,b)),r.distanceInRenderSpace-1<m&&(M=r)),null!=v&&n===v&&(_??=a(p(r,e,b)),null==x&&r.distanceInRenderSpace-1<b&&b-r.distanceInRenderSpace+1<_&&(x=r)))}const{observerAdjusted:j,targetAdjusted:I}=n;M?.getIntersectionPoint(j)?n.observerSurfaceNormal=M.getTransformedNormal((0,i.vt)()):n.observerSurfaceNormal=null,x?.getIntersectionPoint(I)?n.targetSurfaceNormal=x.getTransformedNormal((0,i.vt)()):n.targetSurfaceNormal=null}function p(e,t,n){if((0,o.QS)(e)){const r=(0,o.SM)(e,t);if(null!=r)return Math.min(r*h,n)}return 1e-5*n}const h=.05,y=(0,s.vt)(),w=(0,i.vt)()},29529:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(35143),i=n(32864),s=(n(35238),n(95085)),l=n(19276),o=n(3975),a=n(73582),u=n(15941),d=n(68134),c=n(46053),p=(n(81806),n(76460),n(47249),n(85842)),h=n(9624),y=n(76797);const w=l.A.ofType(i.A);let v=class extends s.A{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles((0,d.wB)((()=>this._computeExtent()),(e=>{null==e.pending&&(this._extent=e.extent)}),d.pc))}get viewsheds(){return this._get("viewsheds")||new w}set viewsheds(e){this._set("viewsheds",(0,o.V)(e,this.viewsheds,w))}get spatialReference(){for(const e of this.viewsheds)if(null!=e.observer)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map((e=>{let{observer:t}=e;return t}))}async waitComputeExtent(){const e=this._computeExtent();null!=e.pending&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(null==e)return{pending:null,extent:null};const t=this.viewsheds.filter((e=>null!=e.observer)),n=t.map((e=>e.observer)).toArray(),r=(0,h.projectOrLoadMany)(n,e);return null!=r.pending?{pending:r.pending,extent:null}:{pending:null,extent:r.geometries.map(((e,n)=>{const r=t.at(n);return null!=e&&null!=r?this._computeViewshedExtent(this.viewsheds.at(n),e):null})).filter((e=>null!=e)).reduce(((e,t)=>function(e,t){return null==e?t:null==t?e:e.union(t)}(e,t)),null)}}_computeViewshedExtent(e,t){const{farDistance:n,heading:r,tilt:i,horizontalFieldOfView:s,verticalFieldOfView:l}=e,{spatialReference:o}=t,d=s/2,c=l/2,p=n/o.metersPerUnit,h=[a.ie.normalize(r-d),r,a.ie.normalize(r+d)],w=y.A.fromPoint(t),v=e=>{const t=h.map((t=>a.ie.normalize(t-e)));if(t[0]>t[2]||360===s)return p;const n=t.map((e=>Math.abs(e>180?360-e:e))).reduce(((e,t)=>e>t?t:e));return n>90?0:p*Math.cos((0,u.kU)(n))};w.xmax+=v(90),w.xmin-=v(-90),w.ymax+=v(0),w.ymin-=v(180);const g=t.z;if(null!=g){let e=g,t=g;const r=i-90,s=(0,u.qE)(r+c,-90,90),l=(0,u.qE)(r-c,-90,90),a=o?.isGeographic?n:p;e+=a*b(s),t+=a*b(l);const h=f(c)*a,y=b(r)*h*(1-f(d));i<90&&(e-=y),i>90&&(t-=y),w.zmax=Math.max(e,g),w.zmin=Math.min(t,g)}return w}clear(){this.viewsheds.removeAll()}};function f(e){return Math.cos((0,u.kU)(e))}function b(e){return Math.sin((0,u.kU)(e))}(0,r._)([(0,c.MZ)({type:["viewshed"]})],v.prototype,"type",void 0),(0,r._)([(0,c.MZ)({cast:o.H,type:w,nonNullable:!0})],v.prototype,"viewsheds",null),(0,r._)([(0,c.MZ)({readOnly:!0})],v.prototype,"spatialReference",null),(0,r._)([(0,c.MZ)()],v.prototype,"_extent",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],v.prototype,"extent",null),(0,r._)([(0,c.MZ)({readOnly:!0})],v.prototype,"requiredPropertiesForEditing",null),v=(0,r._)([(0,p.$)("esri.analysis.ViewshedAnalysis")],v);const g=v;var m=n(77717),_=n(17707),M=n(25515),x=n(11270);let j=class extends((0,x.q)((0,m.P)(M.A))){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new g,this.opacity=1}initialize(){this.addHandles((0,d.wB)((()=>this.source),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),d.pc))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new g)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,t,n,r){t.viewsheds=e.filter((e=>e.isValid())).map((e=>e.toJSON(r))).toJSON()}};(0,r._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],j.prototype,"type",void 0),(0,r._)([(0,c.MZ)({type:["ViewshedLayer"]})],j.prototype,"operationalLayerType",void 0),(0,r._)([(0,c.MZ)({nonNullable:!0})],j.prototype,"source",void 0),(0,r._)([(0,c.MZ)({readOnly:!0})],j.prototype,"spatialReference",null),(0,r._)([(0,c.MZ)({readOnly:!0})],j.prototype,"fullExtent",null),(0,r._)([(0,c.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],j.prototype,"opacity",void 0),(0,r._)([(0,c.MZ)({type:["show","hide"]})],j.prototype,"listMode",void 0),(0,r._)([(0,c.MZ)({type:l.A.ofType(i.A),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],j.prototype,"viewsheds",null),(0,r._)([(0,_.K)("web-scene","viewsheds")],j.prototype,"writeViewsheds",null),j=(0,r._)([(0,p.$)("esri.layers.ViewshedLayer")],j);const I=j}}]);
//# sourceMappingURL=9529.68ee7bf5.chunk.js.map