import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../express-backend/src/models/profile";
import { serverPath } from "./rest";

@customElement("user-statistics")
export class UserStatistics extends LitElement {
  @property()
  path: string = `/profile/${this.getUserId()}`;

  getUserId() {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("userid="))
      ?.split("=")[1];
  }

  @state()
  profile?: Profile;
  render() {
    const profile =
      this.profile ||
      ({
        userid: "",
        name: "",
      } as Profile);

    const {
      dateCreated,
      numGamesStarted,
      numGamesCompleted,
      averageTime,
      longestNoHintStreak,
      longestWinStreak,
      currentWinStreak,
    } = profile;

    return html`
      <section>
        <table>
          <tr>
            <td>User Since</td>
            <td class="test">${dateCreated}</td>
          </tr>
          <tr>
            <td>Number of Games Started</td>
            <td class="test">${numGamesStarted}</td>
          </tr>
          <tr>
            <td>Number of Games Completed</td>
            <td class="test">${numGamesCompleted}</td>
          </tr>
          <tr>
            <td>Average Time to Find a Set</td>
            <td class="test">${averageTime} sec</td>
          </tr>
          <tr>
            <td>Longest No Hint Streak</td>
            <td class="test">${longestNoHintStreak}</td>
          </tr>
          <tr>
            <td>Longest Win Streak</td>
            <td class="test">${longestWinStreak}</td>
          </tr>
          <tr>
            <td>Current Win Streak</td>
            <td class="test">${currentWinStreak}</td>
          </tr>
        </table>
        <div>
          <button @click=${this.returnHome}>Return Home</button>
          <button @click=${this.logout}>Log Out</button>
        </div>
      </section>
    `;
  }

  returnHome() {
    window.location.href = "http://localhost:5173";
  }

  logout() {
    document.cookie = "userid=''";
    window.location.href = "http://localhost:5173";
  }

  static styles = [
    css`
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
    `,
  ];

  _fetchData(path: string) {
    fetch(serverPath(path))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
      });
  }

  connectedCallback() {
    console.log(this.path);
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchData(newValue);
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }
}
