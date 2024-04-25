const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./examplePath/first.txt", "utf8");
const second = readFileSync("./examplePath/text.txt", "utf8");

console.log(first, second);

//replace all in a file with this
writeFileSync(
  "./examplePath/first.txt",
  `Here is the result: ${first} ${second}`
);

//add to the file
writeFileSync("./examplePath/first.txt", `Appending: ${first} ${second}`, {
  flag: "a",
});
