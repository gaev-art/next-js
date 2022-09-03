import mongoose from "mongoose";

const User = new mongoose.Schema({
  id: {type: Number},
  name: {type: String},
  username: {type: String},
  email: {type: String},
  address: {
    street: {type: String},
    suite: {type: String},
    city: {type: String},
    zipcode: {type: String},
  },
  phone: {type: String},
  website: {type: String},
  company: {
    name: {type: String},
    catchPhrase: {type: String},
    bs: {type: String},
  }
});
// mongoose.model = {}
module.exports = mongoose.models.User || mongoose.model("User", User);