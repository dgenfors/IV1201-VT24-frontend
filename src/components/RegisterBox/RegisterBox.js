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

    /**
     * Registers a new user account.
     * Creates a new UserDTO object with the provided user information and calls the createAccount method of the view model.
     * @returns {void}
     */
    async function register() {
        const userDTO = new UserDTO(firstName, lastName, email, pnumbr, userName, password);
        props.viewModel.createAccount(userDTO);
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
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='First name'>
                </input>
            </div>
            <div>
                <input
                    type="LastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Last name'>
                </input>
            </div>
            <div>
                <input
                    type="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'>
                </input>
            </div>
            <div>
                <input
                    type="pnumbr"
                    value={pnumbr}
                    onChange={(e) => setPnumbr(e.target.value)}
                    placeholder='Personal number'>
                </input>
            </div>
            <div>
                <input
                    type="username"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='User name'>
                </input>
            </div>
            <div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'>
                </input>
            </div>
            <div>
                <button onClick={register}>Register</button>
            </div>
        </div>
    );
}

export default RegisterBox;
