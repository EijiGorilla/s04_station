"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[4412],{83491:(e,t,i)=>{i.d(t,{w:()=>h});var l=i(35143),r=i(54901),a=i(50346),n=i(68134),s=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),d=i(47700);const h=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.jI)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,r.hA)((()=>e.abort()))),await(0,n.C_)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,a.Te)(t);const i=(0,d.Hu)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,l._)([(0,s.MZ)()],t.prototype,"view",void 0),(0,l._)([(0,s.MZ)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,l._)([(0,o.$)("esri.views.3d.layers.LayerView3D")],t),t}},96453:(e,t,i)=>{i.d(t,{E:()=>u});var l=i(35143),r=i(50076),a=i(68134),n=i(46053),s=(i(81806),i(76460),i(47249),i(85842)),o=i(65768),d=i(93938),h=i(4225);const u=e=>{let t=class extends e{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataScaleRange(){const e=this.tileInfo.lods;let t=e[0].scale,i=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:e,effectiveMaxLOD:l}=this.layer.tilemapCache;t=this.tileInfo.lodAt(e).scale,i=this.tileInfo.lodAt(l).scale}return{minScale:t,maxScale:i}}get dataLevelRange(){const{minScale:e,maxScale:t}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,t)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,t=this.layer.maxScale||this.dataScaleRange.maxScale,i=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale&&i.maxLevel++,i}get performanceInfo(){return new o.P(this.view.basemapTerrain.getUsedMemoryForLayerView(this))}getTileUrl(e,t,i){return this.layer.getTileUrl(e,t,i)}_addTilingSchemeMatchPromise(){if(null==this.fullExtent)return this.addResolvingPromise(Promise.reject(new r.A("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e)return this.addResolvingPromise(Promise.reject(e));const t=(0,a.C_)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.tilingSchemeLocked})).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const i=(0,h._y)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(i){const e={layer:this.layer,error:i};let t;switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new r.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new r.A("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null}_getTileInfoCompatibilityError(e,t){return null!=e&&t.compatibleWith(e)?null:new r.A("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},l=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!l)return i;const r=l.levels[0],a=e=>{const t=Math.log(r.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,a(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,a(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,l._)([(0,n.MZ)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,l._)([(0,n.MZ)({readOnly:!0})],t.prototype,"updating",void 0),(0,l._)([(0,n.MZ)(d.S)],t.prototype,"updatingProgress",void 0),(0,l._)([(0,n.MZ)(d.b)],t.prototype,"updatingProgressValue",void 0),(0,l._)([(0,n.MZ)()],t.prototype,"fullExtent",null),(0,l._)([(0,n.MZ)({readOnly:!0})],t.prototype,"isOpaque",null),(0,l._)([(0,n.MZ)()],t.prototype,"dataScaleRange",null),(0,l._)([(0,n.MZ)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,l._)([(0,n.MZ)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,l._)([(0,n.MZ)()],t.prototype,"layer",void 0),t=(0,l._)([(0,s.$)("esri.views.3d.layers.TiledLayerView3D")],t),t}},84412:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var l=i(35143),r=i(19276),a=i(76460),n=i(68134),s=i(46053),o=(i(81806),i(47249),i(85842)),d=i(31933),h=i(83491),u=i(96453),p=i(91196),c=i(771);let v=class extends((0,c.A)((0,u.E)((0,h.w)(p.A)))){constructor(){super(...arguments),this.type="wmts-3d"}initialize(){this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent)));const e=(0,n.C_)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.tilingSchemeLocked})).then((()=>{const e=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoError(e.tileInfo,e.fullExtent)));null!=e&&(null!==e.id&&this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),e.tileInfo&&(this.tileInfo=e.tileInfo),this.layer.fullExtent=e.fullExtent)}));this.addResolvingPromise(e),this.when((()=>this._postInitialize()))}get hasMixedImageFormats(){return!0}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const e=this.layer.activeLayer.tileMatrixSet;return null!=e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_postInitialize(){this._updatingHandles.add((()=>{var e;return null===(e=this.layer)||void 0===e||null===(e=e.activeLayer)||void 0===e?void 0:e.styleId}),(()=>this.refresh())),this._updatingHandles.add((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.activeLayer}),(e=>{const t=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoError(e.tileInfo,e.fullExtent)),!0);t&&null!=t.id&&e.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()}))}_getCompatibleTileInfoMatrixSet(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=(0,d.r0)(this.layer);if(null!=i){if(r.A.isCollection(i)){return i.find((i=>{const l=e(i);return null!=l&&(t?a.A.getLogger(this).error("The selected tile matrix set is not compatible with the view",l):this.addResolvingPromise(Promise.reject(l))),null==l}))}const l=e(i);return null!=l&&(t?a.A.getLogger(this).error("The selected tile matrix set is not compatible with the view",l):this.addResolvingPromise(Promise.reject(l))),i}return null}_getTileInfoError(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)}};(0,l._)([(0,s.MZ)({readOnly:!0})],v.prototype,"hasMixedImageFormats",null),(0,l._)([(0,s.MZ)()],v.prototype,"layer",void 0),(0,l._)([(0,s.MZ)()],v.prototype,"suspended",void 0),(0,l._)([(0,s.MZ)()],v.prototype,"tileInfo",void 0),v=(0,l._)([(0,o.$)("esri.views.3d.layers.WMTSLayerView3d")],v);const g=v},91196:(e,t,i)=>{i.d(t,{A:()=>v});var l=i(35143),r=i(91967),a=i(54099),n=i(5632),s=i(76460),o=i(30726),d=i(91291),h=i(46053),u=(i(81806),i(47249),i(85842)),p=i(19451);let c=class extends((0,n.sA)((0,d.g)(a.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new p.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",l=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";s.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(l,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,l;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(l=this.parent)||void 0===l?void 0:l.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,l._)([(0,h.MZ)()],c.prototype,"fullOpacity",null),(0,l._)([(0,h.MZ)()],c.prototype,"layer",void 0),(0,l._)([(0,h.MZ)()],c.prototype,"parent",void 0),(0,l._)([(0,h.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,l._)([(0,h.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,l._)([(0,h.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,l._)([(0,h.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,l._)([(0,h.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,l._)([(0,h.MZ)()],c.prototype,"visible",null),(0,l._)([(0,h.MZ)()],c.prototype,"view",void 0),c=(0,l._)([(0,u.$)("esri.views.layers.LayerView")],c);const v=c},771:(e,t,i)=>{i.d(t,{A:()=>o});var l=i(35143),r=i(76460),a=i(50346),n=i(68134),s=(i(81806),i(47249),i(50076),i(85842));const o=e=>{let t=class extends e{initialize(){this.addHandles((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,a.zf)(e)||r.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,l._)([(0,s.$)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=4412.6cc715c6.chunk.js.map