import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage(props) {
  const navigate = useNavigate();
  const [isLoggedIn, setLogInStatus] = useState(props.viewModel.isLoggedIn)
  console.log(isLoggedIn)
  function login(){
    console.log("knapp login")
    navigate('/login');
  }
  function logout(){
    setLogInStatus(false)
    props.viewModel.isLoggedIn = false;
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
      <div>{isLoggedIn ? (<button onClick={logout}>Logout!</button>) : (
      <button onClick={login} >Login!</button>)}</div>
    </div>
  );
}

export default MainPage;
