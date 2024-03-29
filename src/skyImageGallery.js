import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './skyImageGallery.css'


const SkyImageGallery = (props) => {
  return (
    <Row  bsPrefix= "SIM-container"className="SIM-container">
      <Col xl={{span:7}} lg={{span:7}} sm={{span:7}}xs={{span:7}} className="SIM-blue">
        <Row>
          <Col  xl={{span:12, offset:2}} lg={{span:12, offset:2}} className="SIM-Title">
            <p>{props.country}</p>
          </Col>
        </Row>
        <Row className="SIM-artist-row1">
          <Col xl={{span:12,  offset:2}} lg={{span:12, offset:2}}>
            <p className="SIM-artist" style={{marginTop:"auto"}}>{props.artist1}</p>
          </Col>
        </Row>
        <Row>
          <Col  xl={{span:12, offset:2}} lg={{span:12, offset:2}}>
            <p className="SIM-artist">{props.artist2}</p>
          </Col>
        </Row>
      </Col>
      <Col xl={{span:2}} lg={{span:2}} sm={{span:2}}xs={{span:2}}>
        <a href={props.link1}><img src={props.image1} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a>
      </Col>
      <Col xl={{span:2}} lg={{span:2}} sm={{span:2}}xs={{span:2}}>
        <a href={props.link2}><img src={props.image2} alt="placeholder" style={{width:"100%", height:"auto"}}></img></a>
      </Col>
      <Col xl={{span:1}} lg={{span:1}} sm={{span:1}}xs={{span:1}} className="SIM-red">
      </Col>
    </Row>
  );
}

export default SkyImageGallery;
