import React from 'react';
import logo from '../assets/Logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { IconUser } from '@tabler/icons-react';
import { useAuth } from '../utils/useAuth';

const Header: React.FC = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.clear();
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div>
        <NavLink to="/">
          <img src={logo} alt="MemoCare Logo" />
        </NavLink>
      </div>
      {user ? (
        <div className="row">
          <button type="button" onClick={logoutUser} className="user-btn">
            Logout
          </button>
          <button className="user-btn">
            <IconUser size={26} strokeWidth={2.5} color="#fff" />
          </button>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
