import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import LogoBig from '../Logo/LogoBig/LogoBig';

const AboutUsSection = (props) => {
  return (
      <div className="section section-nucleo-icons" style={{backgroundColor:'#F9F9F9'}}>
          <Container>
            <Row>
            <Col xs={12} sm={4}>
                  <LogoBig/>
                </Col>
                <Col xs={12} sm={8}>
                    <h2 className="title">Vaidik Technologies</h2>
                    <br/>
                    <h5 className="description">
                    At Vaidik, we develop innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design and development, cross platform applications, ERPs, CRMs, e-commerce solutions, business-to-business applications, business-to-client applications, managed hosting and internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work.

                    As a emerging leader in technology exploring, vaidik is committed to exporting quality software worldwide.
		    		</h5>
                </Col>
                
            </Row>
      </Container>
      </div>
  );
};

export default AboutUsSection;