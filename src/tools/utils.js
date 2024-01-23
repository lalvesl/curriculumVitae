const CHAR_LIST = String.fromCharCode(
  ...Array.from({ length: 256 }, (_, i) => i)
).replace(/[^A-Z]/gi, "");

export function countChar(num) {
  let rest = (num / CHAR_LIST.length) | 0;
  return CHAR_LIST[num % CHAR_LIST.length] + (rest ? countChar(rest) : "");
}
