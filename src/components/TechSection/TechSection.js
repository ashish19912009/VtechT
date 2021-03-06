import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import googleCloud from '../../assets/img/Google-cloud.png';
import css3 from '../../assets/img/css-3.png';
import scss from '../../assets/img/scss.png';
import ajax from '../../assets/img/ajax.png';
import react from '../../assets/img/react.png';
import nodejs from '../../assets/img/nodejs.png';
import monogo from '../../assets/img/mongoDB.png';
import JScript from '../../assets/img/javaScript.png';
import redux from '../../assets/img/redux.png';
import php from '../../assets/img/php.png';
import gitHub from '../../assets/img/github.png';
import html5 from '../../assets/img/html.png';
import Bootstrap from '../../assets/img/bootstrap-logo.png';
import Python from '../../assets/img/python.png';
import AI from '../../assets/img/AI.png';

const TechSection = (props) => {
  return (
      <div className="section section-nucleo-icons">
          <Container>
            <Row>
                <Col xs={12}>
                    <h2 className="title text-center">What we use ?</h2>
                        <div className="icons-container" style={{minWidth:'100%'}}>
							<i className="now-ui-icons"><img alt='' src={googleCloud}/></i>
							<i className="now-ui-icons "><img alt='' src={html5}/></i>
							<i className="now-ui-icons "><img alt='' src={css3}/></i>
							<i className="now-ui-icons "><img alt='' src={php}/></i>
							<i className="now-ui-icons "><img alt='' src={react}/></i>
                            <i className="now-ui-icons "><img alt='' src={JScript}/></i>
							<i className="now-ui-icons "><img alt='' src={redux}/></i>
							<i className="now-ui-icons "><img alt='' src={nodejs}/></i>
							<i className="now-ui-icons "><img alt='' src={scss}/></i>
                            <i className="now-ui-icons "><img alt='' src={gitHub}/></i>
							<i className="now-ui-icons "><img alt='' src={monogo}/></i>
							<i className="now-ui-icons "><img alt='' src={ajax}/></i>
                            <i className="now-ui-icons "><img alt='' src={gitHub}/></i>
							<i className="now-ui-icons "><img alt='' src={Bootstrap}/></i>
							<i className="now-ui-icons "><img alt='' src={Python}/></i>
                            <i className="now-ui-icons "><img alt='' src={AI}/></i>
						</div>
                        <br/><br/><br/>
                </Col>
            </Row>
      </Container>
      </div>
  );
};

export default TechSection;