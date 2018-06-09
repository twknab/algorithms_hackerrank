/*
HackerLand University has the following grading policy:

  Every student receives a in the inclusive range from to.
Any less than is a failing grade.

Sam is a professor at the university and likes to round each student 's according to these rules:

If the difference between the and the next multiple of is less than, round up to the next multiple of .
If the value of is less than, no rounding occurs as the result will still be a failing grade.

For example, will be rounded to but will not be rounded because the rounding would result in a number that is less than.

Given the initial value of
  for each of Sam 's students, write code to automate the rounding process. Complete the function solve that takes an integer array of all grades, and return an integer array consisting of the rounded grades. For each , round it according to the rules above and print the result on a new line.

Input Format

The first line contains a single integer denoting(the number of students).
Each line of the subsequent lines contains a single integer, , denoting student 's grade.

Constraints

Output Format

For each of the grades, print the rounded grade on a new line.

Sample Input 0

4
73
67
38
33

Sample Output 0

75
67
40
33

Explanation 0

image

Student received a, and the next multiple of from is.Since, the student 's grade is rounded to .
Student received a, and the next multiple of from is.Since, the grade will not be modified and the student 's final grade is .
Student received a, and the next multiple of from is.Since, the student 's grade will be rounded to .
Student received a grade below, so the grade will not be modified and the student 's final grade is .

*/

function gradingStudents(grades) {
  let roundedGrades = [];

  // Input check:
  if (!Array.isArray(grades)) {
    return null;
  }
  // Boundary and edge case check:
  if (grades.length < 1) {
    return null;
  }
  // Loop through grades:
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] <= 100 && grades[i] >= 90) {
      if (100 - grades[i] < 3) {
        grades[i] = 100;
      }
      if (95 - grades[i] < 3 && 95 - grades[i] > 0) {
        grades[i] = 95;
      }
      roundedGrades.push(grades[i]);
    }
    if (grades[i] <= 89 && grades[i] >= 80) {
      if (90 - grades[i] < 3) {
        grades[i] = 90;
      }
      if (85 - grades[i] < 3 && 85 - grades[i] > 0) {
        grades[i] = 85;
      }
      roundedGrades.push(grades[i]);
    }
    if (grades[i] <= 79 && grades[i] >= 70) {
      if (80 - grades[i] < 3) {
        grades[i] = 80;
      }
      if (75 - grades[i] < 3 && 75 - grades[i] > 0) {
        grades[i] = 75;
      }
      roundedGrades.push(grades[i]);
    }
    if (grades[i] <= 69 && grades[i] >= 60) {
      if (70 - grades[i] < 3 && 70 - grades[i] > 0) {
        grades[i] = 70;
      }
      if (65 - grades[i] < 3 && 65 - grades[i] > 0) {
        grades[i] = 65;
      }
      roundedGrades.push(grades[i]);
    }
    if (grades[i] <= 59 && grades[i] >= 50) {
      if (60 - grades[i] < 3) {
        grades[i] = 60;
      }
      if (55 - grades[i] < 3 && 55 - grades[i] > 0) {
        grades[i] = 55;
      }
      roundedGrades.push(grades[i]);
    }
    if (grades[i] <= 49 && grades[i] >= 40) {
      if (50 - grades[i] < 3) {
        grades[i] = 50;
      }
      if (45 - grades[i] < 3 && 45 - grades[i] > 0) {
        grades[i] = 45;
      }
      roundedGrades.push(grades[i]);
    }
    if (grades[i] <= 39) {
      if (40 - grades[i] < 3) {
        grades[i] = 40;
      }
      roundedGrades.push(grades[i]);
    }
  }

  console.log(roundedGrades);
  return roundedGrades;
}