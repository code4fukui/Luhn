# Luhn

A check digit algorithm, [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) ([ja](https://ja.wikipedia.org/wiki/Luhn%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0))

- credit card (クレジットカード)

## in JavaScript (ES module)

- [Luhn.js](Luhn.js)
 
### how to use

```js
import { Luhn } from "https://code4fukui.github.io/Luhn/Luhn.js";

console.log(Luhn.calc(572)); // 8
console.log(Luhn.check(5728)); // true
console.log(Luhn.addCheckDigit(572)); // 5728
```

### test

```
deno test
```

### sample app

[Luhn.js test](https://code4fukui.github.io/Luhn/)

## related

- [Damm](https://github.com/code4fukui/Damm)
- [Verhoeff](https://github.com/code4fukui/Verhoeff)
