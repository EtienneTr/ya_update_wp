 const fsp = require("fs").promises;

const testFs = async () => {
    await fsp.appendFile('test.txt', "OK !");
    console.log("Done.");
};

testFs();