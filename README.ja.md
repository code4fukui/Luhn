# Luhn

チェックディジットアルゴリズム、[Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) ([日本語](https://ja.wikipedia.org/wiki/Luhn%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0))。

## 機能
- クレジットカード番号の検証
- チェックディジットの計算
- 数値へのチェックディジットの追加

## 要件
- [Deno](https://deno.land/)

## 使用方法
`Luhn` モジュールをインポートして、提供されている関数を使用します:

```js
import { Luhn } from "https://code4fukui.github.io/Luhn/Luhn.js";

console.log(Luhn.calc(572)); // 8
console.log(Luhn.check(5728)); // true
console.log(Luhn.addCheckDigit(572)); // 5728
```

テストを実行することもできます:

```
deno test
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
