import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Keyul Jain </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently employed as a software developer at Billdesk.
            <br />
            I have completed B.E in Computers at Thadomal Shahani Engineering College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Time heals everything but Time needs Time!"{" "}
          </p>
          <footer className="blockquote-footer">Keyul Jain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
