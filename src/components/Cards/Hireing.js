import React from "react";
// reactstrap components
import{
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

const Hire = (props) => {
  return (
    <Card style={{ width: "100%" }}>
    <CardBody> 
      <CardTitle tag="h3">We are Hiring !!!</CardTitle>
      <br/>
      <div style={{textAlign: "center"}}>
        <h6 style={{textTransform:'none'}}>Drop your CV at hr@vaidiktechnologies.com</h6>
        </div>      
    </CardBody>
  </Card>
  );
};

export default Hire;
