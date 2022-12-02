const express = require("express");
const router = express.Router();
const {
  home,
  createDB,
  getAllDB,
  getDB,
  editDB,
  deleteDB,
} = require("../controllers/studentController");

router.route("/").get(home);
router.route("/create_db").post(createDB);
router.route("/getAll_db").get(getAllDB);
router.route("/get_db/:stdId").get(getDB);
router.route("/edit_db/:stdId").put(editDB);
router.route("/delete_db/:stdId").delete(deleteDB);

module.exports = router;
