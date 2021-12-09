const http = require("http");
const fs = require("fs/promises");

const PORT = 8080;

const requestHandler = async (request, response) => {
  const contacts = await fs.readFile("./db/contacts.json", "utf8");
  // if (request.url.indexOf("/home") >= 0) {
  //   response.writeHead(200, { "Content-type": "text/json" });
  //   return response.end('{ "url": "homepage" }');
  // }
  response.writeHead(200, { "Content-type": "text/json" });
  return response.end(contacts);
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    console.error("error at server:", err);
  }

  console.log(`server works at ${PORT} `);
});
