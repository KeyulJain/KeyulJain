import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiOracle,
  SiSolidity,
  SiPostgresql,
  SiSpringboot,
  SiAerospike,
  SiConsul,
  SiApachekafka,
  SiDocker,
  SiApachemaven ,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAerospike />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>   
      <Col xs={4} md={2} className="tech-icons">
        <TbApi />
      </Col>   
      <Col xs={4} md={2} className="tech-icons">
        <SiConsul />
      </Col>   
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col>   
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
      </Col> 
    </Row>
  );
}

export default Techstack;
