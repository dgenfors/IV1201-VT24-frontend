import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
/**
 * Represents a login box component.
 * @param {object} props - The props object containing viewModel.
 * @param {object} props.viewModel - The view model object with a login method.
 * @returns {JSX.Element} A JSX element representing the login box.
 */
function LoginBox(props){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    /**
   * Handles the click event when the login button is clicked.
   * @async
   * @returns {Promise<void>}
   */
async function handleClick() {
    setLoading(true); // Set loading state to true to indicate that login process is in progress.
    setErrorMessage(""); // Clear any previous error message.
    try {
        // Attempt to log in using the provided username and password.
        const logInState = await props.viewModel.login(username, password);

        // If login is unsuccessful, display an error message.
        if (logInState.error) {
            setErrorMessage(logInState.error);
        } else if(logInState) {
            // If login is successful, update the isLoggedIn state in the view model and navigate to the home page.
            props.viewModel.isLoggedIn = true;
            navigate('/');
        }else{
          setErrorMessage("Invalid username or password")
        }
    } catch (error) {
        // If an error occurs during the login process, log the error and display a generic error message.
        console.error("Error:", error);
        setErrorMessage("An error occurred while logging in");
    } finally {
      setLoading(false); // Regardless of success or failure, set loading state back to false.
  }
}
    /**
    * Navigates to the registration page.
    * @returns {void}
    */
    function register(){
      navigate('/register');
    }

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
        <div><button onClick={register}>Sign Up</button></div>
        {loading && <div>Loading...</div>}
        <div style={{ color: 'red' }}>{errorMessage}</div>
    </div>)
    
    }
    export default LoginBox;