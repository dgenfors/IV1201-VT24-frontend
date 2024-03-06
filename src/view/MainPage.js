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
  const [isLoggedIn, setLogInStatus] = useState(props.viewModel.isLoggedIn);
  
  function logoutUser(){
    setRoleID(null)
    props.viewModel.setRoleID(null)
    setLogInStatus(false)
    props.viewModel.isLoggedIn = false
  }
  useEffect(() => {
    getRole()
  },[]);

  async function getRole(){
    console.log("hej")
    const id = await props.viewModel.checkRoleID()
    if(id.error){
      setRoleID(null)
      props.viewModel.setRoleID(null)
      setLogInStatus(false)
      props.viewModel.isLoggedIn = false
    } 
    else{
      setRoleID(id)
      props.viewModel.setRoleID(id)
      setLogInStatus(true)
      props.viewModel.isLoggedIn = true
    }
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
      <Header {...props} logoutUser={logoutUser} roleID = {roleID} logInStatus ={isLoggedIn}/>
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
