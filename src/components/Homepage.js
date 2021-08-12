import React from "react";
import { useState } from "react";
import Navigationbar from "./Navigationbar";
import "./Homepage.css";
import beer from "../assets/images/beer.png";
import Cardbeer from "../components/Cardbeer";
// import doodle from "../assets/images/doodle.jpg";

export default function Homepage() {
  const [brew, setBrew] = useState([]);

  const searchedItem = async (search) => {
    await fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("show data of ", data);
        let check = JSON.parse(localStorage.getItem("fav"));
        console.log("please show ", check);
        for (let i = 0; i < check.length; i++) {
          for (let j = 0; j < data.length; j++) {
            if (check[i].id === data[j].id) {
              data[j].disabled = true;
            }
          }
        }
        setBrew(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const disableLike = (index) => {
    brew[index].disabled = true;
    setBrew([...brew]);
  };
  return (
    <div>
      <Navigationbar searchedItem={searchedItem} />
      {brew.length === 0 ? (
        <div className="welcome">
          <h1> Welcome To Beer Pub </h1>{" "}
          <img className="beer" src={beer} alt="imag" />
        </div>
      ) : (
        <Cardbeer brew={brew} noLike={true} disableCurrent={disableLike} />
      )}
    </div>
  );
}
