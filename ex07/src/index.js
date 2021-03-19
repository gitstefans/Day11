// Only change code below this line
function largestNumFromArr(arr) {
  var maxNumArray = [];
  var k = 0;
  for (var i = 0; i < arr.length; i++) {
    k = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > k) {
        k = arr[i][j];
      }
    }
    maxNumArray.push(k);
  }
  return maxNumArray;
}
// Only change code above this line
//console.log(largestNumFromArr(myArray)); // Change this line
console.log(largestNumFromArr([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
module.exports = largestNumFromArr;
