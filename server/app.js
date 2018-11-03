const express = require("express");
const graohqlHTTP = require("express-graphql");

const app = express();
app.use("/graphql", graohqlHTTP({}));

app.listen(4000, () => "Server started on port 4000");
