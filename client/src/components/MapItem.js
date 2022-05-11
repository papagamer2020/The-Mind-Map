import { useDispatch } from "react-redux";
import { deleteMap } from "../features/maps/mapSlice";

function MapItem({ map }) {
  const dispatch = useDispatch();

  return (
    <div className="map">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{map.text}</h2>
      <button onClick={() => dispatch(deleteMap(map._id))} className="close">
        X
      </button>
    </div>
  );
}

export default MapItem;
