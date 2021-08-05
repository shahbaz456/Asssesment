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
// import beer from "../assets/images/beer.png";

const Cardbeer = ({ brew }) => {
  return (
    <div className="beerclass">
      {brew &&
        brew.map((brew) => {
          return (
            <Card className="cardss">
              <CardBody className="bodycard">
                <CardTitle tag="h5">{brew.name}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  {brew.type}
                </CardSubtitle>
                <CardText>{brew.adress}</CardText>
                <Button>Like</Button>
              </CardBody>
            </Card>
          );
        })}{" "}
    </div>
  );
};

export default Cardbeer;
