import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';

@customElement("rule-box")
export class RuleBox extends LitElement {
  _show = false
  static styles = css`
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
  `;
  show() {
    console.log("close rules");
    document.getElementById('rule-box')!!.shadowRoot!!.firstChild!!.nextSibling!!.classList.add("show");
  }

  render() {
    return html`<div class="rule_box show">
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
  </div>`;
  }
}
