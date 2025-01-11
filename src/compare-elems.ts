import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import sheet from './css/compare-elems.css';

@customElement('compare-elems')
export class CompareElems extends LitElement {
  static override styles = sheet;

  @query('.compare', true)
  private _compare!: HTMLElement;

  override render() {
    return html`
      <div class="compare">
        <section class="before">
          <!-- <h1>something</h1> -->
          <img src="/svg/Coffee.svg" alt="" />
        </section>
        <section class="after">
          <!-- <h1>here</h1> -->
          <img src="/svg/Runner.svg" alt="" />
        </section>
        <input type="range" step="0.1" @input=${this._setPos} />
      </div>
    `;
  }

  _setPos(e: Event) {
    const val = (e.target as HTMLInputElement).value + '%';
    this._compare.style.setProperty('--pos', val);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'compare-elems': CompareElems;
  }
}
