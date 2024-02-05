import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("main-game")
export class MainGame extends LitElement {
  static styles = css`
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
    }
  `;

  totalCards = 63;
  deck = [...Array(63)].map((_, i) => i + 1);
  hintsGiven = 0;

  cardsToShow = [
    [this.getCard(), false],
    [this.getCard(), false],
    [this.getCard(), false],
    [this.getCard(), false],
    [this.getCard(), false],
    [this.getCard(), false],
    [this.getCard(), false],
  ];

  solution = this.findSolution();

  startGame() {
    this.totalCards = 63;
    this.deck = [...Array(63)].map((_, i) => i + 1);
    this.hintsGiven = 0;
  
    this.cardsToShow = [
      [this.getCard(), false],
      [this.getCard(), false],
      [this.getCard(), false],
      [this.getCard(), false],
      [this.getCard(), false],
      [this.getCard(), false],
      [this.getCard(), false],
    ];
  
    this.solution = this.findSolution();
    this.requestUpdate();
  }

  hasDupicate(proposedSol) {
    let proposedSolList = proposedSol.split(" ");
    if (proposedSol.length < 3) {
      return true;
    }
    return new Set(proposedSolList).size !== proposedSolList.length;
  }

  findSolution() {
    let allPossibleCombos = this.getCombinations(this.cardsToShow, 4, 6);
    for (let i = 0; i < allPossibleCombos.length; i++) {
      if (
        !this.hasDupicate(allPossibleCombos[i]) &&
        this.checkValid(allPossibleCombos[i])
      ) {
        return allPossibleCombos[i];
      }
    }
  }

