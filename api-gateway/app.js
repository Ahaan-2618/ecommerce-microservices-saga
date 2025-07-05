const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const winston = require("winston");

const app = express();
const PORT = 3000;

// Middleware
app.use(helmet());
app.use(express.json());
app.use(morgan("combined"));

// Logger
const logger = winston.createLogger({
  level: "info",
  transports: [new winston.transports.Console()],
});

// Health check route
app.get("/health", (req, res) => {
  logger.info("API Gateway health check");
  res.status(200).send("API Gateway OK");
});

app.listen(PORT, () => {
  console.log(`API Gateway listening on port ${PORT}`);
});
