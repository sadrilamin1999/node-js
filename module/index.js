//read
/* fs.readFile("./text.txt", (error, data) => {
  if (error) console.log(error);
  console.log(data.toString());
});
 */

// Write
/* fs.writeFile("./text.txt", "Hello None", () => {
  console.log("File written successfully");
});
 */

// create folder
/* if (!fs.existsSync("./node")) {
  fs.mkdir("./node", (err) => {
    if (err) console.log(err);
    console.log("folder created");
  });
} else {
  fs.rmdir("./node", (err) => {
    if (err) console.log(err);
    console.log("folder removed");
  });
} */

// read stream

/* const myReadStream = fs.createReadStream("./text.txt");

myReadStream.on("data", (chuck) => {
  console.log(chuck.toString());
}); */

const fs = require("fs");

const myReadStream = fs.createReadStream("./text.txt");

const myWriteStream = fs.createWriteStream("./text1.txt");

myReadStream.pipe(myWriteStream);
