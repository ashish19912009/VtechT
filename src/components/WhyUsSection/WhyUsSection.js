import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import LogoBig from '../Logo/LogoBig/LogoBig';

const WhyUsSection = (props) => {
  return (
      <div className="section section-nucleo-icons" style={{backgroundColor:'#F9F9F9'}}>
          <Container>
            <Row>
                <Col xs={12} sm={8}>
                    <h2 className="title">Why Us ?</h2>
                    <h5 className="description">
                    Our customers choose us because we provide leading technology, deliver unmatched services, and offer some of the best services in Uttrakhand IT space. Regardless of the project size and complexity, we strive to provide our customers with great technology, differentiated products and unmatched engineering services delivered within a flexible and cost-effective business model that meets our customer’s needs.
		    		</h5>
              <Link to='/ContactUs' className="btn btn-primary btn-round btn-lg">Contact Us</Link>
              <Link to='/AboutUs' className="btn btn-outline-primary btn-round btn-lg ml-2">Know More</Link>
                </Col>
                <Col xs={12} sm={4}>
                  <LogoBig/>
                </Col>
            </Row>
      </Container>
      </div>
  );
};

export default WhyUsSection;