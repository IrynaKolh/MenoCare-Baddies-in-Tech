import React from "react";
import couple from "../assets/couple.png";
import women from "../assets/3women.png";
import people from "../assets/2people.png";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="home-page">
        <h1 className="title">Welcome to MenoCare!</h1>
        <p className="about">
          Here to give you the support and help you need navigating your
          menopause journey. We’ve got your back!
        </p>
        <div className="home-images">
          <img src={couple} alt="couple" />
          <img src={women} alt="women" />
          <img src={people} alt="people" />
        </div>
      </div>
      <Link to={"/about"}>
        <div className="get-started-btn">
          <h4>Get Started</h4>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
