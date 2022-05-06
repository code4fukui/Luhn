# Luhn.js

A checksums, [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) ([ja](https://ja.wikipedia.org/wiki/Luhn%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)) in JavaScript (ES module)

## how to use

```js
import { Luhn } from "https://code4fukui.github.io/Luhn.js/Luhn.js";

console.log(Luhn.calc(572)); // 8
console.log(Luhn.check(5728)); // true
console.log(Luhn.addCheckDigit(572)); // 5728
```

## test

```
deno test
```

## related

[Damm.js](https://github.com/code4fukui/Damm.js)
