"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[3832],{3832:(e,t,i)=>{i.r(t),i.d(t,{default:()=>H});var o=i(35143),r=i(50076),n=i(53084),s=i(48611),a=i(46053),p=(i(81806),i(76460),i(85842)),l=i(38451),y=i(78817),c=i(45802),u=i(69098),d=i(42553),f=(i(47249),i(91967)),h=i(80963);let m=class extends f.A{set horizontalWKID(e){e?(0,h.fn)({wkid:+e})?this._set("horizontalWKID",+e):this._set("horizontalWKID",e):this._set("horizontalWKID",null)}set verticalWKID(e){e?this._set("verticalWKID",isFinite(e)&&(0,h.fn)({wkid:+e})?+e:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:e,focalLength:t,principalOffsetPoint:i,radialDistortionCoefficients:o,tangentialDistortionCoefficients:r}=this;return e?.length>1&&!Number.isNaN(t)&&i?.length>1&&o?.length>1&&r?.length>1}};(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"affineTransformations",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"focalLength",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"principalOffsetPoint",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"radialDistortionCoefficients",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"tangentialDistortionCoefficients",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"horizontalWKID",null),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"verticalWKID",null),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"x",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"y",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"z",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],m.prototype,"type",void 0),m=(0,o._)([(0,p.$)("esri.layers.orientedImagery.core.CameraOrientation")],m);const v=m;let g=class extends((0,u.O)((0,d.Te)(v))){constructor(){super(...arguments),this.type=1}toString(){const{type:e,horizontalWKID:t,verticalWKID:i,x:o,y:r,z:n,heading:s,pitch:a,roll:p,affineTransformations:l,focalLength:y,principalOffsetPoint:c,radialDistortionCoefficients:u,tangentialDistortionCoefficients:d}=this,f=[e,t,i,o,r,n,s,a,p];return this.isAdvanced&&(l?.forEach((e=>f.push(e))),f.push(y),c?.forEach((e=>f.push(e))),u?.forEach((e=>f.push(e))),d?.forEach((e=>f.push(e)))),f.map((e=>Number.isNaN(e)?"":e)).join("|")}};(0,o._)([(0,a.MZ)({json:{write:!0}})],g.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],g.prototype,"affineTransformations",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],g.prototype,"focalLength",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],g.prototype,"principalOffsetPoint",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],g.prototype,"radialDistortionCoefficients",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],g.prototype,"tangentialDistortionCoefficients",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],g.prototype,"heading",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],g.prototype,"pitch",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],g.prototype,"roll",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],g.prototype,"x",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],g.prototype,"y",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],g.prototype,"z",void 0),g=(0,o._)([(0,p.$)("esri.layers.orientedImagery.core.CameraOrientationHPR")],g);const _=g;let w=class extends((0,u.O)((0,d.Te)(v))){constructor(){super(...arguments),this.type=4}toString(){const{type:e,latitude:t,longitude:i,ellipsoidRadius:o,squaredEccentricity:r,properties:n}=this,s=`${n}`.split("|");return s.splice(1,1),`${e}|${t}|${i}|${o}|${r}|${s.join("|")}`}};(0,o._)([(0,a.MZ)({json:{write:!0}})],w.prototype,"type",void 0),(0,o._)([(0,a.MZ)({json:{write:!0},type:Number})],w.prototype,"latitude",void 0),(0,o._)([(0,a.MZ)({json:{write:!0},type:Number})],w.prototype,"longitude",void 0),(0,o._)([(0,a.MZ)({json:{write:!0},type:Number})],w.prototype,"ellipsoidRadius",void 0),(0,o._)([(0,a.MZ)({json:{write:!0},type:Number})],w.prototype,"squaredEccentricity",void 0),(0,o._)([(0,a.MZ)({json:{write:!0}})],w.prototype,"properties",void 0),w=(0,o._)([(0,p.$)("esri.layers.orientedImagery.core.CameraOrientationLTP")],w);const M=w;let j=class extends((0,u.O)((0,d.Te)(v))){constructor(){super(...arguments),this.type=2}toString(){const{type:e,horizontalWKID:t,verticalWKID:i,x:o,y:r,z:n,omega:s,phi:a,kappa:p,affineTransformations:l,focalLength:y,principalOffsetPoint:c,radialDistortionCoefficients:u,tangentialDistortionCoefficients:d}=this,f=[e,t,i,o,r,n,s,a,p];return this.isAdvanced&&(l?.forEach((e=>f.push(e))),f.push(y),c?.forEach((e=>f.push(e))),u?.forEach((e=>f.push(e))),d?.forEach((e=>f.push(e)))),f.map((e=>isNaN(e)?"":e)).join("|")}};(0,o._)([(0,a.MZ)({json:{write:!0}})],j.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],j.prototype,"affineTransformations",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],j.prototype,"focalLength",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],j.prototype,"principalOffsetPoint",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],j.prototype,"radialDistortionCoefficients",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],j.prototype,"tangentialDistortionCoefficients",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],j.prototype,"omega",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],j.prototype,"phi",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],j.prototype,"kappa",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],j.prototype,"x",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],j.prototype,"y",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],j.prototype,"z",void 0),j=(0,o._)([(0,p.$)("esri.layers.orientedImagery.core.CameraOrientationOPK")],j);const P=j;let Z=class extends((0,u.O)((0,d.Te)(v))){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:e,focalLength:t,principalOffsetPoint:i,radialDistortionCoefficients:o,tangentialDistortionCoefficients:r}=this;return e?.length>1||!Number.isNaN(t)||i?.length>1||o?.length>1||r?.length>1}toString(){const{type:e,horizontalWKID:t,verticalWKID:i,x:o,y:r,z:n,yaw:s,pitch:a,roll:p,affineTransformations:l,focalLength:y,principalOffsetPoint:c,radialDistortionCoefficients:u,tangentialDistortionCoefficients:d}=this,f=[e,t,i,o,r,n,s,a,p];return this.isAdvanced&&(l?.forEach((e=>f.push(e))),f.push(y),c?.forEach((e=>f.push(e))),c?.forEach((e=>f.push(e))),u?.forEach((e=>f.push(e))),d?.forEach((e=>f.push(e)))),f.map((e=>Number.isNaN(e)?"":e)).join("|")}};(0,o._)([(0,a.MZ)({json:{write:!0}})],Z.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],Z.prototype,"affineTransformations",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],Z.prototype,"focalLength",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],Z.prototype,"principalOffsetPoint",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],Z.prototype,"radialDistortionCoefficients",void 0),(0,o._)([(0,a.MZ)({type:[Number],json:{write:!0}})],Z.prototype,"tangentialDistortionCoefficients",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],Z.prototype,"yaw",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],Z.prototype,"pitch",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],Z.prototype,"roll",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],Z.prototype,"x",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],Z.prototype,"y",void 0),(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],Z.prototype,"z",void 0),Z=(0,o._)([(0,p.$)("esri.layers.orientedImagery.core.CameraOrientationYPR")],Z);const b=Z;var N;!function(e){e[e.HPR=1]="HPR",e[e.OPK=2]="OPK",e[e.YPR=3]="YPR",e[e.LTP=4]="LTP"}(N||(N={}));const x=new Map;x.set(`${N.OPK}`,{desc:"Using Omega Phi Kappa",constructor:P}),x.set(`${N.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:_}),x.set(`${N.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:b}),x.set(`${N.LTP}`,{desc:"Using Local Tangent Plane",constructor:M});i(67061);let D=class extends((0,u.O)(d.oY)){constructor(){super(...arguments),this.url=null}};(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],D.prototype,"lod",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],D.prototype,"rasterFunction",void 0),(0,o._)([(0,a.MZ)({type:String,json:{write:!0}})],D.prototype,"url",void 0),D=(0,o._)([(0,p.$)("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],D);let S=class extends((0,u.O)(d.oY)){constructor(){super(...arguments),this.constantElevation=null}};(0,o._)([(0,a.MZ)({type:Number,json:{write:!0}})],S.prototype,"constantElevation",void 0),S=(0,o._)([(0,p.$)("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")],S);function I(e,t,i){return e?(e=>null!=e&&"number"==typeof e.constantElevation)(e)?new S(e):function(e,t,i){let{url:o}=e;return o?(o=function(e,t,i){return t&&(e=`${t}${e}`),i&&(e+=`${i}`),e}(o,t,i),new D({...e,url:o})):null}(e,t,i):e}const O=new c.J({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),T=new c.J({Feet:"feet",Meter:"meter"}),z=new c.J({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),E=new Map;E.set(`${N.HPR}`,(function(e){const[t,i,o,r,n,s,a,p,l,y,c,u,d,f,h,m,v,g,_,w,M,j]=e.slice(1);return{horizontalWKID:t,verticalWKID:i,x:o,y:r,z:n,heading:s,pitch:a,roll:p,...K([l,y,c,u,d,f],[m,v],[g,_,w],[M,j],h)}})),E.set(`${N.YPR}`,(function(e){const[t,i,o,r,n,s,a,p,l,y,c,u,d,f,h,m,v,g,_,w,M,j]=e.slice(1);return{horizontalWKID:t,verticalWKID:i,x:o,y:r,z:n,yaw:s,pitch:a,roll:p,...K([l,y,c,u,d,f],[m,v],[g,_,w],[M,j],h)}})),E.set(`${N.OPK}`,(function(e){const[t,i,o,r,n,s,a,p,l,y,c,u,d,f,h,m,v,g,_,w,M,j]=e.slice(1);return{horizontalWKID:t,verticalWKID:i,x:o,y:r,z:n,omega:s,phi:a,kappa:p,...K([l,y,c,u,d,f],[m,v],[g,_,w],[M,j],h)}})),E.set(`${N.LTP}`,(function(e){const[t,i,o,r,n,...s]=e.slice(1),a=E.get(n),p=x.get(n)?.constructor;return a&&p?{latitude:t,longitude:i,ellipsoidRadius:o,squaredEccentricity:r,properties:new p(a([n,"",...s]))}:null}));const C=e=>{const t=e.map((e=>parseFloat(e))).filter((e=>!isNaN(e)));if(t.length===e.length)return t};function K(e,t,i,o,r){const n=C(e),s=C(t),a=C(i),p=C(o);return{affineTransformations:6===n?.length?n:void 0,focalLength:6===n?.length?parseFloat(r):void 0,principalOffsetPoint:2!==s?.length?[0,0]:s,radialDistortionCoefficients:3!==a?.length?[0,0,0]:a,tangentialDistortionCoefficients:2!==p?.length?[0,0]:p}}var $=i(59187),L=i(61701);const W=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),R=(e,t)=>!W.has(t)&&e;function A(e,t,i,o){const{name:r,write:n,read:s}=((e,t,i)=>{const o=`orientedImageryProperties.${e}`;return{name:o,write:t?{ignoreOrigin:!0,target:o,writer:t}:{ignoreOrigin:!0},read:i?{ignoreOrigin:!0,source:o,reader:i}:{ignoreOrigin:!0}}})(e,t,i),a={name:r,write:n,read:s,origins:{service:{name:`orientedImageryInfo.${r}`,write:t,read:i},"web-scene":{name:r,write:R(n,e),read:R(s,e)},"web-map":{name:r,write:n,read:s}}};return o&&a.origins?(a.type=o,a.origins["web-map"].type=o,a.origins["web-scene"].type=o,a):a}let V=class extends l.default{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:e,demPathPrefix:t,demPathSuffix:i}=this;return I(e,t,i)}async save(e){return this._debouncedSaveOperations(L.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(L.X.SAVE_AS,t,e)}findFirstValidLayerId(e){return e.layers?.find((e=>this.supportedSourceTypes.has(e.type)))?.id}_verifySource(){if(super._verifySource(),"point"!==this.geometryType)throw new r.A("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};var U;(0,o._)([(0,a.MZ)({type:Number,json:A("cameraHeading")})],V.prototype,"cameraHeading",void 0),(0,o._)([(0,a.MZ)({type:Number,json:A("cameraHeight")})],V.prototype,"cameraHeight",void 0),(0,o._)([(0,a.MZ)({type:Number,json:A("cameraPitch")})],V.prototype,"cameraPitch",void 0),(0,o._)([(0,a.MZ)({type:Number,json:A("cameraRoll")})],V.prototype,"cameraRoll",void 0),(0,o._)([(0,a.MZ)({type:Number,json:A("coveragePercent")})],V.prototype,"coveragePercent",void 0),(0,o._)([(0,a.MZ)({type:String,json:A("demPathPrefix")})],V.prototype,"demPathPrefix",void 0),(0,o._)([(0,a.MZ)({type:String,json:A("demPathSuffix")})],V.prototype,"demPathSuffix",void 0),(0,o._)([(0,a.MZ)({type:String,json:A("depthImagePathPrefix")})],V.prototype,"depthImagePathPrefix",void 0),(0,o._)([(0,a.MZ)({type:String,json:A("depthImagePathSuffix")})],V.prototype,"depthImagePathSuffix",void 0),(0,o._)([(0,a.MZ)({type:Object,json:A("elevationSource")})],V.prototype,"elevationSource",void 0),(0,o._)([(0,a.MZ)({readOnly:!0})],V.prototype,"effectiveElevationSource",null),(0,o._)([(0,a.MZ)({type:Number,json:A("farDistance")})],V.prototype,"farDistance",void 0),(0,o._)([(0,a.MZ)()],V.prototype,"geometryType",void 0),(0,o._)([(0,a.MZ)({type:Number,json:A("horizontalFieldOfView")})],V.prototype,"horizontalFieldOfView",void 0),(0,o._)([(0,a.MZ)({type:String,json:A("horizontalMeasurementUnit")})],V.prototype,"horizontalMeasurementUnit",void 0),(0,o._)([(0,a.MZ)({type:String,json:A("imagePathPrefix")})],V.prototype,"imagePathPrefix",void 0),(0,o._)([(0,a.MZ)({type:String,json:A("imagePathSuffix")})],V.prototype,"imagePathSuffix",void 0),(0,o._)([(0,a.MZ)({type:Number,json:A("imageRotation")})],V.prototype,"imageRotation",void 0),(0,o._)([(0,a.MZ)({type:Number,json:A("maximumDistance")})],V.prototype,"maximumDistance",void 0),(0,o._)([(0,a.MZ)({type:Number,json:A("nearDistance")})],V.prototype,"nearDistance",void 0),(0,o._)([(0,a.MZ)({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],V.prototype,"operationalLayerType",void 0),(0,o._)([(0,a.MZ)({json:{...A("orientationAccuracy",((e,t,i)=>{(0,s.sM)(i,e.join(";"),t)}),(e=>{const t=e?.split(";")?.map(Number);return function(e){return Array.isArray(e)&&9===e?.length&&!e.some(isNaN)}(t)?t:[0,0,0,0,0,0,0,0,0]}),String)}})],V.prototype,"orientationAccuracy",void 0),(0,o._)([(0,a.MZ)({json:{...A("orientedImageryType",z.write,z.read,z.jsonValues.slice(1))}})],V.prototype,"orientedImageryType",void 0),(0,o._)([(0,a.MZ)({json:{read:!1},value:"oriented-imagery",readOnly:!0})],V.prototype,"type",void 0),(0,o._)([(0,a.MZ)({type:O.apiValues,json:{...A("timeIntervalUnit",O.write,O.read,O.jsonValues)}})],V.prototype,"timeIntervalUnit",void 0),(0,o._)([(0,a.MZ)((U=(0,n.o8)(y.B),U.json?(U.json.origins=U.json.origins??{},U.json.origins["web-scene"]={write:!1,read:!1},U):U))],V.prototype,"useViewTime",void 0),(0,o._)([(0,a.MZ)({type:Number,json:A("verticalFieldOfView")})],V.prototype,"verticalFieldOfView",void 0),(0,o._)([(0,a.MZ)({type:T.apiValues,json:{...A("verticalMeasurementUnit",T.write,T.read,T.jsonValues)}})],V.prototype,"verticalMeasurementUnit",void 0),(0,o._)([(0,a.MZ)({type:String,json:A("videoPathPrefix")})],V.prototype,"videoPathPrefix",void 0),(0,o._)([(0,a.MZ)({type:String,json:A("videoPathSuffix")})],V.prototype,"videoPathSuffix",void 0),(0,o._)([(0,a.MZ)({type:$.A,json:{origins:{"web-scene":{write:!1,read:!1}}}})],V.prototype,"visibilityTimeExtent",void 0),V=(0,o._)([(0,p.$)("esri.layers.OrientedImageryLayer")],V);const H=V},67061:(e,t,i)=>{i.d(t,{V:()=>r});var o=i(3825);async function r(e,t){const{data:i}=await(0,o.A)(e,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return i}}}]);
//# sourceMappingURL=3832.7c8956c0.chunk.js.map