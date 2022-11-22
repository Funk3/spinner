setTimeout(() => {
  process.stdout.write('\r| my name is mud');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ who are you');
}, 300);

setTimeout(() => {
  process.stdout.write('\r- I dunno what Im doing');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  oh god'); 
}, 700);