import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { uglify } from 'rollup-plugin-uglify';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import externalGlobals from 'rollup-plugin-external-globals';
import react from 'react';
import reactDom from 'react-dom';
import { terser } from 'rollup-plugin-terser';

import packageJSON from './package.json';

const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, '.min.js');
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json'];

export default [
  {
    input: './src/index.js',
    output: {
      file: packageJSON.main,
      format: 'umd',
      name: 'spring-button-test',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    plugins: [
      external({
        includeDependencies: true,
      }),

      babel({
        babelrc: false,
        presets: [
          ['@babel/preset-env', { modules: false }],
          '@babel/preset-react',
        ],
        extensions: EXTENSIONS,
        exclude: 'node_modules/**',
      }),

      resolve({
        extensions: EXTENSIONS,
        preferBuiltins: false,
      }),
      // externalGlobals({
      //   react: 'React',
      //   'react-dom': 'ReactDOM',
      //   'styled-components': 'styled',
      //   'react-spring': 'useSpring',
      // }),
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          react: Object.keys(react),
          'react-dom': Object.keys(reactDom),
        },
      }),
    ],
  },
];
