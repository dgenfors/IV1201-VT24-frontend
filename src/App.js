import { useEffect, useState } from 'react';

function MainPage() {
  const [apiMessage, setApiMessage] = useState([]);
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:3001/allApplications', {mode: 'cors'});
      const data = await response.json();
      setApiMessage(data);
    } catch (e) {
      console.log(e);
    }
  };
  function listAppli(data,index){
    return <div key={index}>{data.name}</div>
  }

  useEffect(() => {
    makeAPICall();
  }, []);
  return (
    <div className="App">
      <h1>Server says: {apiMessage.map((data, index) => listAppli(data, index))}</h1>
    </div>
  );
}

export default MainPage;
