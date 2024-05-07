const express = require("express");
const app = express();
const data = require("./mockdata.json");
const cors = require("cors");

const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
app.use(cors({}));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // for GUI
  })
);

app.listen("4000", () => {
  console.log("Server running");
});
