const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL;

const mongodbConnect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to Database"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
module.exports = mongodbConnect;
