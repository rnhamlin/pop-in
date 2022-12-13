const mongoose = require("mongoose");
//connects mongoose to mongoDB; connects to my database set up in mongoDB.(Uses name of the DB I choose)
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/socialMediadb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
