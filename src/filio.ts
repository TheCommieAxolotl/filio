import * as path from "node:path";

import { each } from "thena/node";

import { recursiveMerge } from "./util";
import { load } from "./loader";

export type ConfigFormat =
    | "ts"
    | "js"
    | "mjs"
    | "cjs"
    | "json"
    | "coffee"
    | "cson"
    | "yaml"
    | "yml"
    | "config.ts"
    | "config.js"
    | "config.mjs"
    | "config.cjs"
    | "config.json"
    | "config.coffee"
    | "config.cson"
    | "config.yaml"
    | "config.yml";

export interface Options {
    formats?: ConfigFormat[];
    template?: any;
    debug?: boolean;
    dir?: string;
}

export const filio = (name: string, options?: Options) => {
    const paths = options?.formats?.map((format) => `${name}.${format}`) ?? [
        `${name}.ts`,
        `${name}.js`,
        `${name}.mjs`,
        `${name}.cjs`,
        `${name}.json`,
        `${name}.coffee`,
        `${name}.cson`,
        `${name}.yaml`,
        `${name}.yml`,

        `${name}.config.ts`,
        `${name}.config.js`,
        `${name}.config.mjs`,
        `${name}.config.cjs`,
        `${name}.config.json`,
        `${name}.config.coffee`,
        `${name}.config.cson`,
        `${name}.config.yaml`,
        `${name}.config.yml`,
    ];

    let mod: any;

    each(paths, (pth) => {
        if (mod) return;

        if (options?.dir) pth = path.join(options?.dir, pth);

        mod = load(pth, null, options?.debug);
    });

    return recursiveMerge(options?.template ?? null, mod);
};

export default filio;
