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
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userNameState, setUsernameState] = useState(true);
    const [pnumbrState, setPnumbrState] = useState(true);
    const [emailState, setEmailState] = useState(true);
    const navigate = useNavigate();
    /**
     * Registers a new user account.
     * Creates a new UserDTO object with the provided user information and calls the createAccount method of the view model.
     * @returns {void}
     */
    async function register() {
        const userDTO = new UserDTO(firstName, lastName, email, pnumbr, userName, password);
        const data = await props.viewModel.createAccount(userDTO);
        
        if(data.logInState){
            console.log("hejsan")
            props.viewModel.isLoggedIn = data.logInState;
            navigate("/")
        }
        console.log("data register" +JSON.stringify(data))
        setEmailState(!data.email_exists)
        setUsernameState(!data.username_exists)
        setPnumbrState(!data.personal_number_exists)
        console.log("states " + "email: " +  emailState + " username: " + userNameState + " pnr: " + pnumbrState)
    }

    /**
     * Renders the registration form.
     * @returns {JSX.Element} The JSX element representing the registration form.
     */
    return (
        <div className="container">
        <div className="input-container">
            <input
                type="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='First name'
            />
        </div>
        <div className="input-container">
            <input
                type="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Last name'
            />
        </div>
        <div className="input-container">
            <input
                type="email"
                value={email}
                onChange={(e) =>{
                    setEmail(e.target.value)
                    setEmailState(true)
                    }
                }
                placeholder='Email'
            />
            {!emailState && <span className="error-message">*This email is already in use</span>}
        </div>
        <div className="input-container">
            <input
                type="pnumbr"
                value={pnumbr}
                onChange={(e) => {
                    setPnumbr(e.target.value)
                    setPnumbrState(true)
                    }
                }
                placeholder='Personal number'
            />
            {!pnumbrState && <span className="error-message">*This personal number is already in use</span>}
        </div>
        <div className="input-container">
            <input
                type="username"
                value={userName}
                onChange={(e) => {
                    setUsername(e.target.value)
                    setUsernameState(true)
                    }
                }  
                placeholder='User name'
            />
            {!userNameState && <span className="error-message">*This username is already in use</span>}
        </div>
        <div className="input-container">
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
        </div>
        <div className="button-container">
            <button onClick={register}>Register</button>
        </div>
    </div>  
    );
}

export default RegisterBox;
