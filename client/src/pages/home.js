import React from "react";
import HistoryMaps from "../components/historymaps";
import CurrentMindMap from "../components/maps";

const Home = () => {
  return (
    <div className="container">
      <HistoryMaps />
      <CurrentMindMap />
      <NewIdea />
    </div>
  );
};

export default Home;
