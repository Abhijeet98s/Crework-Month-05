const StudentSchema = require("../model/studentModel");

exports.home = (req, res) => {
  res.send("Welcome to Student Management System");
};

exports.createDB = async (req, res) => {
  try {
    const { fullName, courseName, rollNo, email, city } = req.body;
    if (!(fullName || courseName || rollNo || email || city)) {
      res.status(200).json({
        success: false,
        message: "FullName,CourseName,RollNo,Email,City is required.",
      });
    }
    const studentData = await StudentSchema.create({
      fullName,
      courseName,
      rollNo,
      email,
      city,
    });
    const studentDB = await studentData.save();
    res.json({
      success: true,
      message: "Student Database is added to the Management server.",
      studentDB,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDB = async (req, res) => {
  try {
    const { stdId } = req.params;
    if (!stdId) {
      res.status(401).json({
        success: false,
        message: "stdId not found",
      });
    }
    const studentDB = await StudentSchema.findByIdAndDelete(stdId);
    if (studentDB) {
      res.json({
        success: false,
        message: "Student data deleted successfully",
        studentDB,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDB = async (req, res) => {
  try {
    const { stdId } = req.params;
    if (!stdId) {
      res.status(401).json({
        success: false,
        message: "stdId not found",
      });
    }
    const studentDB = await StudentSchema.findById(stdId);
    res.status(200).json({
      success: true,
      message: "Student Data retreived successfully",
      studentDB,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllDB = async (req, res) => {
  try {
    const studentDB = await StudentSchema.find();
    res.json({
      success: true,
      message: "All students data retreived successfully",
      studentDB,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

exports.editDB = async (req, res) => {
  try {
    const { stdId } = req.params;
    const { fullName, courseName, rollNo, email, city } = req.body;
    // console.log(fullName, courseName, rollNo, email, city);
    if (!(stdId || fullName || courseName || rollNo || email || city)) {
      res.status(200).json({
        success: false,
        message:
          "stdId, FullName, CourseName, RollNo, Email, City is required.",
      });
    }
    const studentDB = await StudentSchema.findByIdAndUpdate(stdId, {
      fullName,
      courseName,
      rollNo,
      email,
      city,
    });
    // console.log(studentDB)
    res.json({
      success: true,
      message: "Student data updated successfully",
      studentDB,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
