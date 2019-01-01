# EditorEx

Scripting editor for Elixir - proof of concept Electron app.

## Motivation

Elixir is actually great scripting language (better than bash obviously :)), so there was a need to create a simple tool where one could paste the input, do some Elixir commands and get the output. Quick, dirty and efficient.

## Prerequisites

* Elixir's mix command available in shell
* JS deps installed with `npm install`
* Playground deps fetched with `mix deps.get` in `playground` folder

In `playground` folder is located mix project where additional deps can be added, by default:

* Poison (JSON encoder/decoder)
* HTTPoison (HTTP client)
* UUID (UUID helper and generator)

## Run

```bash
  npm start
```

`Ctrl+Enter` to run the code.

## Dark theme only

Of course.

![EditorEx](https://i.imgur.com/6wxrgfi.png)

Screenshot: https://i.imgur.com/6wxrgfi.png