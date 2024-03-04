import { useEffect, useState } from 'react';
import './Application.css'

function Application (application){
    const [lastName, setLastName] = useState(application.surname)
    const [firstName, setFirstName] = useState(application.name)
    const [status, setStatus] = useState(application.application_status)

    return <div className='container'>
        <span className='span' style={{backgroundColor: '#b7e4c7'}}>{lastName}</span>
        <span className='span' style={{backgroundColor: '#edc531'}}>{firstName}</span>
        <span className='span' style={{backgroundColor: '#f4845f'}}>{status}</span>
        </div>
}
export default Application