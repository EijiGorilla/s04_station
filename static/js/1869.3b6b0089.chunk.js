"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[1869],{90975:(e,o,t)=>{t.d(o,{A:()=>v});var r,l=t(35143),i=t(53084),n=t(46053),s=(t(81806),t(76460),t(6409)),a=t(85842),p=t(120),u=t(71006),d=t(69539),c=t(42553),f=t(40565);let y=r=class extends c.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.o8)(this.color)})}};(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,l._)([(0,n.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),(0,l._)([(0,n.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),(0,l._)([(0,n.MZ)({type:d.A,json:{type:[f.jz],write:!0}})],y.prototype,"color",void 0),y=r=(0,l._)([(0,a.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);const h=y;var b;let m=b=class extends p.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new b({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.o8)(this.colorClassBreakInfos),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,l._)([(0,s.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],m.prototype,"type",void 0),(0,l._)([(0,n.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,l._)([(0,n.MZ)({type:u.q,json:{write:!0}})],m.prototype,"legendOptions",void 0),(0,l._)([(0,n.MZ)({type:p.A.fieldTransformTypeKebabDict.apiValues,json:{type:p.A.fieldTransformTypeKebabDict.jsonValues,read:p.A.fieldTransformTypeKebabDict.read,write:p.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,l._)([(0,n.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorClassBreakInfos",void 0),m=b=(0,l._)([(0,a.$)("esri.renderers.PointCloudClassBreaksRenderer")],m);const v=m},120:(e,o,t)=>{t.d(o,{A:()=>V});var r,l=t(35143),i=t(45802),n=t(42553),s=t(53084),a=t(46053),p=(t(81806),t(76460),t(85842));t(47249);let u=r=class extends n.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,l._)([(0,a.MZ)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,l._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"minValue",void 0),(0,l._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"maxValue",void 0),u=r=(0,l._)([(0,p.$)("esri.renderers.support.pointCloud.ColorModulation")],u);const d=u,c=new i.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let f=class extends n.oY{};(0,l._)([(0,a.MZ)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],f.prototype,"type",void 0),f=(0,l._)([(0,p.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],f);const y=f;var h,b=t(6409);let m=h=class extends y{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,l._)([(0,b.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),(0,l._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),(0,l._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=h=(0,l._)([(0,p.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);const v=m;var w;let g=w=class extends y{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new w({scaleFactor:this.scaleFactor})}};(0,l._)([(0,b.e)({pointCloudSplatAlgorithm:"splat"})],g.prototype,"type",void 0),(0,l._)([(0,a.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],g.prototype,"scaleFactor",void 0),g=w=(0,l._)([(0,p.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],g);const T={key:"type",base:y,typeMap:{"fixed-size":v,splat:g}},M=(0,i.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let _=class extends n.oY{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,s.o8)(this.pointSizeAlgorithm),colorModulation:(0,s.o8)(this.colorModulation),pointsPerInch:(0,s.o8)(this.pointsPerInch)}}};(0,l._)([(0,a.MZ)({type:M.apiValues,readOnly:!0,nonNullable:!0,json:{type:M.jsonValues,read:!1,write:M.write}})],_.prototype,"type",void 0),(0,l._)([(0,a.MZ)({types:T,json:{write:!0}})],_.prototype,"pointSizeAlgorithm",void 0),(0,l._)([(0,a.MZ)({type:d,json:{write:!0}})],_.prototype,"colorModulation",void 0),(0,l._)([(0,a.MZ)({json:{write:!0},nonNullable:!0,type:Number})],_.prototype,"pointsPerInch",void 0),_=(0,l._)([(0,p.$)("esri.renderers.PointCloudRenderer")],_),(_||(_={})).fieldTransformTypeKebabDict=new i.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const V=_},42600:(e,o,t)=>{t.d(o,{A:()=>f});var r,l=t(35143),i=t(53084),n=t(46053),s=(t(81806),t(76460),t(6409)),a=t(85842),p=t(120),u=t(71006),d=t(77718);let c=r=class extends p.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,i.o8)(this.field),fieldTransformType:(0,i.o8)(this.fieldTransformType),stops:(0,i.o8)(this.stops),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,l._)([(0,s.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,l._)([(0,n.MZ)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,l._)([(0,n.MZ)({type:u.q,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,l._)([(0,n.MZ)({type:p.A.fieldTransformTypeKebabDict.apiValues,json:{type:p.A.fieldTransformTypeKebabDict.jsonValues,read:p.A.fieldTransformTypeKebabDict.read,write:p.A.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,l._)([(0,n.MZ)({type:[d.A],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,l._)([(0,a.$)("esri.renderers.PointCloudStretchRenderer")],c);const f=c},64724:(e,o,t)=>{t.d(o,{A:()=>v});var r,l=t(35143),i=t(53084),n=t(46053),s=(t(81806),t(76460),t(6409)),a=t(85842),p=t(120),u=t(71006),d=t(69539),c=t(42553),f=t(40565);let y=r=class extends c.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,i.o8)(this.values),color:(0,i.o8)(this.color)})}};(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,l._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,l._)([(0,n.MZ)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),(0,l._)([(0,n.MZ)({type:d.A,json:{type:[f.jz],write:!0}})],y.prototype,"color",void 0),y=r=(0,l._)([(0,a.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const h=y;var b;let m=b=class extends p.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new b({...this.cloneProperties(),field:(0,i.o8)(this.field),fieldTransformType:(0,i.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,i.o8)(this.colorUniqueValueInfos),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,l._)([(0,s.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],m.prototype,"type",void 0),(0,l._)([(0,n.MZ)({json:{write:!0},type:String})],m.prototype,"field",void 0),(0,l._)([(0,n.MZ)({type:p.A.fieldTransformTypeKebabDict.apiValues,json:{type:p.A.fieldTransformTypeKebabDict.jsonValues,read:p.A.fieldTransformTypeKebabDict.read,write:p.A.fieldTransformTypeKebabDict.write}})],m.prototype,"fieldTransformType",void 0),(0,l._)([(0,n.MZ)({type:[h],json:{write:!0}})],m.prototype,"colorUniqueValueInfos",void 0),(0,l._)([(0,n.MZ)({type:u.q,json:{write:!0}})],m.prototype,"legendOptions",void 0),m=b=(0,l._)([(0,a.$)("esri.renderers.PointCloudUniqueValueRenderer")],m);const v=m},71869:(e,o,t)=>{t.d(o,{$i:()=>c,GY:()=>d,RC:()=>p,bh:()=>a,jy:()=>u});t(81806);var r=t(90975),l=t(42600),i=t(64724),n=t(62562),s=t(87041);function a(e,o,t,n){var s;const{rendererJSON:a,isRGBRenderer:p}=e;let u=null,d=null;if(o&&p)u=o;else if(o&&"pointCloudUniqueValueRenderer"===(null===a||void 0===a?void 0:a.type)){d=i.A.fromJSON(a);const e=d.colorUniqueValueInfos;u=new Uint8Array(3*n);const t=f(d.fieldTransformType);for(let r=0;r<n;r++){const l=(t?t(o[r]):o[r])+"";for(let o=0;o<e.length;o++)if(e[o].values.includes(l)){u[3*r]=e[o].color.r,u[3*r+1]=e[o].color.g,u[3*r+2]=e[o].color.b;break}}}else if(o&&"pointCloudStretchRenderer"===(null===a||void 0===a?void 0:a.type)){d=l.A.fromJSON(a);const e=d.stops;u=new Uint8Array(3*n);const t=f(d.fieldTransformType);for(let r=0;r<n;r++){const l=t?t(o[r]):o[r],i=e.length-1;if(l<e[0].value)u[3*r]=e[0].color.r,u[3*r+1]=e[0].color.g,u[3*r+2]=e[0].color.b;else if(l>=e[i].value)u[3*r]=e[i].color.r,u[3*r+1]=e[i].color.g,u[3*r+2]=e[i].color.b;else for(let o=1;o<e.length;o++)if(l<e[o].value){const t=(l-e[o-1].value)/(e[o].value-e[o-1].value);u[3*r]=e[o].color.r*t+e[o-1].color.r*(1-t),u[3*r+1]=e[o].color.g*t+e[o-1].color.g*(1-t),u[3*r+2]=e[o].color.b*t+e[o-1].color.b*(1-t);break}}}else if(o&&"pointCloudClassBreaksRenderer"===(null===a||void 0===a?void 0:a.type)){d=r.A.fromJSON(a);const e=d.colorClassBreakInfos;u=new Uint8Array(3*n);const t=f(d.fieldTransformType);for(let r=0;r<n;r++){const l=t?t(o[r]):o[r];for(let o=0;o<e.length;o++)if(l>=e[o].minValue&&l<=e[o].maxValue){u[3*r]=e[o].color.r,u[3*r+1]=e[o].color.g,u[3*r+2]=e[o].color.b;break}}}else u=new Uint8Array(3*n).fill(255);if(t&&null!==(s=d)&&void 0!==s&&s.colorModulation){const e=d.colorModulation.minValue,o=d.colorModulation.maxValue,r=.3;for(let l=0;l<n;l++){const i=t[l],n=i>=o?1:i<=e?r:r+(1-r)*(i-e)/(o-e);u[3*l]=n*u[3*l],u[3*l+1]=n*u[3*l+1],u[3*l+2]=n*u[3*l+2]}}return u}function p(e,o){if(null==e.encoding||""===e.encoding){const t=(0,n.wH)(o,e);if(null==t.vertexAttributes.position)return;const r=(0,n.MA)(o,t.vertexAttributes.position),l=t.header.fields,i=[l.offsetX,l.offsetY,l.offsetZ],s=[l.scaleX,l.scaleY,l.scaleZ],a=r.length/3,p=new Float64Array(3*a);for(let e=0;e<a;e++)p[3*e]=r[3*e]*s[0]+i[0],p[3*e+1]=r[3*e+1]*s[1]+i[1],p[3*e+2]=r[3*e+2]*s[2]+i[2];return p}if("lepcc-xyz"===e.encoding)return(0,s.Me)(o).result}function u(e,o,t){return null!==e&&void 0!==e&&e.attributeInfo.useElevation?o?d(o,t):null:null!==e&&void 0!==e&&e.attributeInfo.storageInfo?(0,n.m0)(e.attributeInfo.storageInfo,e.buffer,t):null}function d(e,o){const t=new Float64Array(o);for(let r=0;r<o;r++)t[r]=e[3*r+2];return t}function c(e,o,t,r,l){const i=e.length/3;let n=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<r.length&&i;e++){const{filterJSON:o}=r[e],t=l[e].values[s];switch(o.type){case"pointCloudValueFilter":{const e="exclude"===o.mode;o.values.includes(t)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=y(o.requiredSetBits),r=y(o.requiredClearBits);(t&e)===e&&0==(t&r)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&t,r=t>>>4&15,l=r>1,n=1===e,s=e===r;let a=!1;for(const t of o.includedReturns)if("last"===t&&s||"firstOfMany"===t&&n&&l||"lastOfMany"===t&&s&&l||"single"===t&&!l){a=!0;break}a||(i=!1);break}}}i&&(t[n]=s,e[3*n]=e[3*s],e[3*n+1]=e[3*s+1],e[3*n+2]=e[3*s+2],o[3*n]=o[3*s],o[3*n+1]=o[3*s+1],o[3*n+2]=o[3*s+2],n++)}return n}function f(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function y(e){let o=0;for(const t of e||[])o|=1<<t;return o}}}]);
//# sourceMappingURL=1869.3b6b0089.chunk.js.map