import React from 'react';
import LoginBox from "../components/LoginBox/LoginBox";

/**
 * A view that displays the login box
 * @param {*} model 
 * @returns a page to log in
 */
function LoginPage(model){

    return <div>
        <div><LoginBox {...model}></LoginBox></div>
        </div>
    
}
export default LoginPage;