/*
# Output Format

You must print the following lines:

    -A decimal representing of the fraction of positive numbers in the array compared to its size.
    -A decimal representing of the fraction of negative numbers in the array compared to its size.
    -A decimal representing of the fraction of zeroes in the array compared to its size.

# Sample Input

6
-4 3 -9 0 4 1

# Sample Output

0.500000
0.333333
0.166667
*/

// [6, -4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
  // Complete this function
  let posNumb = 0,
    negNumb = 0,
    zilch = 0;

  // Grab first item in array (array length):
  n = arr.length;

  // Loop through array to evaluate:
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      posNumb += 1;
    } else if (arr[i] < 0) {
      negNumb += 1;
    } else {
      zilch += 1;
    }
  }

  // Asess our totals:
  let decPos = (posNumb / n).toFixed(6), // .000000 6th place value
    decNeg = (negNumb / n).toFixed(6),
    decZil = (zilch / n).toFixed(6);

  return `${decPos}
${decNeg}
${decZil}`
};

console.log(plusMinus([6, -4, 3, -9, 0, 4, 1]));

// Note: This solution did not work on hackerrank, because they put in an evil and sinister trick. Add this to the bottom function before running (Those evil bastards):
```
var result = plusMinus(arr);
process.stdout.write("" + result + "\n");
```
