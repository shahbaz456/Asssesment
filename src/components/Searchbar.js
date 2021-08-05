import React from "react";
import "./Searchbar.css";

export default function Searchbar() {
  return (
    <div>
      <div className="input-group mb-0">
        <input
          type="text"
          // value={search}
          placeholder="Search Breweries..."
          aria-label="Search"
          className="form-control"
          // onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn btn-dark mx-1"
          type="button"
          id="button-addon1"
          data-ripple-color="dark"
          // onClick={HanldeClick}
        >
          Search
        </button>
      </div>
    </div>
  );
}
