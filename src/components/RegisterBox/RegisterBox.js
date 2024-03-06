import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDTO from '../../util/userDTO';

/**
 * Represents a registration box component.
 * @param {object} props - The props object containing viewModel.
 * @param {object} props.viewModel - The view model object with a createAccount method.
 * @returns {JSX.Element} A JSX element representing the registration box.
 */
function RegisterBox(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pnumbr, setPnumbr] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [usernameState, setUsernameState] = useState(true);
    const [pnumbrState, setPnumbrState] = useState(true);
    const [emailState, setEmailState] = useState(true);
    
    const [usernameEmpty, setUsernameEmpty] = useState(true);
    const [firstNameEmpty, setFirstNameEmpty] = useState(true);
    const [lastNameEmpty, setLastNameEmpty] = useState(true);
    const [passwordEmpty, setPasswordEmpty] = useState(true);
    const [emailEmpty, setEmailEmpty] = useState(true);
    const [pnumbrEmpty, setPnumbrEmpty] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();

    function checkValidInput(){
        let valid = true;
        if (username === ""){
            setUsernameEmpty(false)
            valid = false;
        }
        if (password === ""){
            setPasswordEmpty(false)
            valid = false;
        }
        if (email === ""){
            setEmailEmpty(false)
            valid = false;
        }
        if (pnumbr === ""){
            setPnumbrEmpty(false)
            valid = false;
        }
        if (firstName === ""){
            setFirstNameEmpty(false)
            valid = false
        }
        if (lastName === ""){
            setLastNameEmpty(false)
            valid = false
        }
        return valid;
    }
    /**
     * Registers a new user account.
     * Creates a new UserDTO object with the provided user information and calls the createAccount method of the view model.
     * @returns {void}
     */
    async function register() {
        const valid = checkValidInput(); 
        if (!valid)
            return null
        const userDTO = new UserDTO(firstName, lastName, email, pnumbr, username, password);
        const data = await props.viewModel.createAccount(userDTO);
        if(data.error){
            setErrorMessage(data.error)
            return
        } else if(data.logInState){
            props.viewModel.isLoggedIn = data.logInState;
            navigate("/")
        }
        console.log("data register" +JSON.stringify(data))
        setEmailState(!data.email_exists)
        setUsernameState(!data.username_exists)
        setPnumbrState(!data.personal_number_exists)
        console.log("states " + "email: " +  emailState + " username: " + usernameState + " pnr: " + pnumbrState)
    }

    /**
     * Renders the registration form.
     * @returns {JSX.Element} The JSX element representing the registration form.
     */
    return (
        <div>
        <div>
            <input
                type="FirstName"
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value)
                    setFirstNameEmpty(true)
                }}
                placeholder='First name'
            />
            {!firstNameEmpty && <span className="error-message" style={{ color: 'red' }}>*Please provide a name</span>}
        </div>
        <div>
            <input
                type="LastName"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value)
                    setLastNameEmpty(true)
                }}
                placeholder='Last name'
            />
            {!lastNameEmpty && <span className="error-message" style={{ color: 'red' }}>*Please provide a last name</span>}
        </div>
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) =>{
                    setEmail(e.target.value)
                    setEmailState(true)
                    setEmailEmpty(true)
                    }
                }
                placeholder='Email'
            />
            {!emailState && <span className="error-message" style={{ color: 'red' }}>*This email is already in use</span>}
            {!emailEmpty && <span className="error-message" style={{ color: 'red' }}>*Please provide a email</span>}
        </div>
        <div>
            <input
                type="pnumbr"
                value={pnumbr}
                onChange={(e) => {
                    setPnumbr(e.target.value)
                    setPnumbrState(true)
                    setPnumbrEmpty(true)
                    }
                }
                placeholder='Personal number'
            />
            {!pnumbrState && <span className="error-message" style={{ color: 'red' }}>*This personal number is already in use</span>}
            {!pnumbrEmpty && <span className="error-message" style={{ color: 'red' }}>*Please provide a personal number</span>}
        </div>
        <div>
            <input
                type="username"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                    setUsernameState(true)
                    setUsernameEmpty(true)
                    }
                }  
                placeholder='User name'
            />
            {!usernameState && <span className="error-message" style={{ color: 'red' }}>*This username is already in use</span>}
            {!usernameEmpty && <span className="error-message" style={{ color: 'red' }}>*Please provide a username</span>}
        </div>
        <div>
            <input
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    setPasswordEmpty(true)
                }}
                placeholder='Password'
            />
            {!passwordEmpty && <span className="error-message" style={{ color: 'red' }}>*Please provide a password</span>}
        </div>
        <div>
            <button onClick={register}>Register</button>
        </div>
        <div style = {{ color : 'red' }}>{errorMessage}</div>
    </div>  
    );
}

export default RegisterBox;
