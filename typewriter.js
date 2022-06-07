const sentence = "hello there from lighthouse labs";
let x = 100;
for (const char of sentence) {
  x += 100;
  setTimeout(() => {
    process.stdout.write(char);
  }, x)
}