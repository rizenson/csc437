import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../express-backend/src/models/profile";
import { serverPath } from "./rest";
import { SettingsBox } from "./settings";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = `/profile/${this.getUserId()}`;

  getUserId() {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("userid="))
      ?.split("=")[1];
  }

  darkMode() {
    let settings = new SettingsBox();

    let darkMode = document.cookie
      .split("; ")
      .find((row) => row.startsWith("darkMode="))
      ?.split("=")[1];
    console.log(darkMode);
    settings.getDarkMode(darkMode && darkMode == "true" ? true : false);
  }
  abc = this.darkMode();

  @state()
  profile?: Profile;

  render() {
    const profile =
      this.profile ||
      ({
        userid: "",
        name: "",
      } as Profile);

    const { userid, name, password } = profile;
    const firstName = name.split(" ")[0];

    return html`
      <section>
        <div class="title">Welcome ${firstName}!</div>
        <table>
          <tr>
            <td>Username</td>
            <td class="test">${userid}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td class="test">${name}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td class="test">${this.printablePassword(password)}</td>
          </tr>
        </table>
        <div>
          <button @click=${this.editProfile}>Edit Profile</button>
        </div>
      </section>
    `;
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
      .title {
        font-size: 40px;
      }
    `,
  ];

  editProfile() {
    document.getElementsByTagName("user-profile")[0].style.display = "none";
    document.getElementsByTagName("user-profile-edit")[0].style.display =
      "grid";
  }

  printablePassword(s: String) {
    if (s) {
      let retString = "";
      for (let j = 0; j < s.length; j++) {
        retString += "*";
      }
      return retString;
    }
    return "";
  }

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

@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    const profile = (this.profile || {}) as Profile;
    const { userid, name, password = [] } = profile;
    const firstName = name.split(" ")[0];

    console.log("Rendering form", this.profile);

    return html`
      <section>
        <div class="title">Welcome ${firstName}!</div>
        <form @submit=${this._handleSubmit}>
          <table>
            <tr>
              <td>Username</td>
              <td class="test">${userid}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td class="test"><input name="name" .value=${name} /></td>
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
    `;
  }

  cancel() {
    document.getElementsByTagName("user-profile")[0].style.display = "grid";
    document.getElementsByTagName("user-profile-edit")[0].style.display =
      "none";
  }

  static styles = [
    ...UserProfileElement.styles,
    css`
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
    `,
  ];

  _handleSubmit(ev: Event) {
    ev.preventDefault();

    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    let entries = Array.from(formdata.entries()).map(([k, v]) =>
      v === "" ? [k] : [k, v]
    );

    const json = Object.fromEntries(entries);

    console.log("Submitting Form", json);

    this._putData(json);

    document.getElementsByTagName("user-profile")[0].style.display = "grid";
    document.getElementsByTagName("user-profile-edit")[0].style.display =
      "none";
    window.location.href = "http://localhost:5173/profile.html";
  }

  _putData(json: Profile) {
    const userid = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userid="))
      ?.split("=")[1];
    fetch(serverPath(`/profiles/${userid}`), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
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
          this.profile = json as Profile;
        }
      })
      .catch((err) => console.log("Failed to POST form data", err));
  }
}
