/**
 * Copyright 2025 zdg5063-glitch
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./badmen-navbar.js";
import "./badmen-layout.js";
import "./badmen-signup.js";
import "./badmen-teamname.js";
import "./badmen-calendar.js";
import "./badmen-joinus.js";
import "./badmen-infoboxes.js";
import "./badmen-datecard.js";
import "./badmen-stats.js";

/**
 * `the-badmen`
 * 
 * @demo index.html
 * @element the-badmen
 */
export class TheBadmen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "the-badmen";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/the-badmen.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }




  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        
      }
      
      .badmen-image {
        width: 100%;
        opacity: 50%;
      }
      
      .join-overlay {
  position: absolute;
  top: 50%;
  left: 50%;  
  transform: translate(-50%, -50%);
  z-index: 10; /*this makes sure its above the image*/
}
.front-image {
  position: relative;
  display: inline-block; 
}
    `];
  }

  // Lit render the HTML
render() {
  return html`
    <div class="wrapper">
      <badmen-navbar></badmen-navbar>
      <div class="front-image">
      <img
      class=badmen-image 
      src="https://static.vecteezy.com/system/resources/previews/065/837/411/non_2x/professional-badminton-player-in-action-during-match-with-racket-swing-photo.jpeg"
 />
  <badmen-joinus class="join-overlay"></badmen-joinus>      
</div>
         
      


      <h2>Signup Section</h2>
      <badmen-signup></badmen-signup>

      <h2>Layout</h2>
      <badmen-layout></badmen-layout>

      <h2>Team Name</h2>
      <badmen-teamname></badmen-teamname>

      <h2>Calendar</h2>
      <badmen-calendar></badmen-calendar>

      <h2>Signup</h2>
      <badmen-signup></badmen-signup>

      <h2>Stats</h2>
      <badmen-stats></badmen-stats>

    

       <h2>Info boxes</h2>
      <badmen-infoboxes></badmen-infoboxes>

       <h2>datecard</h2>

      <badmen-datecard date="may 5th"
      location="State College"
      time="1PM"
      ageGroup="18U"></badmen-datecard>
    </div>
  `;
}


  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(TheBadmen.tag, TheBadmen);