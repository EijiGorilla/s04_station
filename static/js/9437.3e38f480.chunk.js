"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[9437],{69437:(e,t,o)=>{o.r(t),o.d(t,{executeRelationshipQuery:()=>f,executeRelationshipQueryForCount:()=>y});var n=o(54994),r=o(3825),a=o(80963),s=o(78238);function u(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),!o.outFields||null!==t&&void 0!==t&&t.returnCountOnly?delete o.outFields:o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","),o.outSR&&(o.outSR=(0,a.YX)(o.outSR)),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function c(e,t,o){const n=await d(e,t,o),r=n.data,a=r.geometryType,s=r.spatialReference,u={};for(const c of r.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:s,hasZ:!!r.hasZ,hasM:!!r.hasM,features:c.relatedRecords};if(null!=c.objectId)u[c.objectId]=e;else for(const t of Object.keys(c))"relatedRecords"!==t&&(u[c[t]]=e)}return{...n,data:u}}async function d(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3?arguments[3]:void 0;const a=(0,s.z)({...e.query,f:"json",...n,...u(t,n)});return(0,r.A)(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...a}})}var i=o(77725),l=o(58289);async function f(e,t,o){t=l.default.from(t);return c((0,n.Dl)(e),t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=i.A.fromJSON(t[e]))),o}))}async function y(e,t,o){t=l.default.from(t);return async function(e,t,o){const n=await d(e,t,o,{returnCountOnly:!0}),r=n.data,a={};for(const s of r.relatedRecordGroups)null!=s.objectId&&(a[s.objectId]=s.count);return{...n,data:a}}((0,n.Dl)(e),t,{...o}).then((e=>e.data))}}}]);
//# sourceMappingURL=9437.3e38f480.chunk.js.map