import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/TopBar/Topbar';

/**
 * Represents the main page component.
 * @param {object} props - The props object.
 * @param {object} props.viewModel - The view model object containing the isLoggedIn property.
 * @returns {JSX.Element} A JSX element representing the main page.
 */
function MainPage(props) {
  const navigate = useNavigate();
  /**
   * State hook for user login status.
   * @type {[boolean, function]}
   */
  const [isLoggedIn, setLogInStatus] = useState(props.viewModel.isLoggedIn);
  const [roleID, setRoleID] = useState(props.viewModel.roleID)

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
  }

  /**
   * Navigates to the application page.
   * @returns {void}
   */
  async function navAppli() {
    navigate('/application');
  }
  async function navRecruiter() {
    navigate('/recruiterView');
  }

  return (
    <div className="App">
      <Header>
        Welcome to Chipi Chapa - Land
      </Header>
      Chipi chipi chapa chapa
      Dubi dubi daba daba
      Mágico mi dubi dubi
      Bum, bum, bum, bum
      Chipi chipi chapa chapa
      Dubi dubi daba daba
      Mágico mi dubi dubi
      Bum 
      <div>
        {isLoggedIn ? (
          <button onClick={logout}>Logout!</button>
        ) : (
          <button onClick={login}>Login!</button>
        )}
      </div>
      <div>
        {roleID === 2 && <button onClick={navAppli}>Apply here!</button>}
        {roleID === 1 && <button onClick={navRecruiter}>RecruiterView</button>}
        {roleID === null && <div></div>}
      </div>
    </div>
  );
}

export default MainPage;
