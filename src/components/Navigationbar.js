import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";

import "./Navigationbar.css";

import beer from "../assets/images/beer.png";
import { Link, useLocation } from "react-router-dom";

const Navigationbar = ({ searchedItem, nosearch, setsaveData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState([]);
  // const [searchnick, setsearchnick] = useState([]);
  const currentPath = useLocation().pathname;

  const toggle = () => setIsOpen(!isOpen);

  let nicksearch = JSON.parse(localStorage.getItem("fav"));
  console.log("nick search ");
  const handlenick = (value) => {
    console.log("value", value);
    const result = nicksearch.filter((item) => {
      if (item?.nick_name) {
        if (item.nick_name.includes(value)) return item;
      }
    });
    setsaveData([...result]);
  };

  const searchrender = () => {
    if (currentPath.includes("/about")) {
      return null;
    }
    if (!nosearch) {
      return (
        <>
          <input
            type="text"
            value={search}
            placeholder="Search Breweries..."
            aria-label="Search"
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-dark mx-1"
            type="button"
            id="button-addon1"
            data-ripple-color="dark"
            onClick={() => searchedItem(search)}
          >
            Search
          </button>
        </>
      );
    } else {
      return (
        <>
          <input
            type="text"
            placeholder="Search Nickname..."
            aria-label="Search"
            className="form-control"
            onChange={(e) => handlenick(e.target.value)}
          />
          {/* <button
            className="btn btn-dark mx-1"
            type="button"
            id="button-addon1"
            data-ripple-color="dark"
            onClick={() => searchnick(searchnick)}
          >
            Search
          </button>{" "} */}
        </>
      );
    }
  };

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <div className="wraping">
            <div className="logo">
              <NavbarBrand className="brand" href="/">
                <b>Beer Pub</b>
                <img className="imgg" src={beer} alt="imag"></img>
              </NavbarBrand>
            </div>

            <div className="searchcard">{searchrender()}</div>
            <div className="favourite">
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar></Nav>
                <Link to="/favourite">
                  <NavbarText className="fav">
                    <b>Favourites</b>
                  </NavbarText>
                </Link>
              </Collapse>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Navigationbar;
