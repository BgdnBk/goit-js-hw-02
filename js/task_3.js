function findLongestWord(string = "") {
  // Write code under this line
  let wordArr = string.split(" ");
  let word = wordArr[0];
  // console.log(word);
  for (let i = 0; i < wordArr.length; i += 1) {
    if (wordArr[i].length > word.length) {
      word = wordArr[i];
    }
  }
  return word;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'

// for (let i = 0; i < string.length; i += 1) {
//   word = result[0];
//   // console.log(word);
//   // console.log(result[i]);
//   if (word.length <= result.length) {
//     word = result;
//     console.log(word);
//   }

//   // if (result <= string.length) {

//   // }
// }

// return word;
