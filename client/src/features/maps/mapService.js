import axios from "axios";

const API_URL = "/api/maps/";

// Create new map
const createMap = async (mapData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, mapData, config);

  return response.data;
};

// Get user maps
const getMaps = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Delete user goal
const deleteMap = async (mapId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + mapId, config);

  return response.data;
};

const mapService = {
  createMap,
  getMaps,
  deleteMap,
};

export default mapService;
