const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error("Failed to write to log file:", err);
        }
        res.end("Hello from server");
    });
});

myServer.listen(4000, () => console.log("Server started"));
