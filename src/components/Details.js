import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();

  // console.log("sdsd", brewery);
  const breweryAddress =
    state.beer?.street +
    ", " +
    state.beer?.city +
    ", " +
    state.beer?.state +
    " " +
    state.beer?.postal_code;

  return (
    <div>
      <div id={"detailsModal_" + state.beer?.id} key={state.beer?.id}>
        <div role="document">
          <h5 className="modal-title" id="exampleModalLongTitle">
            {state.beer?.name}
          </h5>
        </div>
        <div className="modal-body">
          <p>{state.beer?.brewery_type}</p>
          <p>
            <a>{breweryAddress}</a>
          </p>
          <p>{state.beer?.phone ? state.beer.phone : <span>None</span>}</p>
          <p>
            {state.beer?.website_url ? (
              <a
                aria-label="Brewery website"
                href={state.beer.website_url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {state.beer?.website_url}
              </a>
            ) : (
              <span>None</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
