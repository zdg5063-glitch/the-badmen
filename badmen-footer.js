import { LitElement, html, css } from "lit";

export class badmenFooter extends LitElement {
  static get tag() {
    return "badmen-footer";
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
    
  }



  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        height: 300px;
        background: var(--ddd-theme-default-opportunityGreen);
        color: var(--ddd-theme-default-roarLight);
        font-family: var(--ddd-font-navigation);
        font-weight: var(--ddd-font-weight-regular);
        letter-spacing: var(--ddd-spacing-1);
        margin: 0 auto;
        padding: 0 16px;
      }

      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: clamp(8px, 2vw, 20px);
        flex-wrap: wrap;
      }

      .logo-wrapper {
        display: flex;
        align-items: center;
        gap: 4px;
        flex-shrink: 0;
      }

    

      .banner {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.logo {
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}




    `;
  }

render() {
  return html`
    <div class="banner">
      <img
        class="logo"
        src="https://freesvg.org/img/logo_bad_lion_2.png"
        alt="Bad Lion Logo"
      />

      <div class="overlay">
        <h1>THE BADMEN</h1>
        <p>say something here</p>
      </div>
    </div>
  `;
}

}

customElements.define(badmenFooter.tag, badmenFooter);