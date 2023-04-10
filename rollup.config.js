import { defineConfig } from "rollup";

import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

const isDev = process.env.ROLLUP_WATCH === "true";

const baseConfig = {
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "esm",
    },
    plugins: [
        nodeResolve({
            exportConditions: ["node"],
        }),
        commonjs(),
        typescript(),
        isDev ? null : terser(),
    ].filter(Boolean),
};

export default defineConfig([
    {
        ...baseConfig,
    },
    {
        ...baseConfig,
        output: {
            file: "dist/index.cjs",
            format: "cjs",
            exports: "named",
        },
    },
]);
