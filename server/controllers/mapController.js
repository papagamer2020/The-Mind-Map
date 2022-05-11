const asyncHandler = require("express-async-handler");

const Map = require("../models/mapModel");
const User = require("../models/userModel");

// @desc    Get map
// @route   GET /api/map
// @access  Private
const getmaps = asyncHandler(async (req, res) => {
  const map = await map.find({ user: req.user.id });

  res.status(200).json(map);
});

// @desc    Set map
// @route   POST /api/map
// @access  Private
const setmap = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const map = await map.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(map);
});

// @desc    Update map
// @route   PUT /api/map/:id
// @access  Private
const updatemap = asyncHandler(async (req, res) => {
  const map = await map.findById(req.params.id);

  if (!map) {
    res.status(400);
    throw new Error("map not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the map user
  if (map.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedmap = await map.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedmap);
});

// @desc    Delete map
// @route   DELETE /api/map/:id
// @access  Private
const deletemap = asyncHandler(async (req, res) => {
  const map = await map.findById(req.params.id);

  if (!map) {
    res.status(400);
    throw new Error("map not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the map user
  if (map.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await map.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getmaps,
  setmap,
  updatemap,
  deletemap,
};
