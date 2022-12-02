const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim:true
  },
  courseName: {
    type: String,
    required: true,
    trim:true
  },
  rollNo: {
    type: String,
    required: true,
    trim:true
  },
  email: {
    type: String,
    trim:true
  },
  city: {
    type: String,
    trim:true
  },
});

module.exports = mongoose.model("StudentSchema", studentSchema);
