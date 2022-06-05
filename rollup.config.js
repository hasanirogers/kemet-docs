import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';

const copyConfig = {
  targets: [
    { src: 'src/assets', dest: '_site'},
  ]
};

const scssConfig = {
  // eslint-disable-next-line global-require
  sass: require('sass'),
  output: '_site/assets/styles/docs.css',
  watch: ['src/styles'],
};

const config = {
  input: 'src/javascript/index.js',
  output: {
    file: '_site/assets/javascript/docs.js',
    name: 'docs',
    format: 'esm',
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
