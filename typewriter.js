const sentence = "Hello there from lighthouse labs. I am learning about asynchronous javascript!";
let interval = 50;

if (sentence) {
  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), interval);
    interval += 50;
  }
  setTimeout(() => console.log(), interval);
}