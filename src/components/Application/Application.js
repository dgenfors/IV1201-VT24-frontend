import { useEffect, useState } from 'react';

function Application (application){
    const [lastName, setLastName] = useState(application.surname)
    const [firstName, setFirstName] = useState(application.name)   
    const [status, setStatus] = useState(application.application_status)

    return <div style={{display: 'flex', justifyContent:'space-evenly', margin:'3px', borderWidth:'1px', borderStyle: 'solid'}}>
        <span>{lastName}</span>
        <span>{firstName}</span>
        <span>{status}</span>
        </div>
}
export default Application