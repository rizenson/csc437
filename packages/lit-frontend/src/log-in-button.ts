import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("log-in-button")
export class LogInButton extends LitElement {
  static styles = css`
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
  `;

  getUserId() {
    let userId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userid="))
      ?.split("=")[1];
    return userId && userId != "''" ? userId : null;
  }

  render() {
    return html` <a
      href="${this.getUserId() ? "/profile.html" : "/login.html"}"
      style="text-decoration: none"
    >
      <button class="button">
        <svg class="icon">
          <use href="/images/icons.svg#icon-profile" />
        </svg>
        ${this.getUserId() ? this.getUserId() : "LOG IN"}
      </button>
    </a>`;
  }
}
