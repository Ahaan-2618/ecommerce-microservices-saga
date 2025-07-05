const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const winston = require("winston");

const app = express();
const PORT = 3002;

app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
});

app.get("/health", (req, res) => {
  logger.info("Payment Service health check");
  res.status(200).send("Payment Service OK");
});

app.listen(PORT, () => {
  console.log(`Payment Service listening on port ${PORT}`);
});
