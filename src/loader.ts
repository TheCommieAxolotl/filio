import * as path from "node:path";
import * as fs from "node:fs";
import * as vm from "node:vm";
import Module from "node:module";

import coffee from "coffeescript";
import yaml from "js-yaml";
import jiti from "jiti";

import { log, warn, success, error } from "./log";

export const require = jiti(process.cwd(), {
    cache: true,
    interopDefault: true,
});

export const load = (pth: string, format?: string, debug?: boolean) => {
    const extRgx = /(?<=\.)[0-9a-z]+$/;
    const ext = format || (pth.match(extRgx)?.[0] ?? "");

    const absPath = path.join(process.cwd(), pth);

    let mod: any;

    if (debug) log("Loading", pth);

    if (fs.existsSync(absPath)) {
        if (debug) success("Exists!", pth);

        switch (ext) {
            case "js":
            case "json":
            case "mjs":
            case "cjs":
            case "ts": {
                try {
                    mod = require(absPath);
                } catch (err) {
                    error("Failed to load", pth, err);

                    return null;
                }

                break;
            }
            case "coffee":
            case "cson": {
                try {
                    const data = fs.readFileSync(absPath, "utf8");

                    const js = coffee.compile(data, {
                        bare: true,
                    });

                    const md = new Module(absPath);

                    md.filename = absPath;
                    md.require = load as any;

                    const ctx = vm.createContext({
                        module: md,
                        exports: md.exports,
                        require: load as any,
                        __filename: absPath,
                        __dirname: path.dirname(absPath),
                    });

                    vm.runInContext(js, ctx);

                    mod = md.exports;
                } catch (err) {
                    error("Failed to load", pth, err);

                    return null;
                }

                break;
            }
            case "yaml":
            case "yml": {
                try {
                    const data = fs.readFileSync(absPath, "utf8");

                    mod = yaml.load(data);
                } catch (err) {
                    error("Failed to load", pth, err);

                    return null;
                }

                break;
            }
            default:
                error("Unsupported extension", ext, "for", pth);
        }
    } else {
        if (debug) warn("Not found", pth);

        return null;
    }

    return mod;
};
