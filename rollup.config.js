import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { uglify } from 'rollup-plugin-uglify';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import packageJSON from './package.json';

const minifyExtension = (pathToFile) => pathToFile.replace(/\.js$/, '.min.js');

export default [
	// CommonJS
	{
		input: './src/index.js',
		output: {
			file: packageJSON.main,
			format: 'cjs',
		},
		plugins: [
			peerDepsExternal(),
			babel({
				exclude: 'node_modules/**',
			}),
			external(['react', 'react-dom', 'styled-components', 'react-spring']),
			resolve(),
			commonjs(),
		],
	},
	{
		input: './src/index.js',
		output: {
			file: minifyExtension(packageJSON.main),
			format: 'cjs',
		},
		plugins: [
			peerDepsExternal(),
			babel({
				exclude: 'node_modules/**',
			}),
			external(['react', 'react-dom', 'styled-components', 'react-spring']),
			resolve(),
			commonjs(),
			uglify(),
		],
	},
];
