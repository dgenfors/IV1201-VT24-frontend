import React from 'react';
import './TopBar.css'; // Import the CSS file for styling
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  const [isLoggedIn, setLogInStatus] = useState(props.viewModel.isLoggedIn);

  
   /**
   * Navigates to the login page.
   * @returns {void}
   */
   function login() {
    navigate('/login');
  }

  /**
   * Logs out the user.
   * @returns {void}
   */
  function logout() {
    setLogInStatus(false);
    props.viewModel.isLoggedIn = false;
    props.changeRoleID(null)
  }

  useEffect(() => {
    setLogInStatus(props.viewModel.isLoggedIn)
  },[isLoggedIn, props.roleID]);
  return (
    <div className="amusement-park-header">
    <div className="header-content">
      <h1>Welcome to Chipi Chapa-Land</h1>
    </div>
    <div className="button-container">
      {isLoggedIn ? (
        <button onClick={logout}>Logout!</button>
      ) : (
        <button onClick={login}>Sign In!</button>
      )}
    </div>
  </div>

  );
}

export default Header;