import { LitElement, html, css } from "lit";

export class badmenNavbar extends LitElement {
  static get tag() {
    return "badmen-navbar";
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        background: black;
        color: white;
        font-family: Arial, sans-serif;
        height: 144px;
      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 20px;
      }

      .logo {
        font-weight: bold;
        font-size: 36px;
      }

      ul {
        list-style: none;
        display: flex;
        gap: 36px;
        margin: 36px;
        padding: 0;
      }
    `;
  }

  render() {
    return html`
      <nav>
        <div class="logo">THE BADMEN</div>
        <ul>
          <li>About Us</li>
          <li>Schedule</li>
          <li>Join Us</li>
        </ul>
      </nav>
    `;
  }
}

customElements.define(badmenNavbar.tag, badmenNavbar);
