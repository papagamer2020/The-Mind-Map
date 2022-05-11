const express = require("express");
const router = express.Router();
const {
  getmap,
  setmap,
  updatemap,
  deletemap,
  getmaps,
} = require("../controllers/mapController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getmaps).post(protect, setmap);
router.route("/:id").delete(protect, deletemap).put(protect, updatemap);

module.exports = router;
