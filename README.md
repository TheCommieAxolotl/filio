# filio
A simple configuration loader for NodeJS that supports various file formats such as js, ts, yaml and more.

## Installation
You can install filio via npm, pnpm or yarn:

```bash
npm install filio
pnpm add filio
yarn add filio
```

## What does it do?
filio aims to provide a simpl*er* way to load a wide [variety](#supported-formats) of configuration formats.

## Usage
filio should work out of the box with no configuration in most scenarios. Simply pass the name of the file you want to load and it will automatically look for the file in the current working directory.

```ts
// config.ts
export default {
  port: 3000,
};

// index.js
import filio from 'filio';

const config = filio('config'); // will look for config.json, config.yaml, config.js, etc.

console.log(config.port); // 3000
```

If you want to look for a specific file, you can also use `filio.load`:

```ts
import { load } from 'filio';

const config = load('.config', "yaml"); // load .config as a yaml file

console.log(config.port); // 3000
```

## Supported Formats
- [x] JSON
- [x] YAML
- [x] JS
- [X] JS (commonjs)
- [x] TS
- [x] coffeescript
- [ ] TOML