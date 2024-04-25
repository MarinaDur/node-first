const { readFile, writeFile } = require("fs");

readFile("./examplePath/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./examplePath/text.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    writeFile(
      "./examplePath/resultAsync.txt",
      `Here is the result: ${first} ${second}`,
      (err,
      (result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      })
    );
  });
});
