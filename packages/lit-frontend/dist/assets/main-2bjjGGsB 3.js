import{i as l,s as c,x as g,t as m}from"./rest-eYXrUR7V.js";import"./user-profile-Hxf4dYVI.js";var p=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h=(t,e,o,i)=>{for(var r=i>1?void 0:i?u(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&p(e,o,r),r};let a=class extends c{constructor(){super(...arguments),this._show=!1}show(){console.log("close rules"),document.getElementById("rule-box").shadowRoot.firstChild.nextSibling.classList.add("show")}render(){return g`<div class="rule_box show">
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
        <td><img src="images/cards/6_dot_011011.png" /></td>
        <td><img src="images/cards/6_dot_011111.png" /></td>
        <td><img src="images/cards/6_dot_000100.png" /></td>
        </tr>
      </table>
      <h4 class="valid_set">VALID SET</h4>
    </div>
    <div class="invalid_example">
      <table>
        <tr>
        <td><img src="images/cards/6_dot_011011.png" /></td>
        <td><img src="images/cards/6_dot_011111.png" /></td>
        <td><img src="images/cards/6_dot_000111.png" /></td>
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
  </div>`}};a.styles=l`
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
  `;a=h([m("rule-box")],a);var w=Object.defineProperty,v=Object.getOwnPropertyDescriptor,_=(t,e,o,i)=>{for(var r=i>1?void 0:i?v(e,o):e,n=t.length-1,s;n>=0;n--)(s=t[n])&&(r=(i?s(e,o,r):s(r))||r);return i&&r&&w(e,o,r),r};let d=class extends c{getUserId(){var e;let t=(e=document.cookie.split("; ").find(o=>o.startsWith("userid=")))==null?void 0:e.split("=")[1];return t&&t!="''"?t:null}render(){return g` <a
      href="${this.getUserId()?"/profile.html":"/login.html"}"
      style="text-decoration: none"
    >
      <button class="button">
        <svg class="icon">
          <use href="/images/icons.svg#icon-profile" />
        </svg>
        ${this.getUserId()?this.getUserId():"LOG IN"}
      </button>
    </a>`}};d.styles=l`
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
  `;d=_([m("log-in-button")],d);
