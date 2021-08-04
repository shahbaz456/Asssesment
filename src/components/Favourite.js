import React from "react";
import "./Favourite.css";


export default function Favourite({ newFav }) {
  return (
    <div>
      <h1>Favourites</h1>
      <div>
        {newFav &&
          newFav.map((brewery) => {
            return (
              <li
                className="list-item card"
                key={brewery.id}
                data-target={"#detailsModal_" + brewery.id}
              >
                <div className="list-item">
                  <h3>{brewery.name}</h3>
                </div>
                <div className="list-item-title">
                  <p className="lead">{brewery.city + ", " + brewery.state}</p>
                </div>
              </li>
            );
          })}
      </div>
    </div>
  );
}
