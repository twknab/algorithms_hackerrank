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
Here's a much cleaner and faster way to do things:
```

function staircase(n) {
  for (var i = 0; i < n; i++){
      var spaces = new Array(n - i).join(" ");
      var hashes = new Array(2 + i).join("#");
      console.log(spaces+hashes);
  }
};

function main() {
  var n = parseInt(readLine());
  result = staircase(n);
  process.stdout.write(result);
};
