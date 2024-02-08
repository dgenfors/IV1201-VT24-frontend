import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginBox(props){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = async () => {
      setLoading(true);
      setErrorMessage("");
      try {
        const logInState = await props.viewModel.login(username, password);
        if (!logInState) {
            setErrorMessage("Invalid username or password");
        }else{
          props.viewModel.isLoggedIn = true;
          navigate('/');
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("An error occurred while logging in");
      } finally {
        setLoading(false);
      }
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
        {loading && <div>Loading...</div>}
        <div>{errorMessage}</div>
    </div>)
    
    }
    export default LoginBox;