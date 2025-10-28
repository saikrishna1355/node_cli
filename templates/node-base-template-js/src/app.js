require("./utils/logger");
require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "dev"}` });
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const apiV1Routes = require("./routes/api_v1");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Routes
app.use("/", apiV1Routes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
