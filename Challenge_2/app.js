function countDigit(number) {
  if (number === 0) {
    return 1;
  }
  if (number < 10) {
    return 1;
  } else {
    return 1 + countDigit(Math.floor(number / 10));
  }
}
console.log(countDigit(123));

////////////////////////////

countDigit(123);

1 + countDigit(12);

countDigit(12);

1 + countDigit(1);

countDigit(1);

1;
