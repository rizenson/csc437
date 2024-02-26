import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { MainGame } from "./mainGame";

@customElement("settings-box")
export class SettingsBox extends LitElement {
  _show = false;
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
  `;

  refresh = false;
  kindsOfCards = [4, 6, 8, 10];
  imageStyles = ["dot", "skeleton", "butterfly", "ladybug"];

  show() {
    console.log("close rules");

    let is = document.cookie
      .split("; ")
      .find((row) => row.startsWith("imageStyle="))
      ?.split("=")[1];

    let temp = "";

    let styles = document
      .getElementById("settings-box")!
      .shadowRoot!.getElementById("image-style")!.children;
    for (let j = 0; j < styles.length; j++) {
      if (styles[j].selected) {
        document.cookie = "imageStyle=" + styles[j].id;
        temp = styles[j].id;
      }
    }

    if (is && is != temp) {
      this.refresh = true;
    }

    document
      .getElementById("settings-box")!!
      .shadowRoot!!.firstChild!!.nextSibling!!.classList.add("show");
    if (this.refresh) {
      location.reload();
    }
  }

  getDM() {
    let dm = document.cookie
      .split("; ")
      .find((row) => row.startsWith("darkMode="))
      ?.split("=")[1];
    return dm ? dm : false;
  }

  darkMode = this.getDM();
  t = this.setDarkMode(this.darkMode);

  setDarkMode(mode) {
    document.cookie = "darkMode=" + mode;
    let abc = new MainGame().darkMode();
  }

  toggleDarkMode() {
    console.log("toggle dark mode");
    this.darkMode = !this.darkMode;
    this.setDarkMode(this.darkMode);
  }

  hardMode = false;

  toggleHardMode() {
    console.log("toggle hard mode");
    this.hardMode = !this.hardMode;
    if (this.hardMode == true) {
      let cards = document
        .getElementsByTagName("main-game")[0]
        .shadowRoot?.children[1].getElementsByClassName("image-button")!;
      for (let j = 0; j < cards.length; j++) {
        let rand = Math.floor(Math.random() * 3 + 1);
        if (rand == 1) {
          cards[j]!.style!.transform = "scaleX(-1)";
        } else if (rand == 2) {
          cards[j]!.style!.transform = "scaleY(-1)";
        } else if (rand == 3) {
          cards[j]!.style!.transform = "scale(-1)";
        } else {
          cards[j]!.style!.transform = "scale(1)";
        }
      }
    } else {
      let cards = document
        .getElementsByTagName("main-game")[0]
        .shadowRoot?.children[1].getElementsByClassName("image-button");
      for (var card in cards) {
        cards[card]!.style!.transform = "scale(1)";
      }
    }
  }

  colors(num, event) {
    let index = this.kindsOfCards.indexOf(num);
    let options = event.shadowRoot.children[0]
      .getElementsByClassName("num_colors")[0]
      .getElementsByClassName("color_button");
    console.log(options[index].classList);
    if (options[index].classList.contains("selectedW")) {
      for (let j = 0; j < options.length; j++) {
        if (options[j].classList.contains("selectedB")) {
          options[j].classList.remove("selectedB");
          options[j].classList.add("selectedW");
        }
      }
      options[index].classList.remove("selectedW");
      options[index].classList.add("selectedB");
    }

    document.cookie = "numberOfSymbols=" + num;

    this.refresh = true;
  }

  getNumberOfSymbols() {
    let num = document.cookie
      .split("; ")
      .find((row) => row.startsWith("numberOfSymbols="))
      ?.split("=")[1];
    return num ? Number(num) : 6;
  }

  render() {
    let abc = this.getNumberOfSymbols();
    const renderButtons = (index: number) => {
      return html`
        <button
          class="color_button ${index == abc ? "selectedB" : "selectedW"}"
          @click=${() => this.colors(index, this)}
        >
          ${index}
        </button>
      `;
    };

    const renderImageStyles = (index: string) => {
      return html` <option id="${index}" value="${index}">
        ${index.charAt(0).toUpperCase() + index.slice(1)}
      </option>`;
    };

    return html`<div class="rule_box show">
      <p class="welcome">SETTINGS</p>
      <table class="setting_table">
        <tr>
          <td class="setting_name">Number of Colors</td>
          <td class="num_colors">${this.kindsOfCards.map(renderButtons)}</td>
        </tr>
        <tr>
          <td class="setting_name">Image Style</td>
          <td class="image-style">
            <select id="image-style">
              ${this.imageStyles.map(renderImageStyles)}
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
    </div>`;
  }
}
