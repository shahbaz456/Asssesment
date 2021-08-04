import React, { useState } from "react";
import Favourite from "../Favourite";
import Header from "../Header";
import { BsFillHeartFill } from "react-icons/all";
import "./Breweries.css";
// import Details from "../Details/Details";

import { Link } from "react-router-dom";

function Breweries() {
  const [search, setSearch] = useState([]);
  const [breweries, setBreweries] = useState([]);
  const [fav, setFav] = useState([]);

  const HanldeClick = async () => {
    await fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBreweries(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const adFav = (brewery) => {
    fav.push(brewery);
    setFav([...fav]);
  };

  const breweriesArr = breweries.map((brewery) => (
    <>
      <div className="results-container">
        <Link
          to={{ pathname: `detail/${brewery.id}`, state: { beer: brewery } }}
        >
          <li
            className="list-item"
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
        </Link>
        <button className="btnn" onClick={() => adFav(brewery)}>
          <BsFillHeartFill />
        </button>
      </div>

      {/* <Details brewery={brewery} /> */}
    </>
  ));

  return (
    <>
      <Header />

      <div className="search-bar-container">
        <div className="input-group mb-0">
          <input
            type="text"
            value={search}
            placeholder="Search "
            aria-label="Search"
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-dark mx-1"
            type="button"
            id="button-addon1"
            data-ripple-color="dark"
            onClick={HanldeClick}
          >
            Search
          </button>
        </div>
      </div>

      <ul className="list">{breweries && breweriesArr}</ul>
      <Favourite newFav={fav} />
    </>
  );
}

export default Breweries;
