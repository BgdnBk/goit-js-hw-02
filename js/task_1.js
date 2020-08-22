const getItemsString = function (array) {
  "use strict";
  // Write code under this line
  let item = "";

  for (let i = 0; i < array.length; i += 1) {
    item += `${i + 1} - ${array[i]}\n`;
  }
  return item;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
