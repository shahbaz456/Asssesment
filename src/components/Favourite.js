import React from "react";
import Cardbeer from "./Cardbeer";
import "./Favourite.css";
import Navigationbar from "./Navigationbar";
import { useState } from "react";

export default function Favourite() {
  const [saveData, setsaveData] = useState(
    JSON.parse(localStorage.getItem("fav"))
  );
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
      return item;
    });
  };
  return (
    <div>
      <Navigationbar nosearch={true} />
      <Cardbeer brew={saveData} savechange={savechange} />
    </div>
    // <div>
    //   <h1>Favourites</h1>
    //   <div>
    //     {newFav &&
    //       newFav.map((brewery) => {
    //         return (
    //           <li
    //             className="list-item card"
    //             key={brewery.id}
    //             data-target={"#detailsModal_" + brewery.id}
    //           >
    //             <div className="list-item">
    //               <h3>{brewery.name}</h3>
    //             </div>
    //             <div className="list-item-title">
    //               <p className="lead">{brewery.city + ", " + brewery.state}</p>
    //             </div>
    //           </li>
    //         );
    //       })}
    //   </div>
    // </div>
  );
}
