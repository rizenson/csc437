import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "./models/profile";
import { serverPath } from "./rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  render() {
    const profile =
      this.profile ||
      ({
        userid: "youruserid",
        name: "Your Name",
        city: "Hometown, USA",
        airports: ["ABC", "XYZ"],
      } as Profile);

    const { userid, name, password } = profile;

    return html`
      <section>
        <h1>${name}</h1>
        <dl>
          <dt>Username</dt>
          <dd>${userid}</dd>
          <dt>Password</dt>
          <dd>${password}</dd>
        </dl>
      </section>
    `;
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

  static styles = [css`...`];
}

@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  render() {
    const profile = (this.profile || {}) as Profile;
    const {
      userid,
      name,
      password = []
    } = profile;

    console.log("Rendering form", this.profile);

    return html`
      <section>
        <form @submit=${this._handleSubmit}>
          <dl>
            <dt>Username</dt>
            <dd><input name="userid" .value=${userid} /></dd>
            <dt>Password</dt>
            <dd><input name="password" .value=${password} /></dd>
          </dl>
          <button type="submit">Submit</button>
        </form>
      </section>
    `;
  }

  static styles = [
    ...UserProfileElement.styles,
    css`
      form {
        display: contents;
      }
      button {
        grid-column: value;
        width: 10em;
      }
      input {
        font: inherit;
      }
    `
  ];

  _handleAvatarSelected(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const selectedFile = (target.files as FileList)[0];
    const reader: Promise<string> = new Promise(
      (resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result as string);
        fr.onerror = (err) => reject(err);
        fr.readAsDataURL(selectedFile);
      }
    );

    reader.then((result: string) => {
      this.profile = {
        ...(this.profile as Profile),
        avatar: result
      };
    });
  }

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // prevent browser from submitting form data itself

    const avatar = this.profile?.avatar;
    const target = ev.target as HTMLFormElement;
    const formdata = new FormData(target);
    let entries = Array.from(formdata.entries())
      .map(([k, v]) => (v === "" ? [k] : [k, v]))

    const json = Object.fromEntries(entries);

    console.log("Submitting Form", json);

    this._putData(json);
  }

  _putData(json: Profile) {
    fetch(serverPath("/profiles/rizenson"), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(json)
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
      .catch((err) =>
        console.log("Failed to POST form data", err)
      );
  }
}