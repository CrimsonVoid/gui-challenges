import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('compare-elems')
export class CompareElems extends LitElement {
  static override styles = css`
    @layer demo.support {
      .compare {
        display: grid;

        > * {
          grid-area: 1 / 1;
        }

        > section {
          display: grid;
          place-content: center;
        }

        .before {
          background: linear-gradient(to right, hotpink, rebeccapurple);
          mask: linear-gradient(to right, #000 0, var(--pos, 50%), #0000 0);
        }

        .after {
          background: linear-gradient(to right, cyan, lime);
          mask: linear-gradient(to right, #0000 0, var(--pos, 50%), #000 0);
        }

        img {
          max-inline-size: 100%;
          max-block-size: 100dvh;
        }

        > input[type='range'] {
          z-index: 1;
          appearance: none;
          background: none;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;

          &::-webkit-slider-thumb {
            appearance: none;
            width: 4px;
            height: 100dvh;
            background-color: CanvasText;
          }

          &::-moz-range-thumb {
            appearance: none;
            width: 4px;
            height: 100dvh;
            background-color: CanvasText;
          }
        }
      }
    }
  `;

  override render() {
    return html`
      <div class="compare">
        <section class="before">
          <!-- <h1>something</h1> -->
          <img src="https://assets.codepen.io/2585/Runner.svg" alt="" />
        </section>
        <section class="after">
          <!-- <h1>here</h1> -->
          <img src="https://assets.codepen.io/2585/Roboto.svg" alt="" />
        </section>
        <input type="range" step="0.1" @input=${this._setPos} />
      </div>
    `;
  }

  _setPos(e: Event) {
    const val = (e.target as HTMLInputElement).value + '%';
    document.body.style.setProperty('--pos', val);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'compare-elems': CompareElems;
  }
}
