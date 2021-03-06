import React from "react";
// reactstrap components
import{
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge
} from "reactstrap";

function AchievementCard(props){
    return (
        <Card className="text-center">
          <CardBody>
            <CardTitle tag="h4">We registered as Pvt. Ltd.</CardTitle>
            <CardText>
              We got ourself regiested as Private Limited in 2015.
            </CardText>
            <Badge color="primary">6 Years Ago</Badge>
          </CardBody>
        </Card>
    );
  }
  
  export default AchievementCard;