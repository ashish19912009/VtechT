import React from "react";
// reactstrap components
import {Container, Row, Col} from 'reactstrap';
import AchvCard from '../Cards/AchievementCard';
import AchvCard1 from '../Cards/AchievementCard1';

const JourneySection = () => {
    return (
      <>
      <div className="section section-nucleo-icons" style={{backgroundColor:'#4a235a'}}>
          <Container>
          <h2 className="title text-center" style={{color:'white'}}>Our Journey</h2>
          <br/>
            <Row>
            <Col xs={12} sm={6}>
                  <AchvCard/>
            </Col>
                <Col xs={12} sm={6}>
                    <h5 className="description" style={{color:'white'}}>
                        We got ourself regiested as Private Limited in 2015 and since then we are continuously growing and expanding our operations. We have designed and devepled multiple applications and websites for individual clients and govt. organization.
		    		</h5>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col xs={12} sm={6}>
                    <h5 className="description" style={{color:'white'}}>
		    					Keeping in mind with home security and embracing IOT we designed and developed a unit Smart Device for home and offices which can be used for controlling your electricals of your home from anywhere.
		    		</h5>
                </Col>
                <Col xs={12} sm={6}>
                    <AchvCard1/>
                </Col>
            </Row>
      </Container>
      </div>

        
      </>
    );
  }
  
  export default JourneySection;