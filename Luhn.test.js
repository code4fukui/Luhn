import * as t from "https://deno.land/std/testing/asserts.ts";
import { Luhn } from "./Luhn.js";

Deno.test("calc", () => {
  t.assertEquals(Luhn.calc(572), 8);
  t.assertEquals(Luhn.calc("572"), 8);
});
Deno.test("check", () => {
  t.assert(Luhn.check(5728));
  t.assert(Luhn.check("5728"));
});
Deno.test("addCheckDigit", () => {
  t.assertEquals(Luhn.addCheckDigit(572), 5728);
  t.assertEquals(Luhn.addCheckDigit("572"), "5728");
  t.assertEquals(Luhn.addCheckDigit("000572"), "0005728");
});
Deno.test("algorithm", () => {
  t.assertEquals(Luhn.calc("1"), 8);
  t.assertEquals(Luhn.calc("11"), 7);
  t.assertEquals(Luhn.calc("111"), 5);
  t.assertEquals(Luhn.calc("1111"), 4);
  t.assertEquals(Luhn.calc("00001111"), 4);
  t.assertEquals(Luhn.calc("11110"), 4);
});
