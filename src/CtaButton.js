import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 5px;
        color: var(--cta-button-text-color, #000);
        --ctabuttonTextColor: #ffffff;
        --disabledbuttonBackground: grey;
        --ctabuttonFont: 'Times New Roman', sans-serif;
      }
      .assignment {
        color: var(--cta-button-text-color);
        font-size: 25px;
        font-family: var(--ctabuttonFont);
        border-radius: 12px;
        border: 1px solid;
        text-decoration: none;
        padding: 6px;
      }
      .assignment:hover,
      .assignment:focus,
      .assignment:active {
        background-color: red;
      }
      .assignment:disabled {
        color: var(--ctabuttonTextColor);
        background-color: var(--disabledbuttonBackground);
        cursor: not-allowed;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      disabled: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.link = "https://me.me/i/yes-neiniegerierator-ie-yes-i-did-it-victory-baby-861706f5aa474036a024011734c5a374"
    this.disabled = true;
  }

  _navigateToLink() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
    window.open(this.link, "_blank");
  }

  render() {
    return html`
  <button class="assignment" @click="${this._navigateToLink}" ?disabled="${this.disabled}">Click Here!</button>
      `;
  }
}