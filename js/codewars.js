function getAverage(marks) {
  let res = 0;
  let mean = 0;
  for (let i = 0; i < marks.length; i += 1) {
    res += marks[i];
    console.log(marks[i]);
    mean = Math.floor(res / marks.length);
  }
  return mean;
  //TODO : calculate the downwar rounded average of the marks array
}

console.log(getAverage([1, 5, 87, 45, 8, 8]));
