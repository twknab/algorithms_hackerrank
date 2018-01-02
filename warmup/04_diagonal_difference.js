
/*
Given a square matrix of size N x N, calculate the absolute difference between the sums of its diagonals.

## Input Format

The first line contains a single integer, N. The next N lines denote the matrix's rows, with each line containing N space-separated integers describing the columns.

## Constraints
  -100 <= Elements in the matrix <= 100

## Output Format

Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

## Sample Input

3
11 2 4
4 5 6
10 8 -12

## Sample Output

15

## Explanation

The primary diagonal is:

11
   5
     -12

Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10

Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is absolute value function
*/




// If the matrix stays a static 3x3 we can do something where we take the multi-line string, convert it to a matrix, and then manually crank out the values:
function diagonalDifference(a) {
  // Convert multi-line string to array:
  a = a.trim().split("\n").map( x => x.split(/\s+/).map(Number));

  // Return absolute difference from two diagnols:
  return Math.abs((a[1][0] + a[2][1] + a[3][2]) - (a[3][0] + a[2][1] + a[1][2]))
};

console.log(diagonalDifference(
`3
11 2 4
4 5 6
10 8 -12`
));
// => 15

// If we're given the matrix of integers in advance, we can just return the values:

function anotherDiagDifference(a) {
  return Math.abs((a[0][0] + a[1][1] + a[2][2]) - (a[2][0] + a[1][1] + a[0][2]));
};

// console.log(anotherDiagDifference([[11,2,4],[4,5,6],[10,8,-12]]));
// => 15


// But what if the dimensions of the matrix changes? How can we change our index values to a variable instead, who adjusts based upon the size of the matrix?

function diagDiff(a) {
  let n = a.length, // get length of array matrix (number of rows)
    sum = 0, // set empty sum
    primaryIdx = 0, // first diagonal index (will be first row)
    secondaryIdx = n - 1; // second diagonal index (will be last row)

  while(primaryIdx < a.length) { // loop through each row
    // Note: We use `primaryIdx < a.length` comparison because once primaryIdx value is less than the length of the matrix, we know we're on our last row and last position.
    sum += a[primaryIdx][primaryIdx] - a[secondaryIdx][primaryIdx]; // sum each diagonal place difference in real-time
    primaryIdx += 1; // increase primary index by 1 (from from top down)
    secondaryIdx -= 1; // decrease secondary index by 1 (move from bottom up)
  };

  return Math.abs(sum); // return absolute sum (note you absolute at the END, not each individual difference -- which would change the results. These specs were given by the algorithm thus the construction).
};

console.log(diagDiff(
  `3
11 2 4
4 5 6
10 8 -12`
));
// => 15
