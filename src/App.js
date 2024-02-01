import { useEffect, useState } from 'react';

function App() {
  const [apiMessage, setApiMessage] = useState('');
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:3001', {mode: 'cors'});
      const data = await response.text();
      setApiMessage(data);
      console.log({data});
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    makeAPICall();
  }, []);
  return (
    <div className="App">
      <h1>Server says: {apiMessage}</h1>
    </div>
  );
}

export default App;
