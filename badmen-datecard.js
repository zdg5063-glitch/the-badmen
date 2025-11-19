import { LitElement, html, css } from "lit";

export class badmenDatecard extends LitElement {
  static get tag() {
    return "badmen-datecard";
  }

  static get properties() {
    return {
      date: { type: String },
      location: { type: String },
      time: { type: String },
      ageGroup: { type: String }
      
    };
  }

  constructor() {
    super();
    this.date = "";
    this.location = "";
    this.time = "";
    this.ageGroup = "";
    
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 350px;
        background: #ffffff;
        border-radius: 14px;
        padding: 16px 20px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        font-family: "Inter", sans-serif;
      }

      .date {
        font-size: 1.4rem;
        font-weight: 700;
        color: #222;
        margin-bottom: 8px;
      }

      .row {
        margin: 4px 0;
        font-size: 0.95rem;
        color: #444;
      }

      

    
    `;
  }

  render() {
    return html`
      <div class="date">${this.date}</div>

      <div class="row"> ${this.location}</div>
      <div class="row"> ${this.time}</div>
      <div class="row"> ${this.ageGroup}</div>

      
    `;
  }
}

customElements.define(badmenDatecard.tag, badmenDatecard);
