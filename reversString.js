// we want to write a solution to revers array of characters forming a string;
// eg: ["h", "e", "l", "l", "o"] -> ["o", "e", "l", "l", "h"]
// eg: ["J", "a", "m", "a", "l"] -> ["l", "a", "m", "a", "J"]

const reversString = (s) => {
  // we have to get the length
  let len = s.length;
  // we need half of the length, which is the number of iteration
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
};
