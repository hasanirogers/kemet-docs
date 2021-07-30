import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';

const copyConfig = {
  targets: [
    { src: 'node_modules/@webcomponents/webcomponentsjs', dest: 'assets/javascript'},
    { src: 'node_modules/highlight.js/styles/*.css', dest: 'assets/styles/highlightjs'}
  ]
};

const scssConfig = {
  // eslint-disable-next-line global-require
  sass: require('sass'),
  output: 'assets/styles/docs.css',
  watch: ['src/styles'],
};

const config = {
  input: 'src/index.js',
  output: {
    file: 'assets/javascript/docs.js',
    name: 'docs',
    format: 'iife',
  },
  plugins: [
    resolve(),
    minifyHTML(),
    copy(copyConfig),
    scss(scssConfig),
    commonjs(),
  ],
  preserveEntrySignatures: false
}

if (process.env.NODE_ENV !== 'development') {
  config.plugins.push(terser());
}

export default config;
