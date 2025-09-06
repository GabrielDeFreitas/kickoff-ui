import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
    // Build principal (ESM apenas)
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: false
            }
        ],
        external: ["react", "react-dom", "react/jsx-runtime"],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                declaration: false,
                declarationDir: null
            }),
            terser()
        ]
    },
    {
        input: "dist/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: ["react", "react-dom", "react/jsx-runtime"]
    }
];