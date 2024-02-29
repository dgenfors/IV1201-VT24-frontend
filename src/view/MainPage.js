import React, { useState, useEffect } from 'react';
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
   * State hook for user role ID.
   * @type {[boolean, function]}
   */
  const [roleID, setRoleID] = useState(props.viewModel.roleID)

  function changeRoleID(id){
    setRoleID(id)
    props.viewModel.setRoleID(id)
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
      <Header {...props} changeRoleID={changeRoleID}/>
      Chipi chipi chapa chapa
      Dubi dubi daba daba
      Mágico mi dubi dubi
      Bum, bum, bum, bum
      Chipi chipi chapa chapa
      Dubi dubi daba daba
      Mágico mi dubi dubi
      Bum 
      <div>
        {roleID === 2 && <button onClick={navAppli}>Apply here!</button>}
        {roleID === 1 && <button onClick={navRecruiter}>RecruiterView</button>}
        {roleID === null && <div></div>}
      </div>
    </div>
  );
}

export default MainPage;
