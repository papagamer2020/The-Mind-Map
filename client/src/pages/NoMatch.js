import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Table flip">
            <p>(╯°□°）╯︵ ┻━┻</p>
          </span>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
