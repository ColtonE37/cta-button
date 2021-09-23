import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 5px;
        --ctabuttonColor: black;
        --ctabuttonBackgroundColor: white;
        --ctabuttonActiveBackgroundColor: red;
        --ctabuttonActiveColor: white;
        --ctabuttonDisabledBackgroundColor: grey;
        --ctabuttonFontFamily: 'Times New Roman', sans-serif;
      }
      :host([invert]) {
        --ctabuttonColor: white;
        --ctabuttonBackgroundColor: black;
      }
      .assignment {
        background-color: var(--ctabuttonBackgroundColor);
        color: var(--ctabuttonColor);
        font-size: 25px;
        font-family: var(--ctabuttonFontFamily);
        border-radius: 12px;
        border: 1px solid;
        text-decoration: none;
        padding: 6px;
      }
      .assignment:hover,
      .assignment:focus,
      .assignment:active {
        background-color: var(--ctabuttonActiveBackgroundColor);
        color: var(--ctabuttonActiveColor);
      }
      .assignment:disabled {
        background-color: var(--ctabuttonDisabledBackgroundColor);
        cursor: not-allowed;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      disabled: { type: Boolean, reflect: true },
      invert: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.title = 'Click here!';
    this.link =
      'https://me.me/i/yes-neiniegerierator-ie-yes-i-did-it-victory-baby-861706f5aa474036a024011734c5a374';
    this.disabled = false;
    this.invert = false;
  }

  render() {
    return html`
      <a
        href="${this.link}"
        target="_blank"
        tabindex="-1"
        rel="noopener noreferrer"
      >
        <button class="assignment" ?disabled="${this.disabled}">
          ${this.title}
        </button>
      </a>
    `;
  }
}
