const express = require("express");
const userRoutes = require("./route/User");
const mentorRoutes = require("./route/Mentor");
// const technologyRoutes = require("./route/Technology");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const Tag=require("./models/Tag");
const Technology=require("./models/Technology");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors({
  origin: "*",
  credentials: true,
}));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Insight IQ API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js", "./controllers/*.js"], // or wherever your JSDoc comments are
};
const specs = swaggerJsdoc(options);
  
const swaggerDocument = YAML.load('./docs/openapi.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

app.use('/api/v1/auth', userRoutes);
// app.use('/api/v1/tech', technologyRoutes);
app.use('/api/v1/mentors', mentorRoutes);

app.get("/insight-iq", (req, res) => {
  res.send("Welcome to the insight-iq API");
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
  .catch(err => console.error(err));
