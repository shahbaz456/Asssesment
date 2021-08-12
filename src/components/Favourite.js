import React from "react";
import Cardbeer from "./Cardbeer";
import "./Favourite.css";
import Navigationbar from "./Navigationbar";

export default function Favourite() {
  return (
    <div>
      <Navigationbar nosearch={true} />
      <Cardbeer brew={JSON.parse(localStorage.getItem("fav"))} />
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
