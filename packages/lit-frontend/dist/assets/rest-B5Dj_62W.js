(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=globalThis,W=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),G=new WeakMap;let st=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=G.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&G.set(e,t))}return t}toString(){return this.cssText}};const ht=o=>new st(typeof o=="string"?o:o+"",void 0,q),ot=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new st(e,o,q)},ut=(o,t)=>{if(W)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),r=M.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,o.appendChild(s)}},V=W?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ht(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pt,defineProperty:mt,getOwnPropertyDescriptor:gt,getOwnPropertyNames:ft,getOwnPropertySymbols:yt,getPrototypeOf:bt}=Object,y=globalThis,X=y.trustedTypes,$t=X?X.emptyScript:"",H=y.reactiveElementPolyfillSupport,E=(o,t)=>o,z={toAttribute(o,t){switch(t){case Boolean:o=o?$t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},rt=(o,t)=>!pt(o,t),Z={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&mt(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){const{get:r,set:i}=gt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const d=r==null?void 0:r.call(this);i.call(this,n),this.requestUpdate(t,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Z}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const t=bt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const e=this.properties,s=[...ft(e),...yt(e)];for(const r of s)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)e.unshift(V(r))}else t!==void 0&&e.push(V(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var i;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const n=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:z).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:z;this._$Em=r,this[r]=d.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??rt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,n]of r)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[E("elementProperties")]=new Map,w[E("finalized")]=new Map,H==null||H({ReactiveElement:w}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=globalThis,R=k.trustedTypes,F=R?R.createPolicy("lit-html",{createHTML:o=>o}):void 0,it="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,nt="?"+f,_t=`<${nt}>`,_=document,C=()=>_.createComment(""),T=o=>o===null||typeof o!="object"&&typeof o!="function",lt=Array.isArray,wt=o=>lt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",L=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,K=/>/g,b=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,Q=/"/g,at=/^(?:script|style|textarea|title)$/i,St=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),m=St(1),v=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),tt=new WeakMap,$=_.createTreeWalker(_,129);function dt(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return F!==void 0?F.createHTML(t):t}const vt=(o,t)=>{const e=o.length-1,s=[];let r,i=t===2?"<svg>":"",n=x;for(let d=0;d<e;d++){const l=o[d];let c,u,a=-1,p=0;for(;p<l.length&&(n.lastIndex=p,u=n.exec(l),u!==null);)p=n.lastIndex,n===x?u[1]==="!--"?n=J:u[1]!==void 0?n=K:u[2]!==void 0?(at.test(u[2])&&(r=RegExp("</"+u[2],"g")),n=b):u[3]!==void 0&&(n=b):n===b?u[0]===">"?(n=r??x,a=-1):u[1]===void 0?a=-2:(a=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?b:u[3]==='"'?Q:Y):n===Q||n===Y?n=b:n===J||n===K?n=x:(n=b,r=void 0);const g=n===b&&o[d+1].startsWith("/>")?" ":"";i+=n===x?l+_t:a>=0?(s.push(c),l.slice(0,a)+it+l.slice(a)+f+g):l+f+(a===-2?d:g)}return[dt(o,i+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class O{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,n=0;const d=t.length-1,l=this.parts,[c,u]=vt(t,e);if(this.el=O.createElement(c,s),$.currentNode=this.el.content,e===2){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(r=$.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(const a of r.getAttributeNames())if(a.endsWith(it)){const p=u[n++],g=r.getAttribute(a).split(f),P=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:P[2],strings:g,ctor:P[1]==="."?xt:P[1]==="?"?Et:P[1]==="@"?kt:B}),r.removeAttribute(a)}else a.startsWith(f)&&(l.push({type:6,index:i}),r.removeAttribute(a));if(at.test(r.tagName)){const a=r.textContent.split(f),p=a.length-1;if(p>0){r.textContent=R?R.emptyScript:"";for(let g=0;g<p;g++)r.append(a[g],C()),$.nextNode(),l.push({type:2,index:++i});r.append(a[p],C())}}}else if(r.nodeType===8)if(r.data===nt)l.push({type:2,index:i});else{let a=-1;for(;(a=r.data.indexOf(f,a+1))!==-1;)l.push({type:7,index:i}),a+=f.length-1}i++}}static createElement(t,e){const s=_.createElement("template");return s.innerHTML=t,s}}function A(o,t,e=o,s){var n,d;if(t===v)return t;let r=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const i=T(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((d=r==null?void 0:r._$AO)==null||d.call(r,!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=A(o,r._$AS(o,t.values),r,s)),t}class At{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??_).importNode(e,!0);$.currentNode=r;let i=$.nextNode(),n=0,d=0,l=s[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new N(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new Ct(i,this,t)),this._$AV.push(c),l=s[++d]}n!==(l==null?void 0:l.index)&&(i=$.nextNode(),n++)}return $.currentNode=_,r}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),T(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==h&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(dt(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(e);else{const n=new At(r,this),d=n.u(this.options);n.p(e),this.T(d),this._$AH=n}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new O(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new N(this.S(C()),this.S(C()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,r){const i=this.strings;let n=!1;if(i===void 0)t=A(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==v,n&&(this._$AH=t);else{const d=t;let l,c;for(t=i[0],l=0;l<i.length-1;l++)c=A(this,d[s+l],e,l),c===v&&(c=this._$AH[l]),n||(n=!T(c)||c!==this._$AH[l]),c===h?t=h:t!==h&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}n&&!r&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class Et extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class kt extends B{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??h)===v)return;const s=this._$AH,r=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==h&&(s===h||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const I=k.litHtmlPolyfillSupport;I==null||I(O,N),(k.litHtmlVersions??(k.litHtmlVersions=[])).push("3.1.2");const Tt=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const i=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new N(t.insertBefore(C(),i),i,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class S extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return v}}var et;S._$litElement$=!0,S.finalized=!0,(et=globalThis.litElementHydrateSupport)==null||et.call(globalThis,{LitElement:S});const D=globalThis.litElementPolyfillSupport;D==null||D({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var Ot=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Pt=(o,t,e,s)=>{for(var r=s>1?void 0:s?Nt(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&Ot(t,e,r),r};let U=class extends S{constructor(){super(...arguments),this.numberOfSymbols=this.getNumberOfSymbols(),this.listOfNums=[...Array(this.numberOfSymbols+1).keys()],this.allZeros=this.getAllZeros(),this.totalCards=2**this.numberOfSymbols-1,this.deck=[...Array(this.totalCards)].map((o,t)=>t+1),this.hintsGiven=0,this.cardsToShow=this.getCards(),this.solution=this.findSolution(),this.abc=this.darkMode()}getNumberOfSymbols(){var t;let o=(t=document.cookie.split("; ").find(e=>e.startsWith("numberOfSymbols=")))==null?void 0:t.split("=")[1];return o?Number(o):6}getAllZeros(){let o="";for(;o.length<4;)o="0"+o;return o}getCards(){let o=[];for(let t=0;t<this.numberOfSymbols+1;t++)o.push([this.getCard(),!1]);return o}startGame(){this.totalCards=2**this.numberOfSymbols-1,this.deck=[...Array(this.totalCards)].map((o,t)=>t+1),this.hintsGiven=0,this.cardsToShow=this.getCards(),this.solution=this.findSolution();for(let o=0;o<this.cardsToShow.length;o++)document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[o].children[0].style.display="table-row-group",document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[o].children[0].style.borderColor="#555";document.getElementsByTagName("main-game")[0].shadowRoot.children[2].style.display="none",this.requestUpdate()}hasDuplicate(o){let t=o.split(" ");return o.length<3?!0:new Set(t).size!==t.length}findSolution(){if(this.numberOfSymbols<7){let o=this.getCombinations(this.cardsToShow,4,this.numberOfSymbols+1);for(let t=0;t<o.length;t++)if(!this.hasDuplicate(o[t])&&this.checkValid(o[t]))return o[t]}}darkMode(){var t;let o=(t=document.cookie.split("; ").find(e=>e.startsWith("darkMode=")))==null?void 0:t.split("=")[1];console.log("i am reading dark mode as "+o),o&&o=="true"?(document.querySelector(":root").style.setProperty("--primary-color","white"),document.querySelector(":root").style.setProperty("--secondary-color","black"),document.querySelector(":root").style.setProperty("--background-box","#3f3f3f"),document.querySelector(":root").style.setProperty("--button-color","#7b6999"),document.querySelector(":root").style.setProperty("--other-button-color","#ff6565")):(document.querySelector(":root").style.setProperty("--primary-color","black"),document.querySelector(":root").style.setProperty("--secondary-color","white"),document.querySelector(":root").style.setProperty("--background-box","#d4d4d4"),document.querySelector(":root").style.setProperty("--button-color","#ceb0ff"),document.querySelector(":root").style.setProperty("--other-button-color","#ffb1b1"))}checkValid(o){let t=o.split(" "),e=[0,0,0,0,0,0];for(let s=0;s<t.length;s++)for(let r=0;r<e.length;r++)e[r]+=parseInt(t[s][r]);for(let s=0;s<e.length;s++)if(e[s]%2==1)return!1;return!0}getCombinations(o,t,e){return[...Array(e).keys()].reduce(s=>o.concat(s.flatMap(r=>o.map(i=>r+" "+i))),[]).filter(s=>s.length>=t)}getCard(){let o=Math.floor(Math.random()*this.totalCards),t=this.deck[o].toString(2);return t=t.padStart(this.numberOfSymbols,"0"),this.totalCards-=1,this.deck.splice(o,1),t}shuffle(){console.log("shuffle");let o=this.cardsToShow;for(let t=o.length-1;t>0;t--){const e=Math.floor(Math.random()*(t+1));[o[t],o[e]]=[o[e],o[t]]}this.cardsToShow=o;for(let t=0;t<this.cardsToShow.length;t++)this.cardsToShow[t][1]==!0?document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="red":document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="#555";this.requestUpdate()}select(o){document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[o].children[0].style.borderColor=="red"?(document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[o].children[0].style.borderColor="#555",this.cardsToShow[o][1]=!1):(document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[o].children[0].style.borderColor="red",this.cardsToShow[o][1]=!0),this.checkSolution()}checkIfAnySelected(){for(let o=0;o<this.cardsToShow.length;o++)if(this.cardsToShow[o][1]==!0)return!0;return!1}checkSolution(){if(this.checkIfAnySelected()){let o=[0,0,0,0,0,0];for(let e=0;e<this.cardsToShow.length;e++)if(this.cardsToShow[e][1])for(let s=0;s<o.length;s++)o[s]+=parseInt(this.cardsToShow[e][0][s]);let t=!0;for(let e=0;e<o.length;e++)o[e]%2==1&&(t=!1);t==!1?console.log("not valid"):(console.log("valid"),this.isValid())}else console.log("not valid")}isValid(){let o=[];for(let e=0;e<this.cardsToShow.length;e++)this.cardsToShow[e][1]&&o.push(e);for(var t=o.length-1;t>=0;t--)this.cardsToShow.splice(o[t],1);if(this.numberOfSymbols+1-this.cardsToShow.length>this.totalCards)for(;this.totalCards!=0;)console.log(this.totalCards),this.cardsToShow.push([this.getCard(),!1]);else for(;this.cardsToShow.length!=this.numberOfSymbols+1;)console.log(this.totalCards),this.cardsToShow.push([this.getCard(),!1]);for(let e=0;e<this.cardsToShow.length;e++)this.cardsToShow[e][1]==!0?document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[e].children[0].style.borderColor="red":document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[e].children[0].style.borderColor="#555";if(this.cardsToShow.length<this.numberOfSymbols+1)for(var t=this.cardsToShow.length;t<this.numberOfSymbols+1;t++)document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.display="none";this.cardsToShow.length!=0?(this.solution=this.findSolution(),this.hintsGiven=0):document.getElementsByTagName("main-game")[0].shadowRoot.children[2].style.display="block",this.requestUpdate()}inList(o,t){for(let e=0;e<t.length;e++)if(t[e][0]==o[0])return!0;return!1}showSolution(){if(console.log(this.numberOfSymbols),console.log(this.numberOfSymbols<7),this.numberOfSymbols<7){let o=this.solution?this.solution.split(" "):[];for(let t=0;t<o.length;t++)o[t]=o[t].split(",");for(let t=0;t<this.cardsToShow.length;t++)console.log("in a loop"),this.inList(this.cardsToShow[t],o)?document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="blue":document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="#555"}}giveHint(){if(this.numberOfSymbols<7){let o=this.solution?this.solution.split(" "):[];for(let t=0;t<o.length;t++)o[t]=o[t].split(",");for(let t=0;t<this.cardsToShow.length;t++)this.cardsToShow[t][0]==o[this.hintsGiven][0]&&(document.getElementsByTagName("main-game")[0].shadowRoot.children[1].children[t].children[0].style.borderColor="blue");this.hintsGiven+=1}}render(){var r;let o=(r=document.cookie.split("; ").find(i=>i.startsWith("imageStyle=")))==null?void 0:r.split("=")[1];const t=i=>m`
        <button
          class="grid-item image-button"
          @click=${()=>this.select(i)}
        >
          <img
            src="images/cards/${this.numberOfSymbols}_${o||"dot"}_${this.cardsToShow.length>i?this.cardsToShow[i][0]:this.allZeros}.png"
          />
        </button>
      `,e=()=>this.numberOfSymbols>7?m`<button
          class="button"
          style="background-color:grey;"
        >
          SOLUTION
        </button>`:(console.log("returning here"),m`<button class="button" @click=${this.showSolution}>
        SOLUTION
      </button>`),s=()=>this.numberOfSymbols>7?m`<button class="button" style="background-color:grey;" @click=${this.giveHint}>HINT</button>`:m`<button class="button" @click=${this.giveHint}>HINT</button>`;return m`<div class="cards_remaining">
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
        ${s()}
        ${e()}
        <button class="button" @click=${this.startGame}>NEW GAME</button>
      </div>`}};U.styles=ot`
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

    .disabled {
      background-color: grey;
    }
  `;U=Pt([ct("main-game")],U);var Mt=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,Ut=(o,t,e,s)=>{for(var r=s>1?void 0:s?Rt(t,e):t,i=o.length-1,n;i>=0;i--)(n=o[i])&&(r=(s?n(t,e,r):n(r))||r);return s&&r&&Mt(t,e,r),r};let j=class extends S{constructor(){super(...arguments),this._show=!1,this.refresh=!1,this.kindsOfCards=[4,6,8,10],this.imageStyles=["dot","skeleton","butterfly","ladybug"],this.darkMode=this.getDM(),this.t=this.setDarkMode(this.darkMode),this.hardMode=!1}show(){var s;console.log("close rules");let o=(s=document.cookie.split("; ").find(r=>r.startsWith("imageStyle=")))==null?void 0:s.split("=")[1],t="",e=document.getElementById("settings-box").shadowRoot.getElementById("image-style").children;for(let r=0;r<e.length;r++)e[r].selected&&(document.cookie="imageStyle="+e[r].id,t=e[r].id);o&&o!=t&&(this.refresh=!0),document.getElementById("settings-box").shadowRoot.firstChild.nextSibling.classList.add("show"),this.refresh&&location.reload()}getDM(){var t;let o=(t=document.cookie.split("; ").find(e=>e.startsWith("darkMode=")))==null?void 0:t.split("=")[1];return!!(o&&o=="true")}setDarkMode(o){document.cookie="darkMode="+o,new U().darkMode()}toggleDarkMode(){console.log("toggle dark mode"),console.log("dark mode is "+this.darkMode),this.darkMode=!this.darkMode,console.log("setting dark mode to "+this.darkMode),this.setDarkMode(this.darkMode)}toggleHardMode(){var t,e;if(console.log("toggle hard mode"),this.hardMode=!this.hardMode,this.hardMode==!0){let s=(t=document.getElementsByTagName("main-game")[0].shadowRoot)==null?void 0:t.children[1].getElementsByClassName("image-button");for(let r=0;r<s.length;r++){let i=Math.floor(Math.random()*3+1);i==1?s[r].style.transform="scaleX(-1)":i==2?s[r].style.transform="scaleY(-1)":i==3?s[r].style.transform="scale(-1)":s[r].style.transform="scale(1)"}}else{let s=(e=document.getElementsByTagName("main-game")[0].shadowRoot)==null?void 0:e.children[1].getElementsByClassName("image-button");for(var o in s)s[o].style.transform="scale(1)"}}colors(o,t){let e=this.kindsOfCards.indexOf(o),s=t.shadowRoot.children[0].getElementsByClassName("num_colors")[0].getElementsByClassName("color_button");if(console.log(s[e].classList),s[e].classList.contains("selectedW")){for(let r=0;r<s.length;r++)s[r].classList.contains("selectedB")&&(s[r].classList.remove("selectedB"),s[r].classList.add("selectedW"));s[e].classList.remove("selectedW"),s[e].classList.add("selectedB")}document.cookie="numberOfSymbols="+o,this.refresh=!0}getNumberOfSymbols(){var t;let o=(t=document.cookie.split("; ").find(e=>e.startsWith("numberOfSymbols=")))==null?void 0:t.split("=")[1];return o?Number(o):6}render(){let o=this.getNumberOfSymbols();const t=s=>m`
        <button
          class="color_button ${s==o?"selectedB":"selectedW"}"
          @click=${()=>this.colors(s,this)}
        >
          ${s}
        </button>
      `,e=s=>m` <option id="${s}" value="${s}">
        ${s.charAt(0).toUpperCase()+s.slice(1)}
      </option>`;return m`<div class="rule_box show">
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
    </div>`}};j.styles=ot`
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
  `;j=Ut([ct("settings-box")],j);const Bt="http://localhost:3000/api";function Lt(o){return`${Bt}${o}`}export{j as S,Lt as a,rt as f,ot as i,S as s,ct as t,z as u,m as x};
