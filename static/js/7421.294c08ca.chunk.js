"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[7421],{17421:(n,e,t)=>{t.r(e),t.d(e,{registerFunctions:()=>p});var r=t(9861),s=t(80324),i=t(43036),a=t(76834),u=t(47164),l=t(89189),c=t(56203);function o(n){return n instanceof l.A}function f(n,e,t,f){return f(n,e,(async(f,p,d)=>{if(d.length<2)throw new r.D$(n,r.TX.WrongNumberOfParameters,e);if(null===(d=(0,i.I)(d))[0]&&null===d[1])return!1;if((0,i.u)(d[0])){if(d[1]instanceof l.A)return new a.A({parentfeatureset:d[0],relation:t,relationGeom:d[1]});if(null===d[1])return new u.A({parentfeatureset:d[0]});throw new r.D$(n,r.TX.InvalidParameter,e)}if(o(d[0])){if(o(d[1])){switch(t){case"esriSpatialRelEnvelopeIntersects":return(0,c.intersects)((0,s.Yc)(d[0]),(0,s.Yc)(d[1]));case"esriSpatialRelIntersects":return(0,c.intersects)(d[0],d[1]);case"esriSpatialRelContains":return(0,c.contains)(d[0],d[1]);case"esriSpatialRelOverlaps":return(0,c.overlaps)(d[0],d[1]);case"esriSpatialRelWithin":return(0,c.within)(d[0],d[1]);case"esriSpatialRelTouches":return(0,c.touches)(d[0],d[1]);case"esriSpatialRelCrosses":return(0,c.crosses)(d[0],d[1])}throw new r.D$(n,r.TX.InvalidParameter,e)}if((0,i.u)(d[1]))return new a.A({parentfeatureset:d[1],relation:t,relationGeom:d[0]});if(null===d[1])return!1;throw new r.D$(n,r.TX.InvalidParameter,e)}if(null!==d[0])throw new r.D$(n,r.TX.InvalidParameter,e);return(0,i.u)(d[1])?new u.A({parentfeatureset:d[1]}):!(d[1]instanceof l.A||null===d[1])&&void 0}))}function p(n){"async"===n.mode&&(n.functions.intersects=function(e,t){return f(e,t,"esriSpatialRelIntersects",n.standardFunctionAsync)},n.functions.envelopeintersects=function(e,t){return f(e,t,"esriSpatialRelEnvelopeIntersects",n.standardFunctionAsync)},n.signatures.push({name:"envelopeintersects",min:2,max:2}),n.functions.contains=function(e,t){return f(e,t,"esriSpatialRelContains",n.standardFunctionAsync)},n.functions.overlaps=function(e,t){return f(e,t,"esriSpatialRelOverlaps",n.standardFunctionAsync)},n.functions.within=function(e,t){return f(e,t,"esriSpatialRelWithin",n.standardFunctionAsync)},n.functions.touches=function(e,t){return f(e,t,"esriSpatialRelTouches",n.standardFunctionAsync)},n.functions.crosses=function(e,t){return f(e,t,"esriSpatialRelCrosses",n.standardFunctionAsync)},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,((n,s,a)=>{if(a=(0,i.I)(a),(0,i.H)(a,3,3,e,t),o(a[0])&&o(a[1]))return(0,c.relate)(a[0],a[1],(0,i.j)(a[2]));if(a[0]instanceof l.A&&null===a[1])return!1;if(a[1]instanceof l.A&&null===a[0])return!1;if((0,i.u)(a[0])&&null===a[1])return new u.A({parentfeatureset:a[0]});if((0,i.u)(a[1])&&null===a[0])return new u.A({parentfeatureset:a[1]});if((0,i.u)(a[0])&&a[1]instanceof l.A)return a[0].relate(a[1],(0,i.j)(a[2]));if((0,i.u)(a[1])&&a[0]instanceof l.A)return a[1].relate(a[0],(0,i.j)(a[2]));if(null===a[0]&&null===a[1])return!1;throw new r.D$(e,r.TX.InvalidParameter,t)}))})}}}]);
//# sourceMappingURL=7421.294c08ca.chunk.js.map