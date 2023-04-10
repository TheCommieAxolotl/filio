import filio from "../dist/index.js";

import { test, describe } from "node:test";
import assert from "node:assert";

const template = {
    option1: "value1",
    option2: ["value2", "value3"],
    option3: {
        option4: "value4",
        option5: true,
    },
};

const ts_config = filio("config", {
        formats: ["ts"],
        dir: "test",
        template,
    }),
    js_config = filio("config", {
        formats: ["js"],
        dir: "test",
        template,
    }),
    cjs_config = filio("config", {
        formats: ["cjs"],
        dir: "test",
        template,
    }),
    json_config = filio("config", {
        formats: ["json"],
        dir: "test",
        template,
    }),
    yaml_config = filio("config", {
        formats: ["yml"],
        dir: "test",
        template,
    }),
    coffee_config = filio("config", {
        formats: ["coffee"],
        dir: "test",
        template,
    }),
    merged_config = filio("config_diff", {
        dir: "test",
        template: {
            option2: ["value2", "value3"],
            option3: {
                option4: "value4",
                option5: true,
            },
        },
    });

describe("filio", () => {
    test("ts", () => {
        assert.deepStrictEqual(ts_config, template);
    });

    test("js", () => {
        assert.deepStrictEqual(js_config, template);
    });

    test("cjs", () => {
        assert.deepStrictEqual(cjs_config, template);
    });

    test("json", () => {
        assert.deepStrictEqual(json_config, template);
    });

    test("coffee", () => {
        assert.deepStrictEqual(coffee_config, template);
    });

    test("yaml", () => {
        assert.deepStrictEqual(yaml_config, template);
    });

    test("merge", () => {
        assert.deepStrictEqual(merged_config, {
            option1: "abc",
            option2: ["value2", "value3"],
            option3: {
                option4: "value4",
                option5: true,
            },
        });
    });
});
