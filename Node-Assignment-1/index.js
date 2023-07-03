const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Welcome to the Home Page!</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>About Us</h1>");
    res.end();
  } else if (req.url === "/file") {
    fs.readFile(path.join(__dirname, "FileToRead.txt"), "utf8", (err, data) => {
      if (err) {
        res.write("<h1>Error reading file</h1>");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
