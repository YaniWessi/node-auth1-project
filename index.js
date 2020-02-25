const express = require("express");
const helmet = require("helmet");
const apiRouter = require("./api/apiRouters.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api", apiRouter);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
