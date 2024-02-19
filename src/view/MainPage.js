import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Represents the main page component.
 * @param {object} props - The props object containing viewModel.
 * @param {object} props.viewModel - The view model object with isLoggedIn property.
 * @returns {JSX.Element} A JSX element representing the main page.
 */
function MainPage(props) {
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
  }
  async function navAppli() {
    navigate('/application');
  }

  return (
    <div className="App">
      <h1>
        Welcome to Chipi Chapa - Land
      </h1>
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
      <div><button onClick={navAppli}>Apply here!</button></div>
    </div>
  );
}

export default MainPage;
