"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[904],{20904:(t,e,r)=>{r.r(e),r.d(e,{default:()=>C});var s=r(4212),i=r(90632),n=r(13312),o=r(86729),a=r(99784),h=r(98618),l=r(44135);function u(t,e){return e}function d(t,e,r,s){switch(r){case 0:return _(t,e+s,0);case 1:return"lowerLeft"===t.originPosition?_(t,e+s,1):function(t,e,r){let{translate:s,scale:i}=t;return s[r]-e*i[r]}(t,e+s,1)}}function c(t,e,r,s){return 2===r?_(t,e,2):d(t,e,r,s)}function p(t,e,r,s){return 2===r?_(t,e,3):d(t,e,r,s)}function f(t,e,r,s){return 3===r?_(t,e,3):c(t,e,r,s)}function _(t,e,r){let{translate:s,scale:i}=t;return s[r]+e*i[r]}class y{constructor(t){this._options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=u,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{},this._missingAttributes=[]}get missingAttributes(){return this._missingAttributes}createFeatureResult(){return new a.jy}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=(0,o.N)(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(null!=e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return new n.A}addField(t,e){t.fields.push(l.A.fromJSON(e));const r=t.fields.map((t=>t.name));this._attributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){const r=this._options.maxStringAttributeLength,s=this._options.maxStringAttributeFields;(0,a.Uz)(e.attributes,s,r,(r=>{const s=e.attributes[t.objectIdFieldName];null!=s&&this._missingAttributes.push({objectId:s,attribute:r})})),t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,i=(0,h.Ch)(r.clone(),r,!1,!1,this._transform),n=(0,h.zv)(i,s,!1,!1);let o=null;switch(s){case"esriGeometryPoint":o="point";break;case"esriGeometryPolygon":o="polygon";break;case"esriGeometryPolyline":o="polyline";break;case"esriGeometryMultipoint":o="multipoint"}n.type=o,t.queryGeometryType=s,t.queryGeometry=n}prepareFeatures(t){var e;switch(this._transform=null!==(e=t.transform)&&void 0!==e?e:null,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&this._vertexDimension++,t.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this._addCoordinatePolygon(t,e,r),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this._addCoordinatePolyline(t,e,r),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this._addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this._createMultipointGeometry(t);break;case"mesh":case"extent":break;default:(0,s.Xb)(t.geometryType)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,new a.HP((0,i.c)(),null,new this._attributesConstructor)}allocateCoordinates(){const t=this._lengths.reduce(((t,e)=>t+e),0);this._coordinateBuffer=new Float64Array(t*this._vertexDimension),this._coordinateBufferPtr=0}addLength(t,e){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){const s=this._transform?this._applyTransform(this._transform,e,r,0):e;if(null!=s)switch(r){case 0:t.x=s;break;case 1:t.y=s;break;case 2:t.hasZ?t.z=s:t.m=s;break;case 3:t.m=s}}_transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this._previousCoordinate[e],this._previousCoordinate[e]+=t),this._transform?this._applyTransform(this._transform,t,e,r):t}_addCoordinatePolyline(t,e,r){this._dehydratedAddPointsCoordinate(t.paths,e,r)}_addCoordinatePolygon(t,e,r){this._dehydratedAddPointsCoordinate(t.rings,e,r)}_addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this._transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,r){0===r&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,r),i=t[t.length-1],n=this._coordinateBuffer;if(n){if(0===r){const t=this._coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT;i.push(new Float64Array(n.buffer,t,this._vertexDimension))}n[this._coordinateBufferPtr++]=s}}_deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?f:e?c:r?p:d}}var m=r(89122);class g{_parseFeatureQuery(t){var e;const r=new y(t.options),s=(0,m.m)(t.buffer,r),i={...s,spatialReference:null===(e=s.spatialReference)||void 0===e?void 0:e.toJSON(),fields:s.fields?s.fields.map((t=>t.toJSON())):void 0,missingAttributes:r.missingAttributes};return Promise.resolve(i)}}function C(){return new g}}}]);
//# sourceMappingURL=904.74290d3d.chunk.js.map