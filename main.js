//Write some text in file manually, then read this data with fs module, reverse this text and write reverse.txt

const fs = require("fs/promises");

async function main() {
  data = await fs.readFile("text.txt", "utf-8");

  const reversedData = data.split("").reverse().join("");

  await fs.writeFile("reverse.txt", reversedData);
}

main();

//2) Fetch data from this API: https://jsonplaceholder.typicode.com/users.
// Parse the data so that each object contains only four properties: id, name, username, and email. Write the resulting array to a file called users.json.

async function main1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      const users = data.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      }));

      fs.writeFile("users.json", JSON.stringify(users))
        .then(() => console.log("File written successfully"))
        .catch((err) => console.error(err));
    });
}

main1();

//3) Run the command node main.js Ferrari 2020 red, retrieve the data from process.argv,
//  and build a car object with the properties id, carModel, carColor, and carReleaseDate.
// (id should be unique) Append this object to cars.json. Each time you run this command,
//  a new object should be added to cars.json,
// so if you run it five times, you should have five objects in the file.

const [, , carName, carReleaseDate, carColor] = process.argv;

async function mine() {
  try {
    const data = await fs.readFile("cars.json", "utf-8");
    const Cars = JSON.parse(data);

    const Car = {
      id: Cars.length + 1,
      model: carName,
      color: carColor,
      releaseDate: carReleaseDate,
    };

    Cars.push(Car);
    await fs.writeFile("cars.json", JSON.stringify(Cars));
    console.log("New Car added");
  } catch (err) {
    console.log(err);
  }
}

mine();

//4) Write a random text into a file named text.txt.
// Then, read this file and count how many vowels are present.

async function main2() {
  const data = await fs.readFile("random.txt", "utf-8");

  const vowels = data.split("").filter((letter) => {
    return ["a", "e", "i", "o", "u"].includes(letter.toLowerCase());
  });

  console.log("Sul aris" + " " + vowels.length + " " + "Xmovani");
}

main2();
