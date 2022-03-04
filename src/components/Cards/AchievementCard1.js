import React from "react";
// reactstrap components
import{
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge
} from "reactstrap";

function AchievementCard1(props){
    return (
        <Card className="text-center">
          <CardBody>
            <CardTitle tag="h4">Own Product</CardTitle>
            <CardText>
              Vaidik Smart Device
            </CardText>
            <Badge color="primary">3 Years Ago</Badge>
          </CardBody>
        </Card>
    );
  }
  
  export default AchievementCard1;