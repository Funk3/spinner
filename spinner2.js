let spinner = "|/-\\";

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write("\r" + spinner[i]);
  }, 200 * i)
}


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);