import { LitElement, html, css } from "lit";

export class badmenJoinus extends LitElement {
  static get tag() {
    return "badmen-joinus";
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
    .join-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
      }

      .join-button {
        background: white;
        color: #002b5c; /* deep navy-like sports color */
        font-size: 1.2rem;
        font-weight: 700;
        padding: 16px 40px;
        border-radius: 40px;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 0 3px 8px rgba(0,0,0,0.15);
      }

      .join-button:hover {
        transform: scale(1.05);
        background: #e9e9e9;
      }
     
    `;
  }

  render() {
    return html`
     <div class="join-wrapper">
        <button class="join-button">
          Become a 25-26 Badman Today
        </button>
      </div> 
    `;
  }
}

customElements.define(badmenJoinus.tag, badmenJoinus);