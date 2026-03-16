# Luhn

Luhnアルゴリズムは、クレジットカード番号などの検査桁を生成するアルゴリズムです。

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