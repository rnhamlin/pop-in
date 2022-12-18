const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
//const mongoose = require("mongoose");

const PORT = process.env.port || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/socialMediadb",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

//the first way i tried it
//app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
