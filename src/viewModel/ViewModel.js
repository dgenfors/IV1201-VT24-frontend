import { useEffect, useState } from 'react';

class ViewModel{
  constructor(){

  }

  createAccount(){
    
  }
  async login(username, password){
    //Call data base to search for username password combo
    //Return results (True or False), Index file navigate(Homepage) if true
    //Later also set user cookie to remember who and if logged in
      try {
        const response = await fetch('http://localhost:3001/allApplications', {
          mode: 'cors',
          headers: {
            'Authorization':'Basic ' + btoa(username + ':' + password)
          }
        });
        const data = await response.json();
        //'setApiMessage(data);
      } catch (e) {
        console.log(e);
      }
    };
    
  listOfJobs(){

  }
  submitApplication(){

  }
  applicationStatus(){
   
  }
  listOfApplications(){

  }
  processApplication(){

  }
  fetchUserData(){

  }
  fetchApplicationData(){
    
  }
  
}
export default ViewModel 
/*const [apiMessage, setApiMessage] = useState([]);
const makeAPICall = async () => {
  try {
    cost response = await fetch('http://localhost:3001/allApplications', {mode: 'cors'});
    const data = await response.json();
    //'setApiMessage(data);
  } catch (e) {
    console.log(e);
  }
};
function listAppli(data,index){
  return <div key={index}>{data.name}</div>
}
function login(user, pass, index){
  return 
}

useEffect(() => {
  makeAPICall();
}, []) };
return (
  <div className="App">
    <h1>Server says: {apiMessage.map((data, index) => listAppli(data, index))}</h1>
  </div>
);
};*/