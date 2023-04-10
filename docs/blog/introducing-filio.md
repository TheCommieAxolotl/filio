---
description: Introducing filio, a configuration loader that really doesn't care what language you use.
author: TheCommieAxolotl
date: 2023-04-10
---

# Introducing filio! 🎉
April 10, 2023, written by TheCommieAxolotl

filio is a configuration loader that really doesn't care what language you use. It aims to make loading configuration files easier, faster and to allow users more control over *how* they write their configuration files.

### Why filio?
You may have heard of a little library called [jiti](https://npmjs.com/package/jiti). It's a great utility for loading ESM and TypeScript files in any environment. In fact, filio uses jiti under the hood if you try to load any js/ts derived formats. But what if you want to load a configuration file that is written in say, CoffeeScript, or YAML? or even Python? (well, maybe not Python, but you get the idea). filio aims be a unified package to load all of these unconventional configuration formats.

### How does it work?
Okay, let's do this quickly:

- [jiti](https://npmjs.com/package/jiti) to load JavaScript and TypeScript files
- [CoffeeScript](https://npmjs.com/package/coffeescript) to load CoffeeScript and CSON files
- [js-yaml](https://npmjs.com/package/js-yaml) to load YAML files

(more to come)

filio takes all of these packages and provides a (well it's really two) central method to load files of any of the supported formats. It also provides a few other utilities to make your life easier such as templates.

### How do I use it?
Have a gander at our [guide](/guide/) to get started!