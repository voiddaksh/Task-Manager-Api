const mongoose = require("mongoose");
require("dotenv").config();
const Url = process.env.MONGODB_URL;
mongoose.connect(Url, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});
// mongoose.set("strictQuery", true);
// mongoose.connect(Config.mongo_db_connection_string);
