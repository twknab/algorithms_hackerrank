function staircase(n) {
  // Set some variables to control our counter and to hold our string
  let counter = 1,
    htmlStr = ``;

  // Loop up to n:
  while (counter <= n) {
    // Initialize the string to hold our hashtags and spaces
    // note: we need spaces as this is a right-aligned pyramid
    let hashtag = '',
      spaces = '';

    // Add as many hash tags as counter is currently at:
    for (var i = 0; i < counter; i++) {
      hashtag += '#';
    }

    // Add spaces for as many as (n-counter)
    for (var i = 0; i < (n - counter); i++) {
      spaces += '\xa0';
    }

    // If not at the last line, add a new line break:
    if (counter != n){
      hashtag += '\n';
    }

    // Assemble the string with hastags and spaces:
    htmlStr += spaces + hashtag;

    // Increase the counter:
    counter++;
  }

  console.log(htmlStr);
  return htmlStr;
}

staircase(6);
staircase(26);
staircase(6);



```
Although the above solution prints out the staircase, it does not seem to be what hacker rank is looking for: please see the next block of code for for another solution in progress.
```

function staircase(n) {
  // Set some variables to control our counter and to hold our string
  let counter = 1,
    htmlStr = ``;

  // Loop up to n:
  while (counter <= n) {
    // Initialize the string to hold our hashtags and spaces
    // note: we need spaces as this is a right-aligned pyramid
    let hashtag = '',
      spaces = '';

    // Add as many hash tags as counter is currently at:
    for (var i = 0; i < counter; i++) {
      hashtag += '#';
    }

    // Add spaces for as many as (n-counter)
    for (var i = 0; i < (n - counter); i++) {
      spaces += '\xa0';
    }

    // If not at the last line, add a new line break:
    if (counter != n){
      hashtag += '\n';
    }

    // Assemble the string with hastags and spaces:
    process.stdout.write(spaces + hashtag);

    // Increase the counter:
    counter++;
  }

  // return process.stdout.write;
}

function main() {
    var n = parseInt(readLine());
    staircase(n);
}
