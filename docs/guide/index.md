# Getting Started

This page will walk you through the basics of using filio.

[[toc]]

## Installation

filio is available on npm, so you can install it with your favorite package manager.

```bash
npm install filio
pnpm add filio
yarn add filio
```

## Basic Usage

filio should work for most use cases out of the box. You use it by calling the main export with the **name** of your configuration file.

::: code-group

```ts{3} [index.ts]
import filio from 'filio';

const config = filio('config'); // this will search the cwd for any configuration files named config.*

console.log(config); // { foo: 'bar' }
```

```yml [config.yml]
foo: bar
```

:::

filio will search for configuration files in the current working directory, and will load the first one it finds. It will search for files in the following order:

-   `*.ts`
-   `*.js`
-   `*.mjs`
-   `*.cjs`
-   `*.json`
-   `*.coffee`
-   `*.cson`
-   `*.yaml`
-   `*.yml`

## Customizing the Search

Sometimes the default options aren't enough. You can customize the search by passing an options object to the main export.

::: code-group

```ts{4-14} [index.ts]
import type { FilioOptions } from 'filio';
import filio from 'filio';

const options: FilioOptions = {
  dir: 'config', // the directory to search under

  formats: ['json'], // tell filio to only search for json files

  template: {
    // tell filio to use a template for the config, 
    // this will also give you type hints later on
    foo: 'bar',
  }
}

const config = filio("config", options); // has now found config/config.js
```

```ts{4-14} [config.js]
export default {
  foo: 'baz',
}
```

:::