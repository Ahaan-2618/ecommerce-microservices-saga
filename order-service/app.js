const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const winston = require("winston");

const app = express();
const PORT = 3001;

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
});

app.get("/health", (req, res) => {
  logger.info("Order Service health check");
  res.status(200).send("Order Service OK");
});

app.listen(PORT, () => {
  console.log(`Order Service listening on port ${PORT}`);
});
