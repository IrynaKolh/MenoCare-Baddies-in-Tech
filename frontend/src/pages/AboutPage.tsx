import React from 'react';
import SimpleSlider from '../components/SimpleSlider';
import './AboutPage.css';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAuth } from '../utils/useAuth';

const AboutPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="about-page">
      <div className="slider-container">
        <SimpleSlider></SimpleSlider>
      </div>

      {user ? (
        <></>
      ) : (
        <div className="center main-text">
          <button className="join-btn">
            <Link to={'/registration'} className="main-text">
              Join Menocare
            </Link>
          </button>
          <div className="row">
            <p>Already have an account?</p>
            <Link to={'/login'} className="main-text">
              Log in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
