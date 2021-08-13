import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./Cardbeer.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Model from "./Model";

// import beer from "../assets/images/beer.png";

import { useHistory } from "react-router";

const Cardbeer = ({ brew, noLike, disableCurrent, savechange }) => {
  const [fav, setfav] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setedit] = useState("");
  const toggle = () => setModal(!modal);
  const history = useHistory();

  const adFav = (element, index) => {
    console.log("please chup karao hassam ko", element);
    fav.push(element);
    setfav([...fav]);
    localStorage.setItem("fav", JSON.stringify(fav));
    disableCurrent(index);
    toast.success("successfully added to favourite");
  };

  const deleteFav = (element, index) => {
    brew.splice(index, 1);
    setfav([...brew]);
    localStorage.setItem("fav", JSON.stringify(brew));
    toast.warn("Removed from favourite");
  };
  const getDetails = (element) => {
    console.log("heelo", element);
    history.push(`/about/${element.id}`);
  };
  return (
    <>
      <div className="beerclass">
        {brew &&
          brew.map((element, index) => {
            return (
              <Card className="maincard">
                <CardBody className="bodycard">
                  <CardTitle
                    tag="h5"
                    className="details"
                    onClick={() => getDetails(element)}
                  >
                    {element.name}
                  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {element.brewery_type}
                  </CardSubtitle>
                  <CardText>{element.adress}</CardText>

                  {noLike ? (
                    <Button
                      disabled={element.disabled}
                      onClick={() => {
                        adFav(element, index);
                      }}
                    >
                      Like
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={() => {
                          setedit({ ...element });
                          toggle();
                        }}
                      >
                        Edit
                      </Button>
                      <br />
                      <Button
                        color="danger"
                        onClick={() => {
                          deleteFav(element, index);
                        }}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </CardBody>
              </Card>
            );
          })}
        <Model
          modal={modal}
          toggle={toggle}
          edit={edit}
          savechange={savechange}
        />
      </div>
    </>
  );
};

export default Cardbeer;
