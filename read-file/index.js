const fs = require("fs");
const ourReadStream = fs.createReadStream(`${__dirname}/data.txt`);

ourReadStream.on("data", (chunk) => {
  console.log(chunk.toString());
});
