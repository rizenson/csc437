(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,Z=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),Q=new WeakMap;let ct=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Q.set(e,t))}return t}toString(){return this.cssText}};const yt=s=>new ct(typeof s=="string"?s:s+"",void 0,K),E=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((r,o,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[i+1],s[0]);return new ct(e,s,K)},_t=(s,t)=>{if(Z)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),o=B.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,s.appendChild(r)}},tt=Z?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return yt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wt,defineProperty:$t,getOwnPropertyDescriptor:vt,getOwnPropertyNames:St,getOwnPropertySymbols:xt,getPrototypeOf:At}=Object,y=globalThis,et=y.trustedTypes,Et=et?et.emptyScript:"",W=y.reactiveElementPolyfillSupport,T=(s,t)=>s,D={toAttribute(s,t){switch(t){case Boolean:s=s?Et:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Y=(s,t)=>!wt(s,t),rt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&$t(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:i}=vt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return o==null?void 0:o.call(this)},set(n){const a=o==null?void 0:o.call(this);i.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??rt}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,r=[...St(e),...xt(e)];for(const o of r)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(tt(o))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){var i;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const n=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:D).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const n=r.getPropertyOptions(o),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:D;this._$Em=o,this[o]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Y)(this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,n]of o)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$E_)==null||r.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(e)):this._$Ej()}catch(o){throw t=!1,this._$Ej(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(e=>this._$EO(e,this[e]))),this._$Ej()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[T("elementProperties")]=new Map,S[T("finalized")]=new Map,W==null||W({ReactiveElement:S}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,I=P.trustedTypes,st=I?I.createPolicy("lit-html",{createHTML:s=>s}):void 0,ht="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,ut="?"+b,kt=`<${ut}>`,$=document,O=()=>$.createComment(""),N=s=>s===null||typeof s!="object"&&typeof s!="function",pt=Array.isArray,Ct=s=>pt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",q=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,it=/>/g,_=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,lt=/"/g,gt=/^(?:script|style|textarea|title)$/i,Tt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),g=Tt(1),x=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),at=new WeakMap,w=$.createTreeWalker($,129);function mt(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const Pt=(s,t)=>{const e=s.length-1,r=[];let o,i=t===2?"<svg>":"",n=C;for(let a=0;a<e;a++){const l=s[a];let c,u,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,u=n.exec(l),u!==null);)p=n.lastIndex,n===C?u[1]==="!--"?n=ot:u[1]!==void 0?n=it:u[2]!==void 0?(gt.test(u[2])&&(o=RegExp("</"+u[2],"g")),n=_):u[3]!==void 0&&(n=_):n===_?u[0]===">"?(n=o??C,d=-1):u[1]===void 0?d=-2:(d=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?_:u[3]==='"'?lt:nt):n===lt||n===nt?n=_:n===ot||n===it?n=C:(n=_,o=void 0);const f=n===_&&s[a+1].startsWith("/>")?" ":"";i+=n===C?l+kt:d>=0?(r.push(c),l.slice(0,d)+ht+l.slice(d)+b+f):l+b+(d===-2?a:f)}return[mt(s,i+(s[e]||"<?>")+(t===2?"</svg>":"")),r]};class M{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let i=0,n=0;const a=t.length-1,l=this.parts,[c,u]=Pt(t,e);if(this.el=M.createElement(c,r),w.currentNode=this.el.content,e===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=w.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(ht)){const p=u[n++],f=o.getAttribute(d).split(b),R=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:R[2],strings:f,ctor:R[1]==="."?Nt:R[1]==="?"?Mt:R[1]==="@"?Ut:j}),o.removeAttribute(d)}else d.startsWith(b)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(gt.test(o.tagName)){const d=o.textContent.split(b),p=d.length-1;if(p>0){o.textContent=I?I.emptyScript:"";for(let f=0;f<p;f++)o.append(d[f],O()),w.nextNode(),l.push({type:2,index:++i});o.append(d[p],O())}}}else if(o.nodeType===8)if(o.data===ut)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(b,d+1))!==-1;)l.push({type:7,index:i}),d+=b.length-1}i++}}static createElement(t,e){const r=$.createElement("template");return r.innerHTML=t,r}}function A(s,t,e=s,r){var n,a;if(t===x)return t;let o=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const i=N(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(s),o._$AT(s,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=o:e._$Cl=o),o!==void 0&&(t=A(s,o._$AS(s,t.values),o,r)),t}class Ot{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??$).importNode(e,!0);w.currentNode=o;let i=w.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new U(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new Rt(i,this,t)),this._$AV.push(c),l=r[++a]}n!==(l==null?void 0:l.index)&&(i=w.nextNode(),n++)}return w.currentNode=$,o}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),N(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ct(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==h&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$($.createTextNode(t)),this._$AH=t}g(t){var i;const{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=M.createElement(mt(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(e);else{const n=new Ot(o,this),a=n.u(this.options);n.p(e),this.$(a),this._$AH=n}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new M(t)),e}T(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const i of t)o===e.length?e.push(r=new U(this.k(O()),this.k(O()),this,this.options)):r=e[o],r._$AI(i),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(t,e=this,r,o){const i=this.strings;let n=!1;if(i===void 0)t=A(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const a=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=A(this,a[r+l],e,l),c===x&&(c=this._$AH[l]),n||(n=!N(c)||c!==this._$AH[l]),c===h?t=h:t!==h&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}n&&!o&&this.O(t)}O(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nt extends j{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===h?void 0:t}}class Mt extends j{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Ut extends j{constructor(t,e,r,o,i){super(t,e,r,o,i),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??h)===x)return;const r=this._$AH,o=t===h&&r!==h||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==h&&(r===h||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const G=P.litHtmlPolyfillSupport;G==null||G(M,U),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.1.1");const Bt=(s,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const i=(e==null?void 0:e.renderBefore)??null;r._$litPart$=o=new U(t.insertBefore(O(),i),i,void 0,e??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var dt;m._$litElement$=!0,m.finalized=!0,(dt=globalThis.litElementHydrateSupport)==null||dt.call(globalThis,{LitElement:m});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:Y},It=(s=Dt,t,e)=>{const{kind:r,metadata:o}=e;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(e.name,s),r==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,s)},init(a){return a!==void 0&&this.C(n,void 0,s),a}}}if(r==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,s)}}throw Error("Unsupported decorator location: "+r)};function ft(s){return(t,e)=>typeof e=="object"?It(s,t,e):((r,o,i)=>{const n=o.hasOwnProperty(i);return o.constructor.createProperty(i,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(o,i):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht(s){return ft({...s,state:!0,attribute:!1})}var Lt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,zt=(s,t,e,r)=>{for(var o=r>1?void 0:r?jt(t,e):t,i=s.length-1,n;i>=0;i--)(n=s[i])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&Lt(t,e,o),o};let F=class extends m{constructor(){super(...arguments),this._show=!1}show(){console.log("close rules"),document.getElementById("rule-box").shadowRoot.firstChild.nextSibling.classList.add("show")}render(){return g`<div class="rule_box show">
    <p class="welcome">WELCOME TO PROJECTIVE SET</p>
    <h4 class="intro_paragraph">
      Projective Set (sometimes shortened to ProSet) is a real-time card game
      derived from the older game Set. The deck contains cards consisting of
      colored dots; some cards are laid out on the table and players attempt
      to find "Sets" among them. The word projective comes from the game's
      relation to Projective spaces over the finite field with two elements.
    </h4>
    <h4 class="game_goal">
      The goal of the game is to find a set of cards that has an even number
      of every color
    </h4>
    <div class="valid_example">
      <table>
        <tr>
          <td><img src="images/dots/6_dot_27.png" /></td>
          <td><img src="images/dots/6_dot_31.png" /></td>
          <td><img src="images/dots/6_dot_4.png" /></td>
        </tr>
      </table>
      <h4 class="valid_set">VALID SET</h4>
    </div>
    <div class="invalid_example">
      <table>
        <tr>
          <td><img src="images/dots/6_dot_27.png" /></td>
          <td><img src="images/dots/6_dot_31.png" /></td>
          <td><img src="images/dots/6_dot_7.png" /></td>
        </tr>
      </table>
      <h4 class="valid_set">INVALID SET</h4>
    </div>
    <div class="read_more">
      Read more about Projective Set from
      <a
        href="https://en.wikipedia.org/wiki/Projective_Set_(game)"
        target="”_blank”"
        >Wikipedia</a
      ><br />(where the definition of the game is taken from)
    </div>
    <button id="close_popup" @click=${this.show}>X</button>
  </div>`}};F.styles=E`
  .rule_box {
    position: absolute;
    top: 80px;
    left: 210px;
    width: 1000px;
    height: 550px;
    background: var(--background-box);
    border: var(--primary-color) 2px solid;
    display: grid;
    grid-template-columns:
      [border2] 0.5% [start] 3% [column1] 4% [column2] 5% [column3] 32% [column-4]
      10% [column-3] 32% [column-2] 10% [column-1] 3% [end] 0.5% [border];
    grid-template-rows: [border2] 0.1% [start] 5.5% [row1] 5.5% [row2] 15% [row3] 23% [row4] 35% [row-2] 2.7% [row-1] 10% [end] 0.1% [border];
  }
  
  #close_popup {
    grid-column-start: column-1;
    grid-column-end: end;
    grid-row-start: start;
    grid-row-end: row1;
  }
  
  .welcome {
    font-size: 50px;
    grid-column-start: start;
    grid-column-end: end;
    grid-row-start: border2;
    grid-row-end: row1;
    text-align: center;
    margin: 0;
  }
  
  .intro_paragraph {
    grid-column-start: start;
    grid-column-end: end;
    grid-row-start: row2;
    grid-row-end: row3;
    text-align: center;
  }
  
  .game_goal {
    grid-column-start: column1;
    grid-column-end: column-1;
    grid-row-start: row3;
    grid-row-end: end;
    text-align: center;
    font-size: 30px;
  }
  
  .valid_example {
    grid-column-start: column3;
    grid-column-end: column-4;
    grid-row-start: row4;
    grid-row-end: row-2;
    text-align: center;
    background-color: #9bed69;
    display: grid;
  }
  
  .invalid_example {
    grid-column-start: column-3;
    grid-column-end: column-2;
    grid-row-start: row4;
    grid-row-end: row-2;
    text-align: center;
    background-color: #ed6969;
    display: grid;
  }
  
  tr {
    align-items: center;
    align-self: center;
    img {
      width: 80px;
      height: auto;
    }
  }
  
  .valid_set {
    font-size: 40px;
    margin: 0;
  }
  
  .read_more {
    grid-column-start: start;
    grid-column-end: end;
    grid-row-start: row-1;
    grid-row-end: end;
    text-align: center;
  }  
  
  .show { display: none }
  `;F=zt([k("rule-box")],F);var Wt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Gt=(s,t,e,r)=>{for(var o=r>1?void 0:r?qt(t,e):t,i=s.length-1,n;i>=0;i--)(n=s[i])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&Wt(t,e,o),o};let H=class extends m{constructor(){super(...arguments),this.numberOfSymbols=this.getNumberOfSymbols(),this.listOfNums=[...Array(this.numberOfSymbols+1).keys()],this.allZeros=this.getAllZeros(),this.totalCards=2**this.numberOfSymbols-1,this.deck=[...Array(this.totalCards)].map((s,t)=>t+1),this.hintsGiven=0,this.cardsToShow=this.getCards(),this.solution=this.findSolution(),this.abc=this.darkMode()}getNumberOfSymbols(){var t;let s=(t=document.cookie.split("; ").find(e=>e.startsWith("numberOfSymbols=")))==null?void 0:t.split("=")[1];return s?Number(s):6}getAllZeros(){let s="";for(;s.length<4;)s="0"+s;return s}getCards(){let s=[];for(let t=0;t<this.numberOfSymbols+1;t++)s.push([this.getCard(),!1]);return s}startGame(){this.totalCards=2**this.numberOfSymbols-1,this.deck=[...Array(this.totalCards)].map((s,t)=>t+1),this.hintsGiven=0,this.cardsToShow=this.getCards(),this.solution=this.findSolution();for(let s=0;s<this.cardsToShow.length;s++)document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[s].children[0].style.display="table-row-group",document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[s].children[0].style.borderColor="#555";document.getElementsByTagName("main-game")[0].shadowRoot.children[2].style.display="none",this.requestUpdate()}hasDuplicate(s){let t=s.split(" ");return s.length<3?!0:new Set(t).size!==t.length}findSolution(){let s=this.getCombinations(this.cardsToShow,4,this.numberOfSymbols+1);for(let t=0;t<s.length;t++)if(!this.hasDuplicate(s[t])&&this.checkValid(s[t]))return s[t]}darkMode(){var t;let s=(t=document.cookie.split("; ").find(e=>e.startsWith("darkMode=")))==null?void 0:t.split("=")[1];console.log("i am reading dark mode as "+s),s&&s=="true"?(document.querySelector(":root").style.setProperty("--primary-color","white"),document.querySelector(":root").style.setProperty("--secondary-color","black"),document.querySelector(":root").style.setProperty("--background-box","#3f3f3f"),document.querySelector(":root").style.setProperty("--button-color","#7b6999"),document.querySelector(":root").style.setProperty("--other-button-color","#ff6565")):(document.querySelector(":root").style.setProperty("--primary-color","black"),document.querySelector(":root").style.setProperty("--secondary-color","white"),document.querySelector(":root").style.setProperty("--background-box","#d4d4d4"),document.querySelector(":root").style.setProperty("--button-color","#ceb0ff"),document.querySelector(":root").style.setProperty("--other-button-color","#ffb1b1"))}checkValid(s){let t=s.split(" "),e=[0,0,0,0,0,0];for(let r=0;r<t.length;r++)for(let o=0;o<e.length;o++)e[o]+=parseInt(t[r][o]);for(let r=0;r<e.length;r++)if(e[r]%2==1)return!1;return!0}getCombinations(s,t,e){return[...Array(e).keys()].reduce(r=>s.concat(r.flatMap(o=>s.map(i=>o+" "+i))),[]).filter(r=>r.length>=t)}getCard(){let s=Math.floor(Math.random()*this.totalCards),t=this.deck[s].toString(2);return t=t.padStart(this.numberOfSymbols,"0"),this.totalCards-=1,this.deck.splice(s,1),t}shuffle(){console.log("shuffle");let s=this.cardsToShow;for(let t=s.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[s[t],s[e]]=[s[e],s[t]]}this.cardsToShow=s;for(let t=0;t<this.cardsToShow.length;t++)this.cardsToShow[t][1]==!0?document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="red":document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="#555";this.requestUpdate()}select(s){document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[s].children[0].style.borderColor=="red"?(document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[s].children[0].style.borderColor="#555",this.cardsToShow[s][1]=!1):(document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[s].children[0].style.borderColor="red",this.cardsToShow[s][1]=!0),this.checkSolution()}checkIfAnySelected(){for(let s=0;s<this.cardsToShow.length;s++)if(this.cardsToShow[s][1]==!0)return!0;return!1}checkSolution(){if(this.checkIfAnySelected()){let s=[0,0,0,0,0,0];for(let e=0;e<this.cardsToShow.length;e++)if(this.cardsToShow[e][1])for(let r=0;r<s.length;r++)s[r]+=parseInt(this.cardsToShow[e][0][r]);let t=!0;for(let e=0;e<s.length;e++)s[e]%2==1&&(t=!1);t==!1?console.log("not valid"):(console.log("valid"),this.isValid())}else console.log("not valid")}isValid(){let s=[];for(let e=0;e<this.cardsToShow.length;e++)this.cardsToShow[e][1]&&s.push(e);for(var t=s.length-1;t>=0;t--)this.cardsToShow.splice(s[t],1);if(this.numberOfSymbols+1-this.cardsToShow.length>this.totalCards)for(;this.totalCards!=0;)console.log(this.totalCards),this.cardsToShow.push([this.getCard(),!1]);else for(;this.cardsToShow.length!=this.numberOfSymbols+1;)console.log(this.totalCards),this.cardsToShow.push([this.getCard(),!1]);for(let e=0;e<this.cardsToShow.length;e++)this.cardsToShow[e][1]==!0?document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[e].children[0].style.borderColor="red":document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[e].children[0].style.borderColor="#555";if(this.cardsToShow.length<this.numberOfSymbols+1)for(var t=this.cardsToShow.length;t<this.numberOfSymbols+1;t++)document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.display="none";this.cardsToShow.length!=0?(this.solution=this.findSolution(),this.hintsGiven=0):document.getElementsByTagName("main-game")[0].shadowRoot.children[2].style.display="block",this.requestUpdate()}inList(s,t){for(let e=0;e<t.length;e++)if(t[e][0]==s[0])return!0;return!1}showSolution(){let s=this.solution?this.solution.split(" "):[];for(let t=0;t<s.length;t++)s[t]=s[t].split(",");for(let t=0;t<this.cardsToShow.length;t++)this.inList(this.cardsToShow[t],s)?document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="blue":document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="#555"}giveHint(){let s=this.solution?this.solution.split(" "):[];for(let t=0;t<s.length;t++)s[t]=s[t].split(",");for(let t=0;t<this.cardsToShow.length;t++)this.cardsToShow[t][0]==s[this.hintsGiven][0]&&(document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="blue");this.hintsGiven+=1}render(){var e;let s=(e=document.cookie.split("; ").find(r=>r.startsWith("imageStyle=")))==null?void 0:e.split("=")[1];const t=r=>g`
        <button
          class="grid-item image-button"
          @click=${()=>this.select(r)}
        >
          <img
            src="images/cards/${this.numberOfSymbols}_${s||"dot"}_${this.cardsToShow.length>r?this.cardsToShow[r][0]:this.allZeros}.png"
          />
        </button>
      `;return g`<div class="cards_remaining">
        <a>NUMBER CARDS REMAINING: ${this.totalCards}</a>
      </div>

      <div class="grid-container">
        ${this.listOfNums.map(t)}
        <div class="grid-item"></div>
      </div>

      <div class="winner">
        <iframe
          src="https://giphy.com/embed/2gtoSIzdrSMFO"
          width="480"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="play_buttons">
        <button class="button" @click=${this.shuffle}>SHUFFLE</button>
        <button class="button" @click=${this.giveHint}>HINT</button>
        <button class="button" @click=${this.showSolution}>SOLUTION</button>
        <button class="button" @click=${this.startGame}>NEW GAME</button>
      </div>`}};H.styles=E`
    .cards_remaining {
      font-family: "Inter";
      font-size: 30px;
      padding-top: 1%;
      text-align: center;
    }

    .center_buttons {
      text-align: center;
      .button {
        background-color: var(--button-color);
        margin-right: 30px;
        margin-left: 30px;
      }
    }

    .play_buttons {
      text-align: center;
      margin-top: 3%;
      .button {
        background-color: var(--other-button-color);
        margin-right: 10px;
        margin-left: 10px;
      }
    }

    .button {
      border: 2px solid var(--primary-color);
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      width: 200px;
      height: 50px;
      display: inline;
      border-radius: 10px;
      padding: 0;
    }

    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto auto;
      padding: 10px;
      padding-top: 30px;
      width: 40%;
      margin: auto;
      /* border: 2px solid black; */
    }

    .grid-item {
      /* background-color: rgba(255, 255, 255, 0.8); */
      /* border: 1px solid rgba(0, 0, 0, 0.8); */
      font-size: 30px;
      text-align: center;
      img {
        height: 150px;
        width: auto;
        border: 5px solid #555;
      }
    }

    svg.icon {
      display: inline;
      height: 1.5em;
      width: 1.5em;
      vertical-align: top;
      fill: currentColor;
      background-color: transparent;
    }
    * {
      font-family: "JetBrains Mono";
      color: var(--primary-color);
      background-color: var(--secondary-color);
    }

    .image-button {
      border: 0px;
      transform: scale(1);
      display: table-row-group;
    }

    .winner {
      text-align: center;
      display: none;
    }
  `;H=Gt([k("main-game")],H);var Vt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,Jt=(s,t,e,r)=>{for(var o=r>1?void 0:r?Ft(t,e):t,i=s.length-1,n;i>=0;i--)(n=s[i])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&Vt(t,e,o),o};let L=class extends m{constructor(){super(...arguments),this._show=!1,this.refresh=!1,this.kindsOfCards=[4,6,8,10],this.imageStyles=["dot","skeleton","butterfly","ladybug"],this.darkMode=this.getDM(),this.t=this.setDarkMode(this.darkMode),this.hardMode=!1}show(){var r;console.log("close rules");let s=(r=document.cookie.split("; ").find(o=>o.startsWith("imageStyle=")))==null?void 0:r.split("=")[1],t="",e=document.getElementById("settings-box").shadowRoot.getElementById("image-style").children;for(let o=0;o<e.length;o++)e[o].selected&&(document.cookie="imageStyle="+e[o].id,t=e[o].id);s&&s!=t&&(this.refresh=!0),document.getElementById("settings-box").shadowRoot.firstChild.nextSibling.classList.add("show"),this.refresh&&location.reload()}getDM(){var t;let s=(t=document.cookie.split("; ").find(e=>e.startsWith("darkMode=")))==null?void 0:t.split("=")[1];return!!(s&&s=="true")}setDarkMode(s){document.cookie="darkMode="+s,new H().darkMode()}toggleDarkMode(){console.log("toggle dark mode"),console.log("dark mode is "+this.darkMode),this.darkMode=!this.darkMode,console.log("setting dark mode to "+this.darkMode),this.setDarkMode(this.darkMode)}toggleHardMode(){var t,e;if(console.log("toggle hard mode"),this.hardMode=!this.hardMode,this.hardMode==!0){let r=(t=document.getElementsByTagName("main-game")[0].shadowRoot)==null?void 0:t.children[1].getElementsByClassName("image-button");for(let o=0;o<r.length;o++){let i=Math.floor(Math.random()*3+1);i==1?r[o].style.transform="scaleX(-1)":i==2?r[o].style.transform="scaleY(-1)":i==3?r[o].style.transform="scale(-1)":r[o].style.transform="scale(1)"}}else{let r=(e=document.getElementsByTagName("main-game")[0].shadowRoot)==null?void 0:e.children[1].getElementsByClassName("image-button");for(var s in r)r[s].style.transform="scale(1)"}}colors(s,t){let e=this.kindsOfCards.indexOf(s),r=t.shadowRoot.children[0].getElementsByClassName("num_colors")[0].getElementsByClassName("color_button");if(console.log(r[e].classList),r[e].classList.contains("selectedW")){for(let o=0;o<r.length;o++)r[o].classList.contains("selectedB")&&(r[o].classList.remove("selectedB"),r[o].classList.add("selectedW"));r[e].classList.remove("selectedW"),r[e].classList.add("selectedB")}document.cookie="numberOfSymbols="+s,this.refresh=!0}getNumberOfSymbols(){var t;let s=(t=document.cookie.split("; ").find(e=>e.startsWith("numberOfSymbols=")))==null?void 0:t.split("=")[1];return s?Number(s):6}render(){let s=this.getNumberOfSymbols();const t=r=>g`
        <button
          class="color_button ${r==s?"selectedB":"selectedW"}"
          @click=${()=>this.colors(r,this)}
        >
          ${r}
        </button>
      `,e=r=>g` <option id="${r}" value="${r}">
        ${r.charAt(0).toUpperCase()+r.slice(1)}
      </option>`;return g`<div class="rule_box show">
      <p class="welcome">SETTINGS</p>
      <table class="setting_table">
        <tr>
          <td class="setting_name">Number of Colors</td>
          <td class="num_colors">${this.kindsOfCards.map(t)}</td>
        </tr>
        <tr>
          <td class="setting_name">Image Style</td>
          <td class="image-style">
            <select id="image-style">
              ${this.imageStyles.map(e)}
            </select>
          </td>
        </tr>
        <tr>
          <td class="setting_name">Arrangement</td>
          <td class="arrangement">
            <select id="cars" name="cars" class="">
              <option>7</option>
              <option>3, 4</option>
              <option selected>4, 3</option>
              <option>2, 3, 2</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="setting_name">Hard Mode</td>
          <td class="hard_mode">
            <label class="switch">
              <input type="checkbox" @click=${this.toggleHardMode} />
              <span class="slider round"></span>
            </label>
          </td>
        </tr>
        <tr>
          <td class="setting_name">Dark Mode</td>
          <td class="dark_mode">
            <label class="switch">
              <input
                id="darkMode"
                type="checkbox"
                @click=${this.toggleDarkMode}
              />
              <span class="slider round"></span>
            </label>
          </td>
        </tr>
      </table>
      <button id="close_popup" @click=${this.show}>X</button>
    </div>`}};L.styles=E`
    .rule_box {
      position: absolute;
      top: 80px;
      left: 210px;
      width: 1000px;
      height: 550px;
      background: var(--background-box);
      border: var(--primary-color) 2px solid;
      display: grid;
      grid-template-columns:
        [border2] 0.5% [start] 3% [column1] 4% [column2] 5% [column3] 32% [column-4]
        10% [column-3] 32% [column-2] 10% [column-1] 3% [end] 0.5% [border];
      grid-template-rows: [border2] 0.1% [start] 5.5% [row1] 5.5% [row2] 15% [row3] 23% [row4] 35% [row-2] 2.7% [row-1] 10% [end] 0.1% [border];
    }

    #close_popup {
      grid-column-start: column-1;
      grid-column-end: end;
      grid-row-start: start;
      grid-row-end: row1;
    }

    .welcome {
      font-size: 50px;
      grid-column-start: start;
      grid-column-end: end;
      grid-row-start: border2;
      grid-row-end: row1;
      text-align: center;
      margin: 0;
    }

    .intro_paragraph {
      grid-column-start: start;
      grid-column-end: end;
      grid-row-start: row2;
      grid-row-end: row3;
      text-align: center;
    }

    .game_goal {
      grid-column-start: column1;
      grid-column-end: column-1;
      grid-row-start: row3;
      grid-row-end: end;
      text-align: center;
      font-size: 30px;
    }

    .valid_example {
      grid-column-start: column3;
      grid-column-end: column-4;
      grid-row-start: row4;
      grid-row-end: row-2;
      text-align: center;
      background-color: #9bed69;
      display: grid;
    }

    .invalid_example {
      grid-column-start: column-3;
      grid-column-end: column-2;
      grid-row-start: row4;
      grid-row-end: row-2;
      text-align: center;
      background-color: #ed6969;
      display: grid;
    }

    tr {
      align-items: center;
      align-self: center;
      img {
        width: 80px;
        height: auto;
      }
    }

    .valid_set {
      font-size: 40px;
      margin: 0;
    }

    .read_more {
      grid-column-start: start;
      grid-column-end: end;
      grid-row-start: row-1;
      grid-row-end: end;
      text-align: center;
    }

    .show {
      display: none;
    }

    .rule_box {
      position: absolute;
      top: 80px;
      left: 210px;
      width: 1000px;
      height: 550px;
      background: var(--background-box);
      border: var(--primary-color) 2px solid;
      display: grid;
      grid-template-columns: [border2] 3% [start] auto [end] 3% [border];
      grid-template-rows: [border2] 0.1% [xy] 5.5% [yz] 9.4% [start] auto [end] 5% [border];
    }

    table,
    tr,
    td {
      // border: 1px solid var(--primary-color);
      table-layout: fixed;
      width: 100%;
    }

    tr {
      padding: 15px;
    }

    .setting_table {
      grid-column-start: start;
      grid-column-end: end;
      grid-row-start: start;
      grid-row-end: end;
      height: auto;
    }

    .setting_name {
      font-size: 35px;
      line-height: 200%;
    }

    .num_colors {
      text-align: center;
    }

    .color_button {
      border: 2px solid var(--primary-color);
      text-align: center;
      font-size: 20px;
      cursor: pointer;
      width: 50px;
      height: 50px;
      display: inline;
      border-radius: 10px;
      padding: 0;
      margin: 10px;
      background-color: var(--secondary-color);
      color: var(--primary-color);
    }

    .selected {
      background-color: var(--primary-color);
      color: var(--secondary-color);
    }

    .show {
      display: none;
    }

    .dark_mode,
    .hard_mode,
    .image-style,
    .arrangement {
      text-align: center;
    }

    /* The switch - the box around the slider */
    .switch {
      position: relative;
      display: inline-block;
      width: 80px;
      height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.1s;
      transition: 0.1s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: var(--secondary-color);
      -webkit-transition: 0.1s;
      transition: 0.1s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: var(--primary-color);
    }

    input:focus + .slider {
      box-shadow: 0 0 1px var(--primary-color);
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(46px);
      -ms-transform: translateX(46px);
      transform: translateX(46px);
    }

    #close_popup {
      grid-column-start: column-1;
      grid-column-end: end;
      grid-row-start: xy;
      grid-row-end: yz;
    }

    .selectedB {
      background-color: black;
      color: white;
    }

    .selectedW {
      background-color: white;
      color: black;
    }
    select {
      width: 250px;
      height: 40px;
      text-align: center;
    }
  `;L=Jt([k("settings-box")],L);const Xt="http://localhost:3000/api";function bt(s){return`${Xt}${s}`}var Zt=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,z=(s,t,e,r)=>{for(var o=r>1?void 0:r?Kt(t,e):t,i=s.length-1,n;i>=0;i--)(n=s[i])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&Zt(t,e,o),o};let v=class extends m{constructor(){super(...arguments),this.path=`/profile/${this.getUserId()}`,this.abc=this.darkMode()}getUserId(){var s;return(s=document.cookie.split("; ").find(t=>t.startsWith("userid=")))==null?void 0:s.split("=")[1]}darkMode(){var e;let s=new L,t=(e=document.cookie.split("; ").find(r=>r.startsWith("darkMode=")))==null?void 0:e.split("=")[1];console.log(t),s.setDarkMode(!!(t&&t=="true"))}render(){const s=this.profile||{userid:"",name:""},{userid:t,name:e,password:r}=s,o=e.split(" ")[0];return g`
      <section>
        <div class="title">Welcome ${o}!</div>
        <table>
          <tr>
            <td>Username</td>
            <td class="test">${t}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td class="test">${e}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td class="test">${this.printablePassword(r)}</td>
          </tr>
        </table>
        <div>
          <button @click=${this.editProfile}>Edit Profile</button>
        </div>
      </section>
    `}editProfile(){document.getElementsByTagName("user-profile")[0].style.display="none",document.getElementsByTagName("user-profile-edit")[0].style.display="grid"}printablePassword(s){if(s){let t="";for(let e=0;e<s.length;e++)t+="*";return t}return""}_fetchData(s){fetch(bt(s)).then(t=>t.status===200?t.json():null).then(t=>{t&&(this.profile=t)})}connectedCallback(){console.log(this.path),this.path&&this._fetchData(this.path),super.connectedCallback()}attributeChangedCallback(s,t,e){s==="path"&&t!==e&&t&&this._fetchData(e),super.attributeChangedCallback(s,t,e)}};v.styles=[E`
      table {
        width: 65%;
        text-align: center;
        padding-left: 35%;
        font-size: larger;
        line-height: 45px;
      }
      td {
        text-align: left;
      }
      .test {
        text-align: right;
      }
      button {
        border: 2px solid black;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
        width: 200px;
        height: 50px;
        display: inline;
        border-radius: 10px;
        padding: 0;
        font-family: "JetBrains Mono";
      }
      div {
        text-align: center;
      }
      .title {
        font-size: 40px;
      }
    `];z([ft()],v.prototype,"path",2);z([Ht()],v.prototype,"profile",2);v=z([k("user-profile")],v);let J=class extends v{render(){const s=this.profile||{},{userid:t,name:e}=s,r=e.split(" ")[0];return console.log("Rendering form",this.profile),g`
      <section>
        <div class="title">Welcome ${r}!</div>
        <form @submit=${this._handleSubmit}>
          <table>
            <tr>
              <td>Username</td>
              <td class="test">${t}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td class="test"><input name="name" .value=${e} /></td>
            </tr>
            <tr>
              <td>New Password</td>
              <td class="test"><input name="password" /></td>
            </tr>
          </table>
          <button type="submit">Submit</button>
        </form>
        <div class="cancel">
          <button @click="${this.cancel}">Cancel</button>
        </div>
      </section>
    `}cancel(){document.getElementsByTagName("user-profile")[0].style.display="grid",document.getElementsByTagName("user-profile-edit")[0].style.display="none"}_handleSubmit(s){s.preventDefault();const t=s.target,e=new FormData(t);let r=Array.from(e.entries()).map(([i,n])=>n===""?[i]:[i,n]);const o=Object.fromEntries(r);console.log("Submitting Form",o),this._putData(o),document.getElementsByTagName("user-profile")[0].style.display="grid",document.getElementsByTagName("user-profile-edit")[0].style.display="none",window.location.href="http://localhost:5173/profile.html"}_putData(s){var e;const t=(e=document.cookie.split("; ").find(r=>r.startsWith("userid=")))==null?void 0:e.split("=")[1];fetch(bt(`/profiles/${t}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(r=>r.status===200?r.json():null).then(r=>{r&&(console.log("PUT request successful:",r),this.profile=r)}).catch(r=>console.log("Failed to POST form data",r))}};J.styles=[...v.styles,E`
      form {
        text-align: center;
        display: block;
      }
      button {
        grid-column: value;
        width: 10em;
      }
      input {
        font: inherit;
      }
      .title {
        font-size: 50px;
      }
      td {
        input {
          text-align: right;
        }
      }
      .title {
        font-size: 40px;
      }
      .cancel {
        text-align: center;
      }
    `];J=z([k("user-profile-edit")],J);var Yt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,te=(s,t,e,r)=>{for(var o=r>1?void 0:r?Qt(t,e):t,i=s.length-1,n;i>=0;i--)(n=s[i])&&(o=(r?n(t,e,o):n(o))||o);return r&&o&&Yt(t,e,o),o};let X=class extends m{getUserId(){var t;let s=(t=document.cookie.split("; ").find(e=>e.startsWith("userid=")))==null?void 0:t.split("=")[1];return s&&s!="''"?s:null}render(){return g` <a
      href="${this.getUserId()?"/profile.html":"/login.html"}"
      style="text-decoration: none"
    >
      <button class="button">
        <svg class="icon">
          <use href="/images/icons.svg#icon-profile" />
        </svg>
        ${this.getUserId()?this.getUserId():"LOG IN"}
      </button>
    </a>`}};X.styles=E`
    .button {
      border: 2px solid var(--primary-color);
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      width: 200px;
      height: 50px;
      display: inline;
      border-radius: 10px;
      padding: 0;
      background-color: var(--button-color);
      margin-right: 30px;
      margin-left: 30px;
    }
    svg.icon {
      display: inline;
      height: 1.5em;
      width: 1.5em;
      vertical-align: top;
      fill: currentColor;
      background-color: transparent;
    }
    * {
      font-family: "JetBrains Mono";
      color: var(--primary-color);
      background-color: var(--secondary-color);
    }
  `;X=te([k("log-in-button")],X);
