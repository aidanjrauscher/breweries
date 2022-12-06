const mongoose = require("mongoose")

const dbConnect = (mongodb_url) => {
  mongoose.set('strictQuery', false);
  return mongoose.connect(
    mongodb_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
}

module.exports = dbConnect