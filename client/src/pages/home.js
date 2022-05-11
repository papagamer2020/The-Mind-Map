import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MapForm from "../components/MapForm";
import MapItem from "../components/MapItem";
import Spinner from "../components/Spinner";
//import { getMaps, reset } from "../features/maps/mapSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { maps, isLoading, isError, message } = useSelector(
    (state) => state.maps
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    // dispatch(getMaps());

    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Mind Map Home</p>
      </section>

      <MapForm />

      <section className="content">
        {maps.length > 0 ? (
          <div className="maps">
            {maps.map((map) => (
              <MapItem key={map._id} map={map} />
            ))}
          </div>
        ) : (
          <h3>You have not created a Mind Map </h3>
        )}
      </section>
    </>
  );
}

export default Home;
