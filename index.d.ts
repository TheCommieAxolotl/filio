import { JITI } from "jiti";

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

/**
 * Options passed to the main filio loader.
 */
type FilioOptions = {
    /**
     * The formats to search for. Defaults to all formats.
     */
    formats?: ConfigFormat[];

    /**
     * Whether to print steps to the console.
     */
    debug?: boolean;

    /**
     * When passed, the loader will search for the file in this directory.
     */
    dir?: string;

    /**
     * A template to merge the found configuration with.
     */
    template?: any;
};

/**
 * Load a configuration file.
 * @param name The name of the configuration file. eg. "config" or "config.dev" will locate "config.js" or "config.dev.js".
 * @param options Options for the loader.
 * @returns The first configuration found, merged with the template, or null if none were found.
 * @example
 * // config.ts
 * export default {
 *   port: 3000,
 * }
 *
 * // index.js
 * import filio from "filio";
 *
 * const config = filio("config");
 *
 * console.log(config.port); // 3000
 * @since 0.0.1
 */
export function filio<T extends any>(name: string, options?: FilioOptions): T | null;

/**
 * Manually load a file with filio's loader.
 * @param path The path of the file to be read.
 * @param debug Whether to print steps to the console.
 * @returns The file's exports.
 * @example
 * // config.ts
 * export default {
 *  port: 3000,
 * }
 *
 * // index.js
 * import { load } from "filio";
 *
 * const config = load("./config.ts");
 *
 * console.log(config.port); // 3000
 * @since 0.0.1
 */
export function load(path: string, format: ConfigFormat, debug?: boolean): any;

/**
 * The internal JITI instance used by filio.
 * @param path The path of the file to be read.
 * @returns The file's exports.
 * @since 0.0.1
 */
export const require: JITI;

export default filio;
