const mongoose = require("mongoose");
const Adminschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const Userschema = new mongoose.Schema({
  userId: { 
    type: String, 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, unique: true 
  },
  mobile: { 
    type: String 
  },
  department: { 
    type: String 
  },
  address: { 
    type: String 
  },
  city: { 
    type: String
  },
  password: { 
    type: String, 
    required: true 
  },
  gender: { 
    type: String 
  },
  birthday: { 
    type: Date 
  },
  booksTaken: [{
    bookId: String, 
    checkindate: Date, 
    checkoutdate: Date 
  }
]
});

const Admin = mongoose.model("Admin", Adminschema);
const User = mongoose.model("Users", Userschema);

module.exports = { Admin, User };
