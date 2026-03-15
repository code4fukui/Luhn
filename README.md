# Luhn

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A check digit algorithm, [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) ([ja](https://ja.wikipedia.org/wiki/Luhn%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)).

## Demo
[Luhn.js test](https://code4fukui.github.io/Luhn/)

## Features
- Credit card number validation
- Calculate check digit
- Add check digit to number

## Requirements
- [Deno](https://deno.land/)

## Usage
Import the `Luhn` module and use the provided functions:

```js
import { Luhn } from "https://code4fukui.github.io/Luhn/Luhn.js";

console.log(Luhn.calc(572)); // 8
console.log(Luhn.check(5728)); // true
console.log(Luhn.addCheckDigit(572)); // 5728
```

You can also run the tests:

```
deno test
```

## Related
- [Damm](https://github.com/code4fukui/Damm)
- [Verhoeff](https://github.com/code4fukui/Verhoeff)

## License
MIT License