import React from "react";
import Cardbeer from "./Cardbeer";
import "./Favourite.css";
import Navigationbar from "./Navigationbar";
import { useState } from "react";

export default function Favourite() {
  const [saveData, setsaveData] = useState(
    JSON.parse(localStorage.getItem("fav"))
  );
  // const [nicksearch, setnicksearch] = useState([]);

  const savechange = (id, nick_name) => {
    console.log("please shw msg");
    let existdata = [...saveData];
    console.log("show new data", existdata);
    existdata = existdata.map((item) => {
      if (item.id === id) {
        if (item?.nick_name) {
          item.nick_name = nick_name;
        } else {
          item["nick_name"] = nick_name;
        }
      }
      localStorage.setItem("fav", JSON.stringify(existdata));
      return item;
    });
  };

  return (
    <div>
      <Navigationbar nosearch={true} setsaveData={setsaveData} />
      <Cardbeer brew={saveData} savechange={savechange} />
    </div>
  );
}
