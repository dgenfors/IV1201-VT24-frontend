import { useEffect, useState } from 'react';

function LoginBox(props){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleClick = () => {
      console.log(props)
      props.model.viewModel.login(username, password); 
    };

    return (<div>
        <div>Username:</div>
        <input
          type="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <div>Password:</div>
        <input
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div><button onClick={handleClick}>Login</button></div>
    </div>)
    
    }
    export default LoginBox;