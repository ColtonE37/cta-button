import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 5px;
        color: var(--cta-button-text-color, #000);
        --ctabuttonFont: 'Times New Roman', sans-serif;
      }

      button {
        // display: block;
        margin: 3px 250px;
        color: var(--cta-button-text-color);
        font-size: 50px;
        font-family: var(--ctabuttonFont);
        border-radius: 12px;
      }

      button:hover,
      button:focus,
      button:active {
        background-color: yellow;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String},
      buttonLink: { type: String},
    };
  }

  constructor() {
    super();
    this.buttonText = "Click Me!";
    this.buttonLink = "https://me.me/i/yes-neiniegerierator-ie-yes-i-did-it-victory-baby-861706f5aa474036a024011734c5a374"
  }

  render() {
    return html`
    <h2>${this.title}</h2>
  <a href=${this.buttonLink} tabindex="-1" rel="noreferrer" target="_blank" role="button"
  ><button>${this.buttonText}</button></a
  >
    `;
  }
}
