const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect("mongodb://localhost:27017/TaskManager")
  .then(() => {
    console.log("Connect to DB");
  })
  .catch((e) => {
    console.log("Error Wihle connected to DB");
    console.log(e);
  });

module.exports = mongoose;
