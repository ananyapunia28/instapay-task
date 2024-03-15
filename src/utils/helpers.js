export const addCommaToNumber = (num) => {
  if (!num || isNaN(num)) return "";

  const str = String(num);

  let beforeDecimal = str.split(".")[0];
  let afterDecimal = str.split(".")[1];

  let res = "";
  let first = true;
  let count = 0;
  for (let i = beforeDecimal.length - 1; i >= 0; i--) {
    res = beforeDecimal[i] + res;
    count++;
    if (count === (first ? 3 : 2)) {
      res = (i === 0 ? "" : ",") + res;
      count = 0;
      first = false;
    }
  }

  return afterDecimal ? res + "." + afterDecimal : res;
};