  checkValid(proposedSol) {
    let proposedSolList = proposedSol.split(" ");
    let total = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < proposedSolList.length; i++) {
      for (let j = 0; j < total.length; j++) {
        total[j] += parseInt(proposedSolList[i][j]);
      }
    }
    for (let j = 0; j < total.length; j++) {
      if (total[j] % 2 == 1) {
        return false;
      }
    }
    return true;
  }

  getCombinations(arr, min, max) {
    return [...Array(max).keys()]
      .reduce(
        (result) =>
          arr.concat(
            result.flatMap((val) => arr.map((char) => val + " " + char))
          ),
        []
      )
      .filter((val) => val.length >= min);
  }

  getCard() {
    let index = Math.floor(Math.random() * this.totalCards);
    let value = this.deck[index].toString(2);
    value = value.padStart(6, "0");
    this.totalCards -= 1;
    this.deck.splice(index, 1);
    return value;
  }

  shuffle() {
    console.log("shuffle");
    let array = this.cardsToShow;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.cardsToShow = array;

    for (let i = 0; i < this.cardsToShow.length; i++) {
      if (this.cardsToShow[i][1] == true) {
        document.getElementsByTagName(
          "main-game"
        )[0].shadowRoot!.children[1].children[
          i
        ].children[0]!.style.borderColor = "red";
      } else {
        document.getElementsByTagName(
          "main-game"
        )[0].shadowRoot!.children[1].children[
          i
        ].children[0]!.style.borderColor = "#555";
      }
    }

    this.requestUpdate();
  }

  select0() {
    this.select(0);
  }

  select1() {
    this.select(1);
  }

  select2() {
    this.select(2);
  }

  select3() {
    this.select(3);
  }

  select4() {
    this.select(4);
  }

  select5() {
    this.select(5);
  }

  select6() {
    this.select(6);
  }

  select(index) {
    let color =
      document.getElementsByTagName("main-game")[0].shadowRoot!.children[1]
        .children[index].children[0]!.style.borderColor;
    if (color == "red") {
      document.getElementsByTagName(
        "main-game"
      )[0].shadowRoot!.children[1].children[
        index
      ].children[0]!.style.borderColor = "#555";
      this.cardsToShow[index][1] = false;
    } else {
      document.getElementsByTagName(
        "main-game"
      )[0].shadowRoot!.children[1].children[
        index
      ].children[0]!.style.borderColor = "red";
      this.cardsToShow[index][1] = true;
    }
    this.checkSolution();
  }

  checkIfAnySelected() {
    for (let i = 0; i < this.cardsToShow.length; i++) {
      if (this.cardsToShow[i][1] == true) {
        return true;
      }
    }
    return false;
  }

  checkSolution() {
    if (this.checkIfAnySelected()) {
      let total = [0, 0, 0, 0, 0, 0];
      for (let i = 0; i < this.cardsToShow.length; i++) {
        if (this.cardsToShow[i][1]) {
          for (let j = 0; j < total.length; j++) {
            total[j] += parseInt(this.cardsToShow[i][0][j]);
          }
        }
      }
      let valid = true;
      for (let j = 0; j < total.length; j++) {
        if (total[j] % 2 == 1) {
          valid = false;
        }
      }

      if (valid == false) {
        console.log("not valid");
      } else {
        console.log("valid");
        this.isValid();
      }
    } else {
      console.log("not valid");
    }
  }

  isValid() {
    let indexesToDelete: number[] = [];
    for (let i = 0; i < this.cardsToShow.length; i++) {
      if (this.cardsToShow[i][1]) {
        indexesToDelete.push(i);
      }
    }
    for (var i = indexesToDelete.length - 1; i >= 0; i--) {
      this.cardsToShow.splice(indexesToDelete[i], 1);
    }
    while (this.cardsToShow.length != 7) {
      this.cardsToShow.push([this.getCard(), false]);
    }
    for (let i = 0; i < this.cardsToShow.length; i++) {
      if (this.cardsToShow[i][1] == true) {
        document.getElementsByTagName(
          "main-game"
        )[0].shadowRoot!.children[1].children[
          i
        ].children[0]!.style.borderColor = "red";
      } else {
        document.getElementsByTagName(
          "main-game"
        )[0].shadowRoot!.children[1].children[
          i
        ].children[0]!.style.borderColor = "#555";
      }
    }
    this.solution = this.findSolution();
    this.hintsGiven = 0;
    this.requestUpdate();
  }

  inList(num, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i][0] == num[0]) {
        return true;
      }
    }
    return false;
  }

  showSolution() {
    let solutionList = this.solution.split(" ");
    for (let i = 0; i < solutionList.length; i++) {
      solutionList[i] = solutionList[i].split(",");
    }
    for (let i = 0; i < this.cardsToShow.length; i++) {
      if (this.inList(this.cardsToShow[i], solutionList)) {
        document.getElementsByTagName(
          "main-game"
        )[0].shadowRoot!.children[1].children[
          i
        ].children[0]!.style.borderColor = "blue";
      } else {
        document.getElementsByTagName(
          "main-game"
        )[0].shadowRoot!.children[1].children[
          i
        ].children[0]!.style.borderColor = "#555";
      }
    }
  }

  giveHint() {
    let solutionList = this.solution.split(" ");
    for (let i = 0; i < solutionList.length; i++) {
      solutionList[i] = solutionList[i].split(",");
    }
    for (let i = 0; i < this.cardsToShow.length; i++) {
      if (this.cardsToShow[i][0] == solutionList[this.hintsGiven][0]) {
        document.getElementsByTagName(
          "main-game"
        )[0].shadowRoot!.children[1].children[
          i
        ].children[0]!.style.borderColor = "blue";
      }
    }
    this.hintsGiven += 1;
  }

  render() {
    return html` <div class="cards_remaining">
        <a>NUMBER CARDS REMAINING: ${this.totalCards}</a>
      </div>

      <div class="grid-container">
        <button class="grid-item image-button" @click=${this.select0}>
          <img src="images/dots_binary/6_dot_${this.cardsToShow[0][0]}.png" />
        </button>
        <button class="grid-item image-button" @click=${this.select1}>
          <img src="images/dots_binary/6_dot_${this.cardsToShow[1][0]}.png" />
        </button>
        <button class="grid-item image-button" @click=${this.select2}>
          <img src="images/dots_binary/6_dot_${this.cardsToShow[2][0]}.png" />
        </button>
        <button class="grid-item image-button" @click=${this.select3}>
          <img src="images/dots_binary/6_dot_${this.cardsToShow[3][0]}.png" />
        </button>
        <button class="grid-item image-button" @click=${this.select4}>
          <img src="images/dots_binary/6_dot_${this.cardsToShow[4][0]}.png" />
        </button>
        <button class="grid-item image-button" @click=${this.select5}>
          <img src="images/dots_binary/6_dot_${this.cardsToShow[5][0]}.png" />
        </button>
        <button class="grid-item image-button" @click=${this.select6}>
          <img src="images/dots_binary/6_dot_${this.cardsToShow[6][0]}.png" />
        </button>
        <div class="grid-item"></div>
      </div>

      <div class="play_buttons">
        <button class="button" @click=${this.shuffle}>SHUFFLE</button>
        <button class="button" @click=${this.giveHint}>HINT</button>
        <button class="button" @click=${this.showSolution}>SOLUTION</button>
        <button class="button" @click=${this.startGame}>NEW GAME</button>
      </div>`;
  }
}
