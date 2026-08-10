// const cities = require("./data/data.js");
// console.log(cities);

// const fs = require("fs");
// fs.writeFileSync("test.txt", "Hello World");

// const path = require("path");
// const filename = path.join(__dirname, "data", "test.txt");
// console.log(filename);


// const os = require("os");
// const userInfo = os.userInfo();
// const freeMemory = os.freemem();
// const totalMemory = os.totalmem();
// const uptime = os.uptime();

// console.log("User Info:", userInfo);
// console.log("Free Memory:", freeMemory);
// console.log("Total Memory:", totalMemory);
// console.log("Uptime:", uptime);

const chalk = require("chalk");
console.log(chalk.blue("Hello World"));
console.log(chalk.red("Error:Something went wrong!"));
console.log(chalk.green("Success: Operation completed successfully"));
console.log(chalk.yellow("Warning: This action may have not work"));

const http = require("http")
require("dotenv").config();
const prcess = require("process");
// const name = process.argv[2];
// console.log(process.env.PORT)
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html"});
    res.writeHead("<h1>Hello World</h1>");
    res.write(`<p>Welcome to our Node.jsserver!</p>`)
    res.end();
    });

server.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`)
});