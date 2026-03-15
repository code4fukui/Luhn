# Luhn

Luhnアルゴリズム ([英語版Wiki](https://en.wikipedia.org/wiki/Luhn_algorithm), [日本語版Wiki](https://ja.wikipedia.org/wiki/Luhn%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)) は、クレジットカード番号などの検査桁を生成するアルゴリズムです。

## デモ

[Luhn.js test](https://code4fukui.github.io/Luhn/)

## 機能

- Luhnアルゴリズムに基づいた検査桁の計算
- Luhnチェックディジットの付加
- Luhnチェックの検証

## 使い方

```js
import { Luhn } from "https://code4fukui.github.io/Luhn/Luhn.js";

console.log(Luhn.calc(572)); // 8
console.log(Luhn.check(5728)); // true
console.log(Luhn.addCheckDigit(572)); // 5728
```

## テスト

```
deno test
```

## ライセンス

MITライセンスで提供されています。