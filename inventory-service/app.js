const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const winston = require("winston");

const app = express();
const PORT = 3003;

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
});

app.get("/health", (req, res) => {
  logger.info("Inventory Service health check");
  res.status(200).send("Inventory Service OK");
});

app.listen(PORT, () => {
  console.log(`Inventory Service listening on port ${PORT}`);
});
