"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[9078,2229],{57045:(e,t,a)=>{a.d(t,{Bq:()=>l,Qp:()=>o,WN:()=>v,dK:()=>A,eN:()=>y,fH:()=>g,in:()=>f,yr:()=>u});var r=a(3825),s=a(18690),n=a(50346),i=a(19463);class o{constructor(e,t,a){this.assetName=e,this.assetMimeType=t,this.parts=a}equals(e){return this===e||this.assetName===e.assetName&&this.assetMimeType===e.assetMimeType&&(0,s.aI)(this.parts,e.parts,((e,t)=>e.equals(t)))}isOnService(e){return this.parts.every((t=>t.isOnService(e)))}makeHash(){let e="";for(const t of this.parts)e+=t.partHash;return e}async toBlob(e){const{parts:t}=this;if(1===t.length)return t[0].toBlob(e);const a=await Promise.all(t.map((t=>t.toBlob(e))));return(0,n.Te)(e),new Blob(a)}}class l{constructor(e,t){this.partUrl=e,this.partHash=t}equals(e){return this===e||this.partUrl===e.partUrl&&this.partHash===e.partHash}isOnService(e){return this.partUrl.startsWith("".concat(e.path,"/assets/"))}async toBlob(e){const{data:t}=await(0,r.A)(this.partUrl,{responseType:"blob"});return(0,n.Te)(e),t}}function u(e){return function(e){if(!e)return!1;if(Array.isArray(e))return e.some(h);return h(e)}(null===e||void 0===e?void 0:e.source)}function d(e){return!!Array.isArray(e)&&e.every((e=>e instanceof o))}const c=/^(model\/gltf\+json)|(model\/gltf-binary)$/,p=/\.(gltf|glb)/i;function h(e){if(e instanceof File){const{type:t,name:a}=e;return c.test(t)||p.test(a)}return c.test(e.assetMimeType)||p.test(e.assetName)}function y(e,t){if(!e)return!1;const{source:a}=e;return function(e,t){if(Array.isArray(e)){const a=e;return a.length>0&&a.every((e=>m(e,t)))}return m(e,t)}(a,t)}function f(e,t){if(e===t)return!0;const{source:a}=e,{source:r}=t;if(a===r)return!0;if(d(a)&&d(r)){if(a.length!==r.length)return!1;const e=(e,t)=>e.assetName<t.assetName?-1:e.assetName>t.assetName?1:0,t=[...a].sort(e),s=[...r].sort(e);for(let a=0;a<t.length;++a)if(!t[a].equals(s[a]))return!1;return!0}return!1}function m(e,t){return e instanceof o&&e.isOnService(t)}function g(e,t){var a;return e instanceof File?(0,i.rq)(e,t):null!==(a=(0,i.R_)(e.assetMimeType,t))&&void 0!==a?a:(0,i.E1)(e.assetName,t)}function v(e){return Array.isArray(e)?e:[e]}function A(e){return!!e.original}},8298:(e,t,a)=>{a.d(t,{F:()=>r});const r={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},54610:(e,t,a)=>{a.d(t,{applyEdits:()=>F,r3:()=>A,uploadAssets:()=>T,zp:()=>w});var r=a(39356),s=a(19276),n=a(50076),i=a(53084),o=a(76460),l=a(50346),u=a(90534),d=a(49723),c=a(1438),p=a(80963),h=a(61979),y=a(53430),f=a(19463),m=a(31933);function g(e){return null!=(null===e||void 0===e?void 0:e.applyEdits)}function v(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function A(e){return e.every(v)}function b(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function w(e){return e.every(b)}async function F(e,t,a){var r;let u,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const p="gdbVersion"in e?e.gdbVersion:null,y=null!==(r=c.gdbVersion)&&void 0!==r?r:p;if((0,h.Mk)(e)&&e.url)u=(0,h.Zk)(e.url,e.layerId,y,"original-and-current-features"===c.returnServiceEditsOption);else{u=(0,l.Tw)(),u.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:u.promise};e.emit("apply-edits",t)}try{var v;const{results:r,edits:l}=await async function(e,t,a,r){var i,l,u,c,p,h;if(await e.load(),!g(t))throw new n.A("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!(0,m.tk)(e))throw new n.A("".concat(e.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:e});const{edits:y,options:v}=await async function(e,t,a){const r=(0,m.BR)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=null!=e.infoFor3D;if(function(e,t,a,r,s,i){if(!e||!r&&!s)throw new n.A("".concat(i,":missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&null!==a&&void 0!==a&&a.globalIdUsed)throw new n.A("".concat(i,":invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&s)throw new n.A("".concat(i,":invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((null===a||void 0===a||!a.globalIdUsed)&&s)throw new n.A("".concat(i,":invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,r,a,!!i,!!l,"".concat(e.type,"-layer")),!r.data.isVersioned&&null!==a&&void 0!==a&&a.gdbVersion)throw new n.A("".concat(e.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!r.editing.supportsRollbackOnFailure&&null!==a&&void 0!==a&&a.rollbackOnFailureEnabled)throw new n.A("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const c={...a};if(null!=c.rollbackOnFailureEnabled||r.editing.supportsRollbackOnFailure||(c.rollbackOnFailureEnabled=!0),c.rollbackOnFailureEnabled||"original-and-current-features"!==c.returnServiceEditsOption||(!1===c.rollbackOnFailureEnabled&&o.A.getLogger("esri.layers.graphics.editingSupport").warn("".concat(e.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),c.rollbackOnFailureEnabled=!0),!r.editing.supportsReturnServiceEditsInSourceSpatialReference&&c.returnServiceEditsInSourceSR)throw new n.A("".concat(e.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(c.returnServiceEditsInSourceSR&&"original-and-current-features"!==c.returnServiceEditsOption)throw new n.A("".concat(e.type,"-layer:invalid-parameter"),"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const p=function(e,t,a){var r,i,o;const l=function(e){var t,a;return{addFeatures:Array.from(null!==(t=null===e||void 0===e?void 0:e.addFeatures)&&void 0!==t?t:[]),updateFeatures:Array.from(null!==(a=null===e||void 0===e?void 0:e.updateFeatures)&&void 0!==a?a:[]),deleteFeatures:e&&s.A.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(null!==(r=l.addFeatures)&&void 0!==r&&r.length&&!t.operations.supportsAdd)throw new n.A("".concat(a,":unsupported-operation"),"Layer does not support adding features.");if(null!==(i=l.updateFeatures)&&void 0!==i&&i.length&&!t.operations.supportsUpdate)throw new n.A("".concat(a,":unsupported-operation"),"Layer does not support updating features.");if(null!==(o=l.deleteFeatures)&&void 0!==o&&o.length&&!t.operations.supportsDelete)throw new n.A("".concat(a,":unsupported-operation"),"Layer does not support deleting features.");return l.addFeatures=l.addFeatures.map(O),l.updateFeatures=l.updateFeatures.map(O),l.addAssetFeatures=[],l}(t,r,"".concat(e.type,"-layer")),h=(null===a||void 0===a?void 0:a.globalIdUsed)||u,y=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(h){const{globalIdField:t}=e;if(null==t)throw new n.A("".concat(e.type,"-layer:invalid-parameter"),"Layer does not specify a global id field.");p.addFeatures.forEach((e=>function(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,d.yS)())}(e,t)))}return p.addFeatures.forEach((t=>function(e,t,a,r){R(e,t,a,r),S(e,t)}(t,e,h,y))),p.updateFeatures.forEach((t=>function(e,t,a,r){R(e,t,a,r),S(e,t);const s=(0,m.BR)(t);if("geometry"in e&&null!=e.geometry&&(null===s||void 0===s||!s.editing.supportsGeometryUpdate))throw new n.A("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}(t,e,h,y))),p.deleteFeatures.forEach((t=>function(e,t,a,r){R(e,t,a,r)}(t,e,h,y))),p.addAttachments.forEach((t=>I(t,e))),p.updateAttachments.forEach((t=>I(t,e))),u&&await async function(e,t){var a,r;if(null==t.infoFor3D)return;const{infoFor3D:s}=t,i=null!==(a=(0,f.R_)("model/gltf-binary",s.supportedFormats))&&void 0!==a?a:(0,f.E1)("glb",s.supportedFormats);if(!i||!s.editFormats.includes(i))throw new n.A("".concat(t.type,"-layer:binary-gltf-asset-not-supported"),"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");null!==(r=e.addAssetFeatures)&&void 0!==r||(e.addAssetFeatures=[]);const{addAssetFeatures:o}=e;for(const n of null!==(l=e.addFeatures)&&void 0!==l?l:[]){var l;q(n)&&o.push(n)}for(const n of null!==(u=e.updateFeatures)&&void 0!==u?u:[]){var u;q(n)&&o.push(n)}}(p,e),{edits:await E(p),options:c}}(e,a,r);return null!==(i=y.addFeatures)&&void 0!==i&&i.length||null!==(l=y.updateFeatures)&&void 0!==l&&l.length||null!==(u=y.deleteFeatures)&&void 0!==u&&u.length||null!==(c=y.addAttachments)&&void 0!==c&&c.length||null!==(p=y.updateAttachments)&&void 0!==p&&p.length||null!==(h=y.deleteAttachments)&&void 0!==h&&h.length?{edits:y,results:await t.applyEdits(y,v)}:{edits:y,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,c),p=e=>e.filter((e=>!e.error)).map(i.o8),h={edits:l,addedFeatures:p(r.addFeatureResults),updatedFeatures:p(r.updateFeatureResults),deletedFeatures:p(r.deleteFeatureResults),addedAttachments:p(r.addAttachmentResults),updatedAttachments:p(r.updateAttachmentResults),deletedAttachments:p(r.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:r.editMoment?new Date(r.editMoment):null,globalIdToObjectId:c.globalIdToObjectId};return null!==(v=r.editedFeatureResults)&&void 0!==v&&v.length&&(h.editedFeatures=r.editedFeatureResults),u.resolve(h),r}catch(A){throw u.reject(A),A}}function R(e,t,a,r){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"Feature should have '".concat(t.globalIdField,"' when 'globalIdUsed' is true"));if(!("attributes"in e)&&!e.globalId)throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(r.length&&"attributes"in e)for(const o of r){const a=e.attributes[o.name];if(void 0!==a&&!(0,y.OG)(o,a))throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"Big-integer field '".concat(o.name,"' of the feature must be less than ").concat(Number.MAX_SAFE_INTEGER),{feature:e})}if("geometry"in e&&null!=e.geometry){var s,i;if(e.geometry.hasZ&&!1===(null===(s=t.capabilities)||void 0===s?void 0:s.data.supportsZ))throw new n.A("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===(null===(i=t.capabilities)||void 0===i?void 0:i.data.supportsM))throw new n.A("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function S(e,t){var a;if("geometry"in e&&"mesh"===(null===(a=e.geometry)||void 0===a?void 0:a.type)&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:a}=e,{spatialReference:r,vertexSpace:s}=a,i=t.spatialReference,o="local"===s.type,l=(0,p.EA)(i),u=(0,p.aI)(i,r),d=u||(0,p.oT)(i)&&((0,p.oT)(r)||(0,p.K8)(r));if(!(o&&l&&d||!o&&!l&&u))throw new n.A("".concat(t.type,"-layer:mesh-unsupported"),"Uploading a mesh with a ".concat(s.type," vertex space and a spatial reference wkid:").concat(r.wkid," to a layer with a spatial reference wkid:").concat(i.wkid," is not supported."))}}function I(e,t){var a;const{feature:r,attachment:s}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&s.data.name)&&!s.name)throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if((null===(a=t.capabilities)||void 0===a||!a.editing.supportsUploadWithItemId)&&s.uploadId)throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=(0,u.r$)(s.data);if(e&&!e.isBase64)throw new n.A("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function E(e){var t,a;const r=null!==(t=e.addFeatures)&&void 0!==t?t:[],s=null!==(a=e.updateFeatures)&&void 0!==a?a:[],n=r.concat(s).map((e=>e.geometry)),i=await(0,c.el)(n),o=r.length,l=s.length;return i.slice(0,o).forEach(((e,t)=>r[t].geometry=e)),i.slice(o,o+l).forEach(((e,t)=>s[t].geometry=e)),e}function O(e){const t=new r.A;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function q(e){var t;return"mesh"===(null===e||void 0===e||null===(t=e.geometry)||void 0===t?void 0:t.type)}function T(e,t,a,r){if(!g(t))throw new n.A("".concat(e.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new n.A("".concat(e.type,"-layer:no-asset-upload-support"),"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(a,r)}},89078:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var r=a(35143),s=(a(35238),a(55171)),n=a(3825),i=a(82111),o=a(18690),l=a(50076),u=a(81806),d=a(45802),c=a(49304),p=a(76460),h=a(48611),y=a(50346),f=a(90534),m=a(49723),g=a(46053),v=a(85842),A=a(76797),b=a(99773),w=a(57045),F=a(39356),R=a(31633),S=a(9624),I=a(19902),E=a(80963),O=a(54610);async function q(e,t,a){const{geometry:r}=t,s={...t.attributes};if(null!=a&&"mesh"===(null===r||void 0===r?void 0:r.type)){var n;const{transformFieldRoles:t}=a,{origin:i,spatialReference:o,transform:l,vertexSpace:u}=r,d="local"===u.type,c=e.spatialReference,p=c.isGeographic,h=(0,E.aI)(c,o),y=h||(0,E.oT)(c)&&((0,E.oT)(o)||(0,E.K8)(o));if(!(d&&p&&y||!d&&!p&&h))return null;const f=(0,S.projectWithoutEngine)(i,o,c);if(null==f)return null;if(s[t.originX]=f.x,s[t.originY]=f.y,s[t.originZ]=null!==(n=f.z)&&void 0!==n?n:0,null!=l){const{translation:e,scale:a,rotation:r}=l,n=d?1:(0,R.KX)(o)/(0,R.KX)(c);s[t.translationX]=e[0]*n,s[t.translationY]=e[2]*n,s[t.translationZ]=-e[1]*n,s[t.scaleX]=a[0],s[t.scaleY]=a[2],s[t.scaleZ]=a[1],s[t.rotationX]=r[0],s[t.rotationY]=r[2],s[t.rotationZ]=-r[1],s[t.rotationDeg]=r[3]}return{attributes:s}}return null==r?{attributes:s}:"mesh"===r.type||"extent"===r.type?null:{geometry:r.toJSON(),attributes:s}}async function T(e,t){var a,r,s;const n=await Promise.all((null!==(a=t.addAttachments)&&void 0!==a?a:[]).map((t=>_(e,t)))),i=await Promise.all((null!==(r=t.updateAttachments)&&void 0!==r?r:[]).map((t=>_(e,t)))),o=null!==(s=t.deleteAttachments)&&void 0!==s?s:[];return n.length||i.length||o.length?{adds:n,updates:i,deletes:[...o]}:null}async function _(e,t){var a;const{feature:r,attachment:s}=t,{globalId:n,name:i,contentType:o,data:l,uploadId:u}=s,d={globalId:n};if(r&&("attributes"in r?d.parentGlobalId=null===(a=r.attributes)||void 0===a?void 0:a[e.globalIdField]:r.globalId&&(d.parentGlobalId=r.globalId)),u)d.uploadId=u;else if(l){const e=await(0,f._0)(l);e&&(d.contentType=e.mediaType,d.data=e.data),l instanceof File&&(d.name=l.name)}return i&&(d.name=i),o&&(d.contentType=o),d}function x(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new l.A("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}function M(e,t){return new F.A({attributes:e.attributes,geometry:(0,I.rS)({...e.geometry,spatialReference:t})})}function k(e,t){var a,r,s;return{adds:(null===e||void 0===e||null===(a=e.adds)||void 0===a?void 0:a.map((e=>M(e,t))))||[],updates:(null===e||void 0===e||null===(r=e.updates)||void 0===r?void 0:r.map((e=>({original:M(e[0],t),current:M(e[1],t)}))))||[],deletes:(null===e||void 0===e||null===(s=e.deletes)||void 0===s?void 0:s.map((e=>M(e,t))))||[],spatialReference:t}}var N=a(40296),U=a(17872),C=a(13096),D=a(91447),L=a(19463),J=a(14009),j=a(10290),Q=a(97015),P=a(35298),B=a(13312);const G=new d.J({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),V=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),H=new d.J({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let Z=class extends c.A{constructor(){super(...arguments),this.type="feature-layer",this.refresh=(0,y.sg)((async()=>{var e,t;await this.load();const a=null===(e=this.sourceJSON.editingInfo)||void 0===e?void 0:e.lastEditDate;if(null==a)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const r=a!==(null===(t=this.sourceJSON.editingInfo)||void 0===t?void 0:t.lastEditDate);return{dataChanged:r,updates:r?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,a=this._fetchService(t,{...e}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e))).then((()=>this._ensureLatestMetadata(e)));return this.addResolvingPromise(a),Promise.resolve(this)}get queryTask(){var e,t;const{capabilities:a,parsedUrl:r,dynamicDataSource:s,infoFor3D:n,gdbVersion:i,spatialReference:o,fieldsIndex:l}=this.layer,d=(0,u.A)("featurelayer-pbf")&&(null===a||void 0===a?void 0:a.query.supportsFormatPBF)&&null==n,c=null!==(e=null===a||void 0===a||null===(t=a.operations)||void 0===t?void 0:t.supportsQueryAttachments)&&void 0!==e&&e;return new U.A({url:r.path,pbfSupported:d,fieldsIndex:l,infoFor3D:n,dynamicDataSource:s,gdbVersion:i,sourceSpatialReference:o,queryAttachmentsSupported:c})}async addAttachment(e,t){await this.load();const{layer:a}=this;await(0,D.VA)(a,"editing");const r=e.attributes[a.objectIdField],s=a.parsedUrl.path+"/"+r+"/addAttachment",i=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,i.query);try{return x((await(0,n.A)(s,{body:o})).data.addAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(r,l)}}async updateAttachment(e,t,a){await this.load();const{layer:r}=this;await(0,D.VA)(r,"editing");const s=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+s+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),l=this._getFormDataForAttachment(a,o.query);try{return x((await(0,n.A)(i,{body:l})).data.updateAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(s,u)}}async applyEdits(e,t){var a,r,i,u,d,c,p;await this.load();const{layer:h}=this;await(0,D.VA)(h,"editing");const y=h.infoFor3D,f=null!=y,m=f||null!==(a=null===t||void 0===t?void 0:t.globalIdUsed)&&void 0!==a&&a,g=f?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,v=null!==(r=null===(i=e.addFeatures)||void 0===i?void 0:i.map((e=>q(this.layer,e,y))))&&void 0!==r?r:[],A=(await Promise.all(v)).filter(o.Ru),b=null!==(u=null===(d=e.updateFeatures)||void 0===d?void 0:d.map((e=>q(this.layer,e,y))))&&void 0!==u?u:[],w=(await Promise.all(b)).filter(o.Ru),F=function(e,t,a){if(!t||0===t.length)return[];if(a&&(0,O.zp)(t))return t.map((e=>e.globalId));if((0,O.r3)(t))return t.map((e=>e.objectId));const r=a?e.globalIdField:e.objectIdField;return r?t.map((e=>e.getAttribute(r))):[]}(this.layer,e.deleteFeatures,m);(0,j.u)(A,w,h.spatialReference);const R=await T(this.layer,e),S=h.capabilities.editing.supportsAsyncApplyEdits&&f,I=(null===t||void 0===t?void 0:t.gdbVersion)||h.gdbVersion,E={gdbVersion:I,rollbackOnFailure:null===t||void 0===t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:m,returnEditMoment:null===t||void 0===t?void 0:t.returnEditMoment,usePreviousEditMoment:null===t||void 0===t?void 0:t.usePreviousEditMoment,async:S};await(0,P.ZJ)(this.layer.url,I,!0);const _=(0,P.w5)(this.layer.url,I||null);if(await(0,P.We)(h.url,I,h.historicMoment))throw new l.A("feature-layer-source:historic-version","Editing a historic version is not allowed");null!==t&&void 0!==t&&t.returnServiceEditsOption?(E.edits=JSON.stringify([{id:h.layerId,adds:A,updates:w,deletes:F,attachments:R,assetMaps:g}]),E.returnServiceEditsOption=G.toJSON(null===t||void 0===t?void 0:t.returnServiceEditsOption),E.returnServiceEditsInSourceSR=null===t||void 0===t?void 0:t.returnServiceEditsInSourceSR):(E.adds=A.length?JSON.stringify(A):null,E.updates=w.length?JSON.stringify(w):null,E.deletes=F.length?m?JSON.stringify(F):F.join(","):null,E.attachments=R&&JSON.stringify(R),E.assetMaps=null!=g?JSON.stringify(g):void 0);const x=this._getLayerRequestOptions({method:"post",query:E});_&&(x.authMode="immediate",x.query.returnEditMoment=!0,x.query.sessionId=P.TA);const M=null!==t&&void 0!==t&&t.returnServiceEditsOption?h.url:h.parsedUrl.path;let k;try{k=S?await this._asyncApplyEdits(M+"/applyEdits",x):await(0,n.A)(M+"/applyEdits",x)}catch(N){if(!function(e){const t=e.details.raw,a=+t.code,r=+t.extendedCode;return 500===a&&(-2147217144===r||-2147467261===r)}(N))throw N;x.authMode="immediate",k=S?await this._asyncApplyEdits(M+"/applyEdits",x):await(0,n.A)(M+"/applyEdits",x)}if((null===(c=h.capabilities.operations)||void 0===c||!c.supportsEditing)&&null!==(p=h.effectiveCapabilities)&&void 0!==p&&null!==(p=p.operations)&&void 0!==p&&p.supportsEditing){const e=null===s.id||void 0===s.id?void 0:s.id.findCredential(h.url);await(null===e||void 0===e?void 0:e.refreshToken())}return this._createEditsResult(k)}async deleteAttachments(e,t){await this.load();const{layer:a}=this;await(0,D.VA)(a,"editing");const r=e.attributes[a.objectIdField],s=a.parsedUrl.path+"/"+r+"/deleteAttachments";try{return(await(0,n.A)(s,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(x)}catch(i){throw this._createAttachmentErrorResult(r,i)}}fetchRecomputedExtents(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:s}=await(0,n.A)("".concat(r,"/").concat(a),t),{id:o,extent:l,fullExtent:u,timeExtent:d}=s,c=l||u;return{id:o,fullExtent:c&&A.A.fromJSON(c),timeExtent:d&&i.A.fromJSON({start:d[0],end:d[1]})}}))}async queryAttachments(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load();const a=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,a)}async queryFeatures(e,t){var a;await this.load();const r=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});return null!==(a=e.outStatistics)&&void 0!==a&&a.length&&r.features.length&&r.features.forEach((t=>{var a;const r=t.attributes;null===(a=e.outStatistics)||void 0===a||a.forEach((e=>{let{outStatisticFieldName:t}=e;if(t){const e=t.toLowerCase();e&&e in r&&t!==e&&(r[t]=r[e],delete r[e])}}))})),r}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,C.Wo)(this.layer.url))return"unavailable";const e=(0,f.fj)(this.layer.url,"status"),t=await(0,n.A)(e,{query:{f:"json"}});return H.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:r}=await a.e(9845).then(a.bind(a,99845));return r(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}async _asyncApplyEdits(e,t){const a=(await(0,n.A)(e,t)).data.statusUrl;for(;;){const e=(await(0,n.A)(a,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return(0,n.A)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new l.A("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new l.A("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await(0,y.Pl)(z)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...null===e||void 0===e?void 0:e.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const a={};(0,u.A)("featurelayer-advanced-symbols")&&(a.returnAdvancedSymbols=!0),(null===t||void 0===t?void 0:t.cacheBust)&&(a._ts=Date.now());const{data:r}=await(0,n.A)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:a,signal:null===t||void 0===t?void 0:t.signal}));e=r}this.sourceJSON=await this._patchServiceJSON(e,null===t||void 0===t?void 0:t.signal);const a=e.type;if(!V.has(a))throw new l.A("feature-layer-source:unsupported-type",'Source type "'.concat(a,'" is not supported'))}async _patchServiceJSON(e,t){var a;if("Table"!==e.type&&e.geometryType&&(null===e||void 0===e||null===(a=e.drawingInfo)||void 0===a||!a.renderer)&&!e.defaultSymbol){const t=(0,N.F0)(e.geometryType).renderer;(0,h.sM)("drawingInfo.renderer",t,e)}if("esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),null==e.extent)try{const{data:a}=await(0,n.A)(this.layer.url,this._getLayerRequestOptions({signal:t}));a.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:a.spatialReference})}catch(r){(0,y.QP)(r)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(null===t||void 0===t||!t.length)return null;const a=await this._filterRedundantAssetMaps(t);if(null===t||void 0===t||!t.length)return null;const r=new Array,s=new Map;for(const n of a){const{geometry:e}=n,{vertexSpace:t}=e;if((0,b.Hq)(t))r.push(e);else{const t=(0,b.kp)(e);s.set(t,e),n.geometry=t,r.push(t)}}await this.uploadAssets(r);for(const[n,i]of s)i.addExternalSources(n.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(a),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,a=this.layer.globalIdField,r=this.layer.parsedUrl;for(const n of e){var s;const e=n.geometry,{metadata:i}=e,o=i.getExternalSourcesOnService(r),l=n.getAttribute(a);if(0===o.length){p.A.getLogger(this).error("Skipping feature ".concat(l,". The mesh it is associated with has not been uploaded to the service and cannot be mapped to it."));continue}const{source:u}=null!==(s=o.find(w.dK))&&void 0!==s?s:o[0];for(const a of u)1===a.parts.length?t.push({globalId:(0,m.yS)(),parentGlobalId:l,assetName:a.assetName,assetHash:a.parts[0].partHash,flags:[]}):p.A.getLogger(this).error("Skipping asset ".concat(a.assetName,". It does not have exactly one part, so we cannot map it to a feature."))}return t}_createEditsResult(e){const t=e.data,{layerId:a}=this.layer,r=[];let s=null;if(Array.isArray(t))for(const u of t){var n,i,o;r.push({id:u.id,editedFeatures:u.editedFeatures}),u.id===a&&(s={addResults:null!==(n=u.addResults)&&void 0!==n?n:[],updateResults:null!==(i=u.updateResults)&&void 0!==i?i:[],deleteResults:null!==(o=u.deleteResults)&&void 0!==o?o:[],attachments:u.attachments,editMoment:u.editMoment})}else s=t;const l=function(e){var t,a,r,s,n,i;const o=null===e||void 0===e?void 0:e.assetMaps;if(o){for(const e of o.addResults)e.success||p.A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error("Failed to map asset to feature with globalId ".concat(e.globalId,"."));for(const e of o.updateResults)e.success||p.A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error("Failed to map asset to feature with globalId ".concat(e.globalId,"."))}const l=null===e||void 0===e?void 0:e.attachments,u={addFeatureResults:null!==(t=null===e||void 0===e||null===(a=e.addResults)||void 0===a?void 0:a.map(x))&&void 0!==t?t:[],updateFeatureResults:null!==(r=null===e||void 0===e||null===(s=e.updateResults)||void 0===s?void 0:s.map(x))&&void 0!==r?r:[],deleteFeatureResults:null!==(n=null===e||void 0===e||null===(i=e.deleteResults)||void 0===i?void 0:i.map(x))&&void 0!==n?n:[],addAttachmentResults:null!==l&&void 0!==l&&l.addResults?l.addResults.map(x):[],updateAttachmentResults:null!==l&&void 0!==l&&l.updateResults?l.updateResults.map(x):[],deleteAttachmentResults:null!==l&&void 0!==l&&l.deleteResults?l.deleteResults.map(x):[]};return null!==e&&void 0!==e&&e.editMoment&&(u.editMoment=e.editMoment),u}(s);if(r.length>0){l.editedFeatureResults=[];for(const e of r){const{editedFeatures:t}=e,a=null!==t&&void 0!==t&&t.spatialReference?new B.A(t.spatialReference):null;l.editedFeatureResults.push({layerId:e.id,editedFeatures:k(t,a)})}}return l}_createAttachmentErrorResult(e,t){var a;const r=(null===(a=t.details.messages)||void 0===a?void 0:a[0])||t.message,s=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new l.A("feature-layer-source:attachment-failure",r,{code:s})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const r in t){const e=t[r];null!=e&&(a.set?a.set(r,e):a.append(r,e))}return a}_getLayerRequestOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{parsedUrl:t,gdbVersion:a,dynamicDataSource:r}=this.layer;return{...e,query:{gdbVersion:a,layer:r?JSON.stringify({source:r}):void 0,...t.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _filterRedundantAssetMaps(e){const{layer:t}=this,{globalIdField:a,infoFor3D:r,parsedUrl:s}=t;if(null==r||null==a)return e;const n=(0,L.JZ)(r);if(null==n)return e;const i=(0,f.fj)(s.path,"../".concat(n.id)),l=new Array,u=new Array;for(const o of e)o.geometry.metadata.getExternalSourcesOnService(s).length>0?u.push(o):l.push(o);const d=u.map((e=>e.getAttribute(a))).filter(o.Ru);if(0===d.length)return e;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:p}}=r,h=new Q.A;h.where="".concat(c," IN (").concat(d.map((e=>"'".concat(e,"'"))),")"),h.outFields=[p,c],h.returnGeometry=!1;const y=await(0,J.s)(i,h),{features:m}=y;return 0===m.length?e:[...l,...u.filter((e=>{const t=e.getAttribute(a);if(!t)return!0;const{metadata:r}=e.geometry,n=m.filter((e=>e.getAttribute(c)===t));if(0===n.length)return!0;const i=n.map((e=>e.getAttribute(p)));return r.getExternalSourcesOnService(s).flatMap((e=>{let{source:t}=e;return t.flatMap((e=>e.parts.map((e=>e.partHash))))})).some((e=>i.every((t=>e!==t))))}))]}};(0,r._)([(0,g.MZ)()],Z.prototype,"type",void 0),(0,r._)([(0,g.MZ)({constructOnly:!0})],Z.prototype,"layer",void 0),(0,r._)([(0,g.MZ)({readOnly:!0})],Z.prototype,"queryTask",null),Z=(0,r._)([(0,v.$)("esri.layers.graphics.sources.FeatureLayerSource")],Z);const z=1e3,W=Z},40296:(e,t,a)=>{a.d(t,{F0:()=>o,Vx:()=>d,e2:()=>c,f:()=>p});var r=a(81806),s=a(53084),n=a(8298),i=a(44460);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?i.Cb:"esriGeometryPolyline"===e?i.yM:i.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,r.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let a="this.".concat(t," = null;");for(const t in e)a+="this".concat(l.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const r=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(a,";\n        }\n      }\n    "))();return()=>new r}catch(a){return()=>({[t]:null,...e})}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.o8)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:n.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);
//# sourceMappingURL=9078.0b2d5b9f.chunk.js.map