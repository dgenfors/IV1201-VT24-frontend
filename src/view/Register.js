import React from 'react';
import RegisterBox from "../components/RegisterBox/RegisterBox";

/**
 * View used to design the register page
 * @param {*} model 
 * @returns a page to register on
 */
function Register(model){

    return <div>
        <div><RegisterBox {...model}></RegisterBox></div>
        </div>
    
}
export default Register;