"use strict";(self.webpackChunks04_station=self.webpackChunks04_station||[]).push([[4001],{26382:(e,r,t)=>{t.r(r),t.d(r,{l:()=>l});var n,a,i,o=t(54787),u={exports:{}};n=u,a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r,t,n=e;n.ready=new Promise(((e,n)=>{r=e,t=n}));var i=Object.assign({},n),o="./this.program",u=!0,s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),a&&(s=a),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",n.print||console.log.bind(console);var l,c,f=n.printErr||console.error.bind(console);Object.assign(n,i),i=null,n.arguments&&n.arguments,n.thisProgram&&(o=n.thisProgram),n.quit&&n.quit,n.wasmBinary&&(l=n.wasmBinary),"object"!=typeof WebAssembly&&S("no native wasm support detected");var d,h,v,p,m,g,y,w,_=!1;function b(){var e=c.buffer;n.HEAP8=d=new Int8Array(e),n.HEAP16=v=new Int16Array(e),n.HEAPU8=h=new Uint8Array(e),n.HEAPU16=p=new Uint16Array(e),n.HEAP32=m=new Int32Array(e),n.HEAPU32=g=new Uint32Array(e),n.HEAPF32=y=new Float32Array(e),n.HEAPF64=w=new Float64Array(e)}var A=[],T=[],C=[];function F(e){A.unshift(e)}function W(e){C.unshift(e)}var E=0,P=null;function S(e){n.onAbort&&n.onAbort(e),f(e="Aborted("+e+")"),_=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw t(r),r}var x,O=e=>e.startsWith("data:application/octet-stream;base64,");function j(e){if(e==x&&l)return new Uint8Array(l);throw"both async and sync fetching of the wasm failed"}function D(e,r,t){return function(e){return!l&&u&&"function"==typeof fetch?fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()})).catch((()=>j(e))):Promise.resolve().then((()=>j(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then((e=>e)).then(t,(e=>{f(`failed to asynchronously prepare wasm: ${e}`),S(e)}))}O(x="lyr3DMain.wasm")||(x=function(e){return n.locateFile?n.locateFile(e,s):s+e}(x));var M=e=>{for(;e.length>0;)e.shift()(n)};function R(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){g[this.ptr+4>>2]=e},this.get_type=function(){return g[this.ptr+4>>2]},this.set_destructor=function(e){g[this.ptr+8>>2]=e},this.get_destructor=function(){return g[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,d[this.ptr+12|0]=e},this.get_caught=function(){return 0!=d[this.ptr+12|0]},this.set_rethrown=function(e){e=e?1:0,d[this.ptr+13|0]=e},this.get_rethrown=function(){return 0!=d[this.ptr+13|0]},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)},this.set_adjusted_ptr=function(e){g[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return g[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Xe(this.get_type()))return g[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}n.noExitRuntime;var k={},$=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function I(e){return this.fromWireType(m[e>>2])}var U,Y,H,V={},z={},B={},L=e=>{throw new U(e)},N=(e,r,t)=>{function n(r){var n=t(r);n.length!==e.length&&L("Mismatched type converter count");for(var a=0;a<e.length;++a)X(e[a],n[a])}e.forEach((function(e){B[e]=r}));var a=new Array(r.length),i=[],o=0;r.forEach(((e,r)=>{z.hasOwnProperty(e)?a[r]=z[e]:(i.push(e),V.hasOwnProperty(e)||(V[e]=[]),V[e].push((()=>{a[r]=z[e],++o===i.length&&n(a)})))})),0===i.length&&n(a)},G={},q=e=>{for(var r="",t=e;h[t];)r+=Y[h[t++]];return r},J=e=>{throw new H(e)};function X(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=r.name;if(e||J(`type "${n}" must have a positive integer typeid pointer`),z.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;J(`Cannot register type '${n}' twice`)}if(z[e]=r,delete B[e],V.hasOwnProperty(e)){var a=V[e];delete V[e],a.forEach((e=>e()))}}(e,r,t)}var Z=8;function K(){this.allocated=[void 0],this.freelist=[]}var Q=new K,ee=e=>{e>=Q.reserved&&0==--Q.get(e).refcount&&Q.free(e)},re=()=>{for(var e=0,r=Q.reserved;r<Q.allocated.length;++r)void 0!==Q.allocated[r]&&++e;return e},te=e=>(e||J("Cannot use deleted val. handle = "+e),Q.get(e).value),ne=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Q.allocate({refcount:1,value:e})}},ae=(e,r)=>{switch(r){case 4:return function(e){return this.fromWireType(y[e>>2])};case 8:return function(e){return this.fromWireType(w[e>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}};var ie,oe=(e,r,t)=>{if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||J(`Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${e[r].overloadTable})!`),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},ue=(e,r,t)=>{n.hasOwnProperty(e)?((void 0===t||void 0!==n[e].overloadTable&&void 0!==n[e].overloadTable[t])&&J(`Cannot register public name '${e}' twice`),oe(n,e,e),n.hasOwnProperty(t)&&J(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),n[e].overloadTable[t]=r):(n[e]=r,void 0!==t&&(n[e].numArguments=t))},se=(e,r,t)=>{n.hasOwnProperty(e)||L("Replacing nonexistant public symbol"),void 0!==n[e].overloadTable&&void 0!==t?n[e].overloadTable[t]=r:(n[e]=r,n[e].argCount=t)},le=[],ce=e=>{var r=le[e];return r||(e>=le.length&&(le.length=e+1),le[e]=r=ie.get(e)),r},fe=(e,r,t)=>e.includes("j")?((e,r,t)=>{var a=n["dynCall_"+e];return t&&t.length?a.apply(null,[r].concat(t)):a.call(null,r)})(e,r,t):ce(r).apply(null,t),de=(e,r)=>{var t=(e=q(e)).includes("j")?((e,r)=>{var t=[];return function(){return t.length=0,Object.assign(t,arguments),fe(e,r,t)}})(e,r):ce(r);return"function"!=typeof t&&J(`unknown function pointer with signature ${e}: ${r}`),t};var he,ve=e=>{var r=qe(e),t=q(r);return Ne(r),t},pe=e=>{const r=(e=e.trim()).indexOf("(");return-1!==r?(function(e,r){e||S(r)}(")"==e[e.length-1],"Parentheses for argument names should match."),e.substr(0,r)):e},me=(e,r,t)=>{switch(r){case 1:return t?e=>d[0|e]:e=>h[0|e];case 2:return t?e=>v[e>>1]:e=>p[e>>1];case 4:return t?e=>m[e>>2]:e=>g[e>>2];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}};function ge(e){return this.fromWireType(g[e>>2])}var ye=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,i=t+n-1,o=0;o<e.length;++o){var u=e.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++o)),u<=127){if(t>=i)break;r[t++]=u}else if(u<=2047){if(t+1>=i)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=i)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=i)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-a},we=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},_e="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,be=(e,r)=>e?((e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&_e)return _e.decode(e.subarray(r,a));for(var i="";r<a;){var o=e[r++];if(128&o){var u=63&e[r++];if(192!=(224&o)){var s=63&e[r++];if((o=224==(240&o)?(15&o)<<12|u<<6|s:(7&o)<<18|u<<12|s<<6|63&e[r++])<65536)i+=String.fromCharCode(o);else{var l=o-65536;i+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else i+=String.fromCharCode((31&o)<<6|u)}else i+=String.fromCharCode(o)}return i})(h,e,r):"",Ae="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Te=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&p[n];)++n;if((t=n<<1)-e>32&&Ae)return Ae.decode(h.subarray(e,t));for(var i="",o=0;!(o>=r/2);++o){var u=v[e+2*o>>1];if(0==u)break;i+=String.fromCharCode(u)}return i},Ce=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,i=0;i<a;++i){var o=e.charCodeAt(i);v[r>>1]=o,r+=2}return v[r>>1]=0,r-n},Fe=e=>2*e.length,We=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=m[e+4*t>>2];if(0==a)break;if(++t,a>=65536){var i=a-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(a)}return n},Ee=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,i=0;i<e.length;++i){var o=e.charCodeAt(i);if(o>=55296&&o<=57343&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++i)),m[r>>2]=o,(r+=4)+4>a)break}return m[r>>2]=0,r-n},Pe=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},Se={},xe=e=>{var r=(e-c.buffer.byteLength+65535)/65536;try{return c.grow(r),b(),1}catch(a){}},Oe={},je=()=>{if(!je.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:o||"./this.program"};for(var r in Oe)void 0===Oe[r]?delete e[r]:e[r]=Oe[r];var t=[];for(var r in e)t.push(`${r}=${e[r]}`);je.strings=t}return je.strings},De=e=>e%4==0&&(e%100!=0||e%400==0),Me=[31,29,31,30,31,30,31,31,30,31,30,31],Re=[31,28,31,30,31,30,31,31,30,31,30,31];var ke,$e=(e,r)=>{d.set(e,r)},Ie=(e,r,t,n)=>{var a=g[n+40>>2],i={tm_sec:m[n>>2],tm_min:m[n+4>>2],tm_hour:m[n+8>>2],tm_mday:m[n+12>>2],tm_mon:m[n+16>>2],tm_year:m[n+20>>2],tm_wday:m[n+24>>2],tm_yday:m[n+28>>2],tm_isdst:m[n+32>>2],tm_gmtoff:m[n+36>>2],tm_zone:a?be(a):""},o=be(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)o=o.replace(new RegExp(s,"g"),u[s]);var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(e,r,t){for(var n="number"==typeof e?e.toString():e||"";n.length<r;)n=t[0]+n;return n}function d(e,r){return f(e,r,"0")}function h(e,r){function t(e){return e<0?-1:e>0?1:0}var n;return 0===(n=t(e.getFullYear()-r.getFullYear()))&&0===(n=t(e.getMonth()-r.getMonth()))&&(n=t(e.getDate()-r.getDate())),n}function v(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function p(e){var r=((e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=De(t.getFullYear()),a=t.getMonth(),i=(n?Me:Re)[a];if(!(r>i-t.getDate()))return t.setDate(t.getDate()+r),t;r-=i-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t})(new Date(e.tm_year+1900,0,1),e.tm_yday),t=new Date(r.getFullYear(),0,4),n=new Date(r.getFullYear()+1,0,4),a=v(t),i=v(n);return h(a,r)<=0?h(i,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var y={"%a":e=>l[e.tm_wday].substring(0,3),"%A":e=>l[e.tm_wday],"%b":e=>c[e.tm_mon].substring(0,3),"%B":e=>c[e.tm_mon],"%C":e=>d((e.tm_year+1900)/100|0,2),"%d":e=>d(e.tm_mday,2),"%e":e=>f(e.tm_mday,2," "),"%g":e=>p(e).toString().substring(2),"%G":e=>p(e),"%H":e=>d(e.tm_hour,2),"%I":e=>{var r=e.tm_hour;return 0==r?r=12:r>12&&(r-=12),d(r,2)},"%j":e=>d(e.tm_mday+((e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t})(De(e.tm_year+1900)?Me:Re,e.tm_mon-1),3),"%m":e=>d(e.tm_mon+1,2),"%M":e=>d(e.tm_min,2),"%n":()=>"\n","%p":e=>e.tm_hour>=0&&e.tm_hour<12?"AM":"PM","%S":e=>d(e.tm_sec,2),"%t":()=>"\t","%u":e=>e.tm_wday||7,"%U":e=>{var r=e.tm_yday+7-e.tm_wday;return d(Math.floor(r/7),2)},"%V":e=>{var r=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&r++,r){if(53==r){var t=(e.tm_wday+371-e.tm_yday)%7;4==t||3==t&&De(e.tm_year)||(r=1)}}else{r=52;var n=(e.tm_wday+7-e.tm_yday-1)%7;(4==n||5==n&&De(e.tm_year%400-1))&&r++}return d(r,2)},"%w":e=>e.tm_wday,"%W":e=>{var r=e.tm_yday+7-(e.tm_wday+6)%7;return d(Math.floor(r/7),2)},"%y":e=>(e.tm_year+1900).toString().substring(2),"%Y":e=>e.tm_year+1900,"%z":e=>{var r=e.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":e=>e.tm_zone,"%%":()=>"%"};for(var s in o=o.replace(/%%/g,"\0\0"),y)o.includes(s)&&(o=o.replace(new RegExp(s,"g"),y[s](i)));var w=function(e,r,t){var n=we(e)+1,a=new Array(n);return ye(e,a,0,a.length),a}(o=o.replace(/\0\0/g,"%"));return w.length>r?0:($e(w,e),w.length-1)},Ue=(e,r)=>{e<128?r.push(e):r.push(e%128|128,e>>7)},Ye=(e,r)=>{if("function"==typeof WebAssembly.Function)return new WebAssembly.Function((e=>{for(var r={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},t={parameters:[],results:"v"==e[0]?[]:[r[e[0]]]},n=1;n<e.length;++n)t.parameters.push(r[e[n]]);return t})(r),e);var t=[1];((e,r)=>{var t=e.slice(0,1),n=e.slice(1),a={i:127,p:127,j:126,f:125,d:124,e:111};r.push(96),Ue(n.length,r);for(var i=0;i<n.length;++i)r.push(a[n[i]]);"v"==t?r.push(0):r.push(1,a[t])})(r,t);var n=[0,97,115,109,1,0,0,0,1];Ue(t.length,n),n.push.apply(n,t),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var a=new WebAssembly.Module(new Uint8Array(n));return new WebAssembly.Instance(a,{e:{f:e}}).exports.f},He=e=>(ke||(ke=new WeakMap,((e,r)=>{if(ke)for(var t=e;t<e+r;t++){var n=ce(t);n&&ke.set(n,t)}})(0,ie.length)),ke.get(e)||0),Ve=[],ze=(e,r)=>{ie.set(e,r),le[e]=ie.get(e)};U=n.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},(()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);Y=e})(),H=n.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Object.assign(K.prototype,{get(e){return this.allocated[e]},has(e){return void 0!==this.allocated[e]},allocate(e){var r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=e,r},free(e){this.allocated[e]=void 0,this.freelist.push(e)}}),Q.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Q.reserved=Q.allocated.length,n.count_emval_handles=re,he=n.UnboundTypeError=((e,r)=>{var t=function(e,r){return e=(e=>{if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?`_${e}`:e})(e),{[e]:function(){return r.apply(this,arguments)}}[e]}(r,(function(e){this.name=r,this.message=e;var t=new Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:`${this.name}: ${this.message}`},t})(Error,"UnboundTypeError");var Be={k:(e,r,t)=>{throw new R(e).init(r,t),e},l:e=>{var r=k[e];delete k[e];var t=r.elements,n=t.length,a=t.map((e=>e.getterReturnType)).concat(t.map((e=>e.setterArgumentType))),i=r.rawConstructor,o=r.rawDestructor;N([e],a,(function(e){return t.forEach(((r,t)=>{var a=e[t],i=r.getter,o=r.getterContext,u=e[t+n],s=r.setter,l=r.setterContext;r.read=e=>a.fromWireType(i(o,e)),r.write=(e,r)=>{var t=[];s(l,e,u.toWireType(t,r)),$(t)}})),[{name:r.name,fromWireType:e=>{for(var r=new Array(n),a=0;a<n;++a)r[a]=t[a].read(e);return o(e),r},toWireType:(e,a)=>{if(n!==a.length)throw new TypeError(`Incorrect number of tuple elements for ${r.name}: expected=${n}, actual=${a.length}`);for(var u=i(),s=0;s<n;++s)t[s].write(u,a[s]);return null!==e&&e.push(o,u),u},argPackAdvance:Z,readValueFromPointer:I,destructorFunction:o}]}))},s:e=>{var r=G[e];delete G[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields,i=a.map((e=>e.getterReturnType)).concat(a.map((e=>e.setterArgumentType)));N([e],i,(e=>{var i={};return a.forEach(((r,t)=>{var n=r.fieldName,o=e[t],u=r.getter,s=r.getterContext,l=e[t+a.length],c=r.setter,f=r.setterContext;i[n]={read:e=>o.fromWireType(u(s,e)),write:(e,r)=>{var t=[];c(f,e,l.toWireType(t,r)),$(t)}}})),[{name:r.name,fromWireType:e=>{var r={};for(var t in i)r[t]=i[t].read(e);return n(e),r},toWireType:(e,r)=>{for(var a in i)if(!(a in r))throw new TypeError(`Missing field: "${a}"`);var o=t();for(a in i)i[a].write(o,r[a]);return null!==e&&e.push(n,o),o},argPackAdvance:Z,readValueFromPointer:I,destructorFunction:n}]}))},u:(e,r,t,n,a)=>{},B:(e,r,t,n)=>{X(e,{name:r=q(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?t:n},argPackAdvance:Z,readValueFromPointer:function(e){return this.fromWireType(h[e])},destructorFunction:null})},A:(e,r)=>{X(e,{name:r=q(r),fromWireType:e=>{var r=te(e);return ee(e),r},toWireType:(e,r)=>ne(r),argPackAdvance:Z,readValueFromPointer:I,destructorFunction:null})},r:(e,r,t)=>{X(e,{name:r=q(r),fromWireType:e=>e,toWireType:(e,r)=>r,argPackAdvance:Z,readValueFromPointer:ae(r,t),destructorFunction:null})},c:(e,r,t,n,a,i,o)=>{var u=((e,r)=>{for(var t=[],n=0;n<e;n++)t.push(g[r+4*n>>2]);return t})(r,t);e=q(e),e=pe(e),a=de(n,a),ue(e,(function(){((e,r)=>{var t=[],n={};throw r.forEach((function e(r){n[r]||z[r]||(B[r]?B[r].forEach(e):(t.push(r),n[r]=!0))})),new he(`${e}: `+t.map(ve).join([", "]))})(`Cannot call ${e} due to unbound types`,u)}),r-1),N([],u,(function(t){var n=[t[0],null].concat(t.slice(1));return se(e,function(e,r,t,n,a,i){var o=r.length;o<2&&J("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&null!==t,s=!1,l=1;l<r.length;++l)if(null!==r[l]&&void 0===r[l].destructorFunction){s=!0;break}var c="void"!==r[0].name,f=o-2,d=new Array(f),h=[],v=[];return function(){var t;arguments.length!==f&&J(`function ${e} called with ${arguments.length} arguments, expected ${f}`),v.length=0,h.length=u?2:1,h[0]=a,u&&(t=r[1].toWireType(v,this),h[1]=t);for(var i=0;i<f;++i)d[i]=r[i+2].toWireType(v,arguments[i]),h.push(d[i]);return function(e){if(s)$(v);else for(var n=u?1:2;n<r.length;n++){var a=1===n?t:d[n-2];null!==r[n].destructorFunction&&r[n].destructorFunction(a)}if(c)return r[0].fromWireType(e)}(n.apply(null,h))}}(e,n,null,a,i),r-1),[]}))},f:(e,r,t,n,a)=>{r=q(r);var i=e=>e;if(0===n){var o=32-8*t;i=e=>e<<o>>>o}var u=r.includes("unsigned");X(e,{name:r,fromWireType:i,toWireType:u?function(e,r){return this.name,r>>>0}:function(e,r){return this.name,r},argPackAdvance:Z,readValueFromPointer:me(r,t,0!==n),destructorFunction:null})},b:(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(e){var r=g[e>>2],t=g[e+4>>2];return new n(d.buffer,t,r)}X(e,{name:t=q(t),fromWireType:a,argPackAdvance:Z,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},q:(e,r)=>{var t="std::string"===(r=q(r));X(e,{name:r,fromWireType(e){var r,n=g[e>>2],a=e+4;if(t)for(var i=a,o=0;o<=n;++o){var u=a+o;if(o==n||0==h[u]){var s=be(i,u-i);void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),i=u+1}}else{var l=new Array(n);for(o=0;o<n;++o)l[o]=String.fromCharCode(h[a+o]);r=l.join("")}return Ne(e),r},toWireType(e,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var a="string"==typeof r;a||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||J("Cannot pass non-string to std::string"),n=t&&a?we(r):r.length;var i=Ge(4+n+1),o=i+4;if(g[i>>2]=n,t&&a)((e,r,t)=>{ye(e,h,r,t)})(r,o,n+1);else if(a)for(var u=0;u<n;++u){var s=r.charCodeAt(u);s>255&&(Ne(o),J("String has UTF-16 code units that do not fit in 8 bits")),h[o+u]=s}else for(u=0;u<n;++u)h[o+u]=r[u];return null!==e&&e.push(Ne,i),i},argPackAdvance:Z,readValueFromPointer:ge,destructorFunction(e){Ne(e)}})},o:(e,r,t)=>{var n,a,i,o,u;t=q(t),2===r?(n=Te,a=Ce,o=Fe,i=()=>p,u=1):4===r&&(n=We,a=Ee,o=Pe,i=()=>g,u=2),X(e,{name:t,fromWireType:e=>{for(var t,a=g[e>>2],o=i(),s=e+4,l=0;l<=a;++l){var c=e+4+l*r;if(l==a||0==o[c>>u]){var f=n(s,c-s);void 0===t?t=f:(t+=String.fromCharCode(0),t+=f),s=c+r}}return Ne(e),t},toWireType:(e,n)=>{"string"!=typeof n&&J(`Cannot pass non-string to C++ string type ${t}`);var i=o(n),s=Ge(4+i+r);return g[s>>2]=i>>u,a(n,s+4,i+r),null!==e&&e.push(Ne,s),s},argPackAdvance:Z,readValueFromPointer:I,destructorFunction(e){Ne(e)}})},m:(e,r,t,n,a,i)=>{k[e]={name:q(r),rawConstructor:de(t,n),rawDestructor:de(a,i),elements:[]}},d:(e,r,t,n,a,i,o,u,s)=>{k[e].elements.push({getterReturnType:r,getter:de(t,n),getterContext:a,setterArgumentType:i,setter:de(o,u),setterContext:s})},t:(e,r,t,n,a,i)=>{G[e]={name:q(r),rawConstructor:de(t,n),rawDestructor:de(a,i),fields:[]}},i:(e,r,t,n,a,i,o,u,s,l)=>{G[e].fields.push({fieldName:q(r),getterReturnType:t,getter:de(n,a),getterContext:i,setterArgumentType:o,setter:de(u,s),setterContext:l})},C:(e,r)=>{X(e,{isVoid:!0,name:r=q(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,r)=>{}})},a:ee,n:e=>{e>4&&(Q.get(e).refcount+=1)},D:()=>ne([]),h:e=>ne((e=>{var r=Se[e];return void 0===r?q(e):r})(e)),j:()=>ne({}),e:(e,r,t)=>{e=te(e),r=te(r),t=te(t),e[r]=t},g:(e,r)=>{var t=(e=((e,r)=>{var t=z[e];return void 0===t&&J(r+" has unknown type "+ve(e)),t})(e,"_emval_take_value")).readValueFromPointer(r);return ne(t)},p:()=>{S("")},z:(e,r,t)=>h.copyWithin(e,r,r+t),y:e=>{var r=h.length,t=2147483648;if((e>>>=0)>t)return!1;for(var n=(e,r)=>e+(r-e%r)%r,a=1;a<=4;a*=2){var i=r*(1+.2/a);i=Math.min(i,e+100663296);var o=Math.min(t,n(Math.max(e,i),65536));if(xe(o))return!0}return!1},w:(e,r)=>{var t=0;return je().forEach(((n,a)=>{var i=r+t;g[e+4*a>>2]=i,((e,r)=>{for(var t=0;t<e.length;++t)d[0|r++]=e.charCodeAt(t);d[0|r]=0})(n,i),t+=n.length+1})),0},x:(e,r)=>{var t=je();g[e>>2]=t.length;var n=0;return t.forEach((e=>n+=e.length+1)),g[r>>2]=n,0},v:(e,r,t,n,a)=>Ie(e,r,t,n)},Le=function(){var e={a:Be};function r(e,r){return Le=e.exports,c=Le.E,b(),ie=Le.G,function(e){T.unshift(e)}(Le.F),function(e){if(E--,n.monitorRunDependencies&&n.monitorRunDependencies(E),0==E&&P){var r=P;P=null,r()}}(),Le}if(E++,n.monitorRunDependencies&&n.monitorRunDependencies(E),n.instantiateWasm)try{return n.instantiateWasm(e,r)}catch(i){f(`Module.instantiateWasm callback failed with error: ${i}`),t(i)}return function(e,r,t,n){return e||"function"!=typeof WebAssembly.instantiateStreaming||O(r)||"function"!=typeof fetch?D(r,t,n):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,t).then(n,(function(e){return f(`wasm streaming compile failed: ${e}`),f("falling back to ArrayBuffer instantiation"),D(r,t,n)}))))}(l,x,e,(function(e){r(e.instance)})).catch(t),{}}(),Ne=n._free=e=>(Ne=n._free=Le.H)(e),Ge=n._malloc=e=>(Ge=n._malloc=Le.I)(e),qe=e=>(qe=Le.J)(e);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=Le.K)();var Je,Xe=e=>(Xe=Le.L)(e);function Ze(){function e(){Je||(Je=!0,n.calledRun=!0,_||(M(T),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)W(n.postRun.shift());M(C)}()))}E>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)F(n.preRun.shift());M(A)}(),E>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(n.dynCall_viji=(e,r,t,a,i)=>(n.dynCall_viji=Le.M)(e,r,t,a,i),n.dynCall_ji=(e,r)=>(n.dynCall_ji=Le.N)(e,r),n.dynCall_viijii=(e,r,t,a,i,o,u)=>(n.dynCall_viijii=Le.O)(e,r,t,a,i,o,u),n.dynCall_iiiiij=(e,r,t,a,i,o,u)=>(n.dynCall_iiiiij=Le.P)(e,r,t,a,i,o,u),n.dynCall_iiiiijj=(e,r,t,a,i,o,u,s,l)=>(n.dynCall_iiiiijj=Le.Q)(e,r,t,a,i,o,u,s,l),n.dynCall_iiiiiijj=(e,r,t,a,i,o,u,s,l,c)=>(n.dynCall_iiiiiijj=Le.R)(e,r,t,a,i,o,u,s,l,c),n.addFunction=(e,r)=>{var t=He(e);if(t)return t;var n=(()=>{if(Ve.length)return Ve.pop();try{ie.grow(1)}catch(f){if(!(f instanceof RangeError))throw f;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return ie.length-1})();try{ze(n,e)}catch(f){if(!(f instanceof TypeError))throw f;var a=Ye(e,r);ze(n,a)}return ke.set(e,n),n},n.UTF8ToString=be,P=function e(){Je||Ze(),Je||(P=e)},n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Ze(),e.ready},n.exports=i;const s=(0,o.g)(u.exports),l=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=4001.d82617be.chunk.js.map