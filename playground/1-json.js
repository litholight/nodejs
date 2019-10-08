const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday"
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const personBuffer = fs.readFileSync("1-json.json");
const personJSON = personBuffer.toString();
const personData = JSON.parse(personJSON);
personData.name = "Sean";
personData.age = 34;
const stringedPerson = JSON.stringify(personData);
fs.writeFileSync("1-json.json", stringedPerson);
