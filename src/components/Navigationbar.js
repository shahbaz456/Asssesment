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
import { Link } from "react-router-dom";

const Navigationbar = ({ searchedItem, nosearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState([]);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="brand" href="/">
            <b>Beer Pub</b>
            <img className="imgg" src={beer} alt="imag"></img>
          </NavbarBrand>

          <div className="input-group mb-0">
            {!nosearch ? (
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
            ) : null}
          </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            <Link to="/favourite">
              <NavbarText>
                <b>Favourites</b>
              </NavbarText>
            </Link>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Navigationbar;
