# API Reference

This page demonstrates usage of some of the methods provided by filio.

[[toc]]

## `filio`

Load a configuration file.

#### Params
```ts
interface FilioParams {
    name: string; // The name of the configuration file. eg. "config" or "config.dev" will locate "config.js" or "config.dev.js".
    options?: {
        dir?: string; // The directory to search under. Defaults to the current working directory.
        formats?: ConfigFormat[]; // The format of the configuration file. Defaults to all.
        debug?: boolean; // Whether or not to log debug messages.
        template?: any; // A template to merge the configuration with.
    };
}
```

#### Returns
The first configuration found, merged with the template, or null if none were found.

#### Example

::: code-group

```ts [index.js]
import filio from "filio";

const config = filio("config");

console.log(config.port); // 3000
```

```ts [config.ts]
export default {
 port: 3000,
}
```

:::

#### Signature
```ts
export function filio<T extends any>(name: string, options?: FilioOptions): T | null;
```

## `filio.load`

Use filio's loader to load a specific file.

#### Params
```ts
interface LoadParams {
    path: string; // The path to the file to load.
    format: ConfigFormat; // The format of the file to load.
    debug?: boolean; // Whether or not to log debug messages.
}
```

#### Returns
The loaded file's exports.

#### Example

::: code-group

```ts [index.js]
import { load } from "filio";

const file = load(".configrc", "json");

console.log(file.port); // 3000
```

```json [.configrc]
{
  "port": 3000
}
```

:::

#### Signature
```ts
export function load(path: string, format: ConfigFormat, debug?: boolean): any;
```

## `filio.require`

The internal [jiti](https://github.com/unjs/jiti) instance used by filio. **Does not load non-js/ts files.**

#### Params
```ts
interface RequireParams {
    id: string; // The path to the file to load.
}
```

#### Returns
The required file's exports.

#### Example
```ts
import { require } from "filio";

const file = require("./config.js");

// this errors, because jiti doesn't support loading non-js/ts files
const file = require("./config.yml"); // Uncaught SyntaxError: ... // [!code error]
```

#### Signature
```ts
import type { JITI } from 'jiti';

export const require: JITI;
```