import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser';
import {dts} from "rollup-plugin-dts";
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(), 
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json", exclude: ["**/*.stories.tsx", "**/*.stories.ts", "**/*.stories.mdx", "**/*.stories.md", "**/*.stories.js", "**/*.stories.jsx", "**/*.stories.json", "**/*.stories.css"] }),
            terser(),
        ],
        external: ['react', 'react-dom', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
    },
    {
        input: 'src/index.ts',
        output: [{ file: packageJson.types, format: 'esm' }],
        plugins: [dts({respectExternal: false})],
    },
];
