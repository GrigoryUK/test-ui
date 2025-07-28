import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import { readFileSync } from 'fs';
import css from 'rollup-plugin-css-only';
import { dts } from 'rollup-plugin-dts';

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      svgr({ exportType: 'named', dimensions: false, svgo: false, typescript: true }),
      css({ output: 'main.css' }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: [
          '**/library-helpers/**',
          '**/*.stories.tsx',
          '**/*.stories.ts',
          '**/*.stories.mdx',
          '**/*.stories.md',
          '**/*.stories.js',
          '**/*.stories.jsx',
          '**/*.stories.json',
          '**/*.stories.css',
        ],
      }),
      terser(),
    ],
    external: ['react', 'react-dom', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
  },
  {
    external: [/\.css$/],
    input: 'src/index.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts({ respectExternal: false })],
  },
];
