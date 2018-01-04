/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

# Input Format

A single line of five space-separated integers.

# Constraints

    Each integer is in the inclusive range [1, 10^9].

# Output Format

  Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than 32 bit integer.)

# Sample Input

1 2 3 4 5

# Sample Output

10 14

# Explanation

Our initial numbers are 1, 2, 3, 4, and 5. We can calculate the following sums using four of the five integers:

    If we sum everything except 1, our sum is 2 + 3 + 4 + 5 = 14.
    If we sum everything except 2, our sum is 1 + 3 + 4 + 5 = 13.
    If we sum everything except 3, our sum is 1 + 2 + 4 + 5 = 12.
    If we sum everything except 4, our sum is 1 + 2 + 3 + 5 = 11.
    If we sum everything except 5, our sum is 1 + 2 + 3 + 4 = 10.

As you can see, the minimal sum is 1 + 2 + 3 + 4 = 10 and the maximal sum is 2 + 3 + 4 + 5 = 14. Thus, we print these minimal and maximal sums as two space-separated integers on a new line.

# Hints: Beware of integer overflow! Use 64-bit Integer.
*/

function miniMaxSum(arr) {
  // Sort the array:
  arr.sort(function(a, b){return a-b});
  // console.log(arr);

  // Initialize max and min variables:
  let max = 0,
    min = 0,
    max_set = [],
    min_set = [];

  max_set.push(arr[4], arr[3], arr[2], arr[1]);
  min_set.push(arr[0], arr[1], arr[2], arr[3]);

  for (var i = 0; i < max_set.length; i++) {
    max += max_set[i];
    min += min_set[i];
  }

  return `${min} ${max}`;
};

function main() {
   var arr = readLine().split(" ")
   arr = arr.map(Number);
   var result = miniMaxSum(arr);
   process.stdout.write(result);
}

miniMaxSum([5, 2, 3, 1, 4]);
