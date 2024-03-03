import{u as b,f as y,i as u,s as P,S as v,x as f,a as h,t as m}from"./rest-BNxykyPA.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},w=(e=x,t,s)=>{const{kind:r,metadata:i}=s;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(s.name,e),r==="accessor"){const{name:n}=s;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,c,e)},init(l){return l!==void 0&&this.P(n,void 0,e),l}}}if(r==="setter"){const{name:n}=s;return function(l){const c=this[n];t.call(this,l),this.requestUpdate(n,c,e)}}throw Error("Unsupported decorator location: "+r)};function g(e){return(t,s)=>typeof s=="object"?w(e,t,s):((r,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _(e){return g({...e,state:!0,attribute:!1})}var $=Object.defineProperty,E=Object.getOwnPropertyDescriptor,d=(e,t,s,r)=>{for(var i=r>1?void 0:r?E(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(i=(r?n(t,s,i):n(i))||i);return r&&i&&$(t,s,i),i};let a=class extends P{constructor(){super(...arguments),this.path=`/profile/${this.getUserId()}`,this.abc=this.darkMode()}getUserId(){var e;return(e=document.cookie.split("; ").find(t=>t.startsWith("userid=")))==null?void 0:e.split("=")[1]}darkMode(){var s;let e=new v,t=(s=document.cookie.split("; ").find(r=>r.startsWith("darkMode=")))==null?void 0:s.split("=")[1];console.log(t),e.setDarkMode(!!(t&&t=="true"))}render(){const e=this.profile||{userid:"",name:""},{userid:t,name:s,password:r}=e,i=s.split(" ")[0];return f`
      <section>
        <div class="title">Welcome ${i}!</div>
        <table>
          <tr>
            <td>Username</td>
            <td class="test">${t}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td class="test">${s}</td>
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
    `}editProfile(){document.getElementsByTagName("user-profile")[0].style.display="none",document.getElementsByTagName("user-profile-edit")[0].style.display="grid"}printablePassword(e){if(e){let t="";for(let s=0;s<e.length;s++)t+="*";return t}return""}_fetchData(e){fetch(h(e)).then(t=>t.status===200?t.json():null).then(t=>{t&&(this.profile=t)})}connectedCallback(){console.log(this.path),this.path&&this._fetchData(this.path),super.connectedCallback()}attributeChangedCallback(e,t,s){e==="path"&&t!==s&&t&&this._fetchData(s),super.attributeChangedCallback(e,t,s)}};a.styles=[u`
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
    `];d([g()],a.prototype,"path",2);d([_()],a.prototype,"profile",2);a=d([m("user-profile")],a);let p=class extends a{render(){const e=this.profile||{},{userid:t,name:s}=e,r=s.split(" ")[0];return console.log("Rendering form",this.profile),f`
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
              <td class="test"><input name="name" .value=${s} /></td>
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
    `}cancel(){document.getElementsByTagName("user-profile")[0].style.display="grid",document.getElementsByTagName("user-profile-edit")[0].style.display="none"}_handleSubmit(e){e.preventDefault();const t=e.target,s=new FormData(t);let r=Array.from(s.entries()).map(([o,n])=>n===""?[o]:[o,n]);const i=Object.fromEntries(r);console.log("Submitting Form",i),this._putData(i),document.getElementsByTagName("user-profile")[0].style.display="grid",document.getElementsByTagName("user-profile-edit")[0].style.display="none",window.location.href="profile.html"}_putData(e){var s;const t=(s=document.cookie.split("; ").find(r=>r.startsWith("userid=")))==null?void 0:s.split("=")[1];fetch(h(`/profiles/${t}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(r=>r.status===200?r.json():null).then(r=>{r&&(console.log("PUT request successful:",r),this.profile=r)}).catch(r=>console.log("Failed to POST form data",r))}};p.styles=[...a.styles,u`
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
    `];p=d([m("user-profile-edit")],p);export{g as n,_ as r};
