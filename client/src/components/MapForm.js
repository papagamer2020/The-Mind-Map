import { useState } from "react";
import { useDispatch } from "react-redux";
//import { createMap } from "../features/maps/mapSlice";

function MapForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    //  dispatch(createMap({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">MindMap</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add MindMap
          </button>
        </div>
      </form>
    </section>
  );
}

export default MapForm;
