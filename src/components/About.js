import React from "react";
import Commons from "./Commons";
import web2 from "../images/w2.png";

function About() {
  return (
    <div>
      <Commons
        name="Welcome to KbnCodes"
        imgsrc={web2}
        visit="/contact"
        btname="Contact Now"
      ></Commons>
    </div>
  );
}

export default About;
