import React from "react";
import { useState } from "react";
import Navigationbar from "./Navigationbar";
import "./Homepage.css";
import beer from "../assets/images/beer.png";
import Cardbeer from "../components/Cardbeer";
// import doodle from "../assets/images/doodle.jpg";

export default function Homepage() {
  const [brew, setBrew] = useState([]);

  const handleClick = async (search) => {
    await fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("show data of ", data);
        setBrew(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <Navigationbar handleClick={handleClick} />
      {brew.length === 0 ? (
        <div className="welcome">
          <h1> Welcome To Beer Pub </h1>{" "}
          <img className="beer" src={beer} alt="imag" />
        </div>
      ) : (
        <Cardbeer brew={brew} />
      )}
    </div>
  );
}
