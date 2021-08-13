import React from "react";
import "./Cardbeer.css";
import Navigation from "./Navigationbar";
import { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
const Details = (history) => {
  const [companyDetails, setCompanyDetails] = useState([]);

  const getDetails = async () => {
    console.log("props", history);
    let company_Id = history.match.params.id;

    let response = await fetch(
      `https://api.openbrewerydb.org/breweries/${company_Id}`,
      {
        method: "GET",
      }
    );
    const searchresult = await response.json();
    console.log("Get Details ", searchresult);
    setCompanyDetails(searchresult);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div className="details-div">
      <Navigation />
      <Card className="card-child-details">
        <CardBody className="card-child-body-details">
          <h2>Company Details</h2>
          <CardTitle tag="h5">
            <b>Nick Name:</b>{" "}
          </CardTitle>
          <CardTitle tag="h5">Name: {companyDetails.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Brewery Type: {companyDetails.brewery_type}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            ID: {companyDetails.id}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {" "}
            City: {companyDetails.city}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            State: {companyDetails.state}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Country: {companyDetails.country}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Details;
