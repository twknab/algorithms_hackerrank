
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




// In this example, we'll take a multi-line string literal and convert it to a matrix, and then do our sum analysis: (Note: this is different than the platform question):
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

// Another way to do it, given HackerRank's algorithm actually takes our multi-line string and converts it to a series of integers for us:

function anotherDiagDifference(a) {
  return Math.abs((a[0][0] + a[1][1] + a[2][2]) - (a[2][0] + a[1][1] + a[0][2]));
};

console.log(anotherDiagDifference([[11,2,4],[4,5,6],[10,8,-12]]));
