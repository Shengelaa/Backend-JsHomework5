//Write some text in file manually, then read this data with fs module, reverse this text and write reverse.txt

const fs = require("fs/promises");

async function main() {
  data = await fs.readFile("text.txt", "utf-8");

  const reversedData = data.split("").reverse().join("");

  await fs.writeFile("reverse.txt", reversedData);
}

main();
