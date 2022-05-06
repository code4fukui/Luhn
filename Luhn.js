// https://ja.wikipedia.org/wiki/Luhn%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0

const calc = (num) => {
  let sum = 0;
  let alt = true;
  const s = num.toString();
  for (let i = s.length - 1; i >= 0; i--) {
    let d = parseInt(s[i]);
    if (alt) {
      d *= 2;
      if (d > 9) {
        d -= 9;
      }
    }
    sum += d;
    alt = !alt;
  }
  return 10 - sum % 10;
};

const check = (num) => {
  const s = num.toString();
  const d = calc(s.substring(0, s.length - 1));
  return s.endsWith(d);
};

const addCheckDigit = (num) => {
  if (typeof num == "string") {
    return num + calc(num);
  }
  return num * 10 + calc(num);
};

export const Luhn = { calc, check, addCheckDigit };
