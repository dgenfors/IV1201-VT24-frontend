import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage(props) {
  const navigate = useNavigate();
  function button(){
    console.log("knapp login")
    navigate('/login');
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
      <button onClick = {button}>Login!</button>
    </div>
  );
}

export default MainPage;
