import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { serverPath } from "./rest";
import { Profile } from "../../express-backend/src/models/profile";
import { SettingsBox } from "./settings";

@customElement("login-page")
export class LoginPage extends LitElement {
  darkMode() {
    let settings = new SettingsBox();

    let darkMode = document.cookie
      .split("; ")
      .find((row) => row.startsWith("darkMode="))
      ?.split("=")[1];
    settings.setDarkMode(darkMode && darkMode == "true" ? true : false);
  }
  _show = false;
  static styles = css`
    .log-in-body {
      text-align: center;
      width: 100%;
      height: 100%;
      margin-top: 8%;
    }

    .title {
      font-size: 40px;
    }

    label {
      margin-right: 10px;
      font-size: 30px;
    }

    input {
      border-radius: 5px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 50px;
      margin-bottom: 1%;
      margin-top: 2%;
    }

    .center {
      text-align: center;
    }

    button {
      border: 2px solid black;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      width: 100px;
      height: 25px;
      display: inline;
      border-radius: 5px;
      padding: 0;
    }

    .incorrect {
      padding-top: 2%;
      text-align: center;
      color: red;
      display: none;
    }
  `;

  abc = this.darkMode();

  getData(): Map<string, any> {
    let myMap = new Map<string, any>();
    myMap.set(
      "name",
      (
        document
          .getElementsByTagName("login-page")[0]
          .shadowRoot?.children[1].getElementsByClassName(
            "name"
          )[0] as HTMLInputElement
      ).value
    );
    myMap.set(
      "userid",
      (
        document
          .getElementsByTagName("login-page")[0]
          .shadowRoot?.children[1].getElementsByClassName(
            "username"
          )[0] as HTMLInputElement
      ).value
    );
    myMap.set(
      "password",
      (
        document
          .getElementsByTagName("login-page")[0]
          .shadowRoot?.children[1].getElementsByClassName(
            "password"
          )[0] as HTMLInputElement
      ).value
    );
    return myMap;
  }

  login() {
    const data = this.getData();
    fetch(serverPath(`/profile/${data.get("userid")}`), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: Profile) => {
        if (json) {
          console.log(json.password);
          if (json.password == data.get("password")) {
            document.cookie = "userid=" + data.get("userid");
            window.location.href = "profile.html";
          } else {
            document
              .getElementsByTagName("login-page")[0]
              .shadowRoot!.getElementById("incorrect")!.style.display = "grid";
          }
        }
      })
      .catch((err) => console.log("Failed to POST form data", err));
  }

  signUp() {
    const data = this.getData();
    let a = new Date();
    data.set(
      "dateCreated",
      ("0" + (a.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + a.getDate()).slice(-2) +
        "-" +
        a.getFullYear()
    );
    data.set("numGamesStarted", 0);
    data.set("numGamesCompleted", 0);
    data.set("averageTime", 0);
    data.set("longestNoHintStreak", 0);
    data.set("longestWinStreak", 0);
    data.set("currentWinStreak", 0);

    fetch(serverPath("/profiles"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        if (json) {
          console.log("PUT request successful:", json);
        }
      })
      .catch((err) => console.log("Failed to POST form data", err));
    document.cookie = "userid=" + data.get("userid");
    window.location.href = "profile.html";
  }

  render() {
    return html`<body>
      <div class="center">
        <p class="title">PROJECTIVE SET</p>
      </div>
      <div class="log-in-body">
        <p class="title">Log In or Sign Up</p>
        <label>Name:</label>
        <input type="text" class="name" /><br />
        <label>Username:</label>
        <input type="text" class="username" /><br />
        <label>Password:</label>
        <input type="text" class="password" /><br />
        <button @click=${this.login}>Log In</button>
        <button @click=${this.signUp}>Sign Up</button>
      </div>
      <div id="incorrect" class="incorrect">Incorrect username or password</div>
    </body>`;
  }
}
