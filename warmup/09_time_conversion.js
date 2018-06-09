/*
Given a time in 12-hour AM / PM format, convert it to military(24 - hour) time.

Note: Midnight is 12: 00: 00 AM on a 12 - hour clock, and 00: 00: 00 on a 24 - hour clock.Noon is 12: 00: 00 PM on a 12 - hour clock, and 12: 00: 00 on a 24 - hour clock.

Input Format

A single string containing a time in -hour clock format(i.e.: or), where and.

Output Format

Convert and print the given time in -hour format, where.

Sample Input

07: 05: 45 PM

Sample Output

19: 05: 45

*/

function timeConversion(s) {
  // int check:
  if (typeof s !== 'string') {
    return null;
  }
  // split string by `:`
  let time = s.split(':');

  // split seconds and period to determine if AM/PM:
  let seconds = time[2].slice(0, 2);
  let period = time[2].slice(2, 4);

  // Replace seconds with number value:
  time[2] = seconds;

  // If PM detected, add 12 hours to period hour:
  if (period === 'PM' && time[0] !== '12') {
    time[0] = Number(time[0]) + 12;
  }
  if (period === 'AM' && time[0] === '12') {
    time[0] = '00';
  }

  console.log(`${time[0]}:${time[1]}:${time[2]}`);
  return `${time[0]}:${time[1]}:${time[2]}`;
}