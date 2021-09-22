import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 5px;
        color: var(--cta-button-text-color, #000);
        --ctabuttonTextColor: #ffffff;
        --disabledbuttonBackground: #ffffff
        --ctabuttonFont: 'Times New Roman', sans-serif;
      }

      button {
        color: var(--cta-button-text-color);
        font-size: 25px;
        font-family: var(--ctabuttonFont);
        border-radius: 12px;
      }

      button:hover,
      button:focus,
      button:active {
        background-color: red;
      }

      button:disabled {
        color: var(--ctabuttonTextColor);
        background-color: var(--disabledbuttonBackground);
        cursor: not-allowed;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String},
      link: { type: String},
      disabled: { type: Boolean, reflect: true}
    };
  }

  constructor() {
    super();
    this.link = "https://me.me/i/yes-neiniegerierator-ie-yes-i-did-it-victory-baby-861706f5aa474036a024011734c5a374"
    this.disabled = false;
  }

  render() {
    return html`
  <a href=${this.buttonLink} tabindex="-1" rel="noreferrer" target="_blank" role="button"></a>

    `;
  }
}
