import peerDepsExternal from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import svgr from '@svgr/rollup';

const packageJson = require("./package.json");

export default {
  input: "src/index.ts",
  external: ["@apisuite/fe-base"],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
      exports: "default"
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    json(),
    resolve(),
    commonjs(),
    postcss(),
    svgr(),
    typescript({ useTsconfigDeclarationDir: true }),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: "build",
          rename: "variables.scss"
        },
        {
          src: "src/typography.scss",
          dest: "build",
          rename: "typography.scss"
        }
      ]
    })
  ]
};
