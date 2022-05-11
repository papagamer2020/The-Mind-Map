const express = require("express");
const router = express.Router();
const {
  getmap,
  setmap,
  updatemap,
  deletemap,
} = require("../controllers/mapController");

const { protect } = require("../utils/auth");

router.route("/").get(protect, getmap).post(protect, setmap);
router.route("/:id").delete(protect, deletemap).put(protect, updatemap);

module.exports = router;
