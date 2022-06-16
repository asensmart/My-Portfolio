import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Asen Ali </span>
            from <span className="purple"> Chennai, India.</span>
            <br />I have graduate in B. Sc Computer Science and currently pursuing MCA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Coding is my Drug! React is my supplier"{" "}
          </p>
          <footer className="blockquote-footer">Asen Ali</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
