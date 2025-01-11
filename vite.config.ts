import postcssPresetEnv from 'postcss-preset-env';
import postcssCustomMedia from 'postcss-custom-media';
import autoprefixer from 'autoprefixer';
import litCss from 'vite-plugin-lit-css';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    litCss({
      exclude: './public/index.css',
    }),
  ],

  css: {
    postcss: [
      postcssCustomMedia(),
      postcssPresetEnv({
        stage: 0,
        enableClientSidePolyfills: false,
        features: {
          'cascade-layers': false,
          clamp: false,
          'logical-properties-and-values': false,
          'prefers-color-scheme-query': false,
          'gap-properties': false,
          'custom-properties': false,
          'place-properties': false,
          'dir-pseudo-class': false,
          'is-pseudo-class': false,
          'focus-within-pseudo-class': false,
          'focus-visible-pseudo-class': false,
          'color-functional-notation': false,
        },
      }),
      autoprefixer({}),
    ],
  },
};
