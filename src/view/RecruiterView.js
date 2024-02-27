import { useState } from "react"
import Application from "../components/Application/Application"

function RecruiterView(props){
    const[applications, setApplications] = useState([])
    
    
    async function getApplications(){
        try{
           const data = await props.viewModel.listOfApplications()
           setApplications(data)
        }catch{
            console.log("Something went wrong")
        }
    }
    async function changeStatus(){
        
    }

    function mapApplications(application, index){
        return <Application key={index} {...application} />;
    }
    return <div>
        <div style={{display: 'flex', justifyContent:'space-evenly', margin:'3px', borderWidth:'1px', borderStyle: 'solid'}}>
        <span>lastName</span>
        <span>firstName</span>
        <span>status</span>
        </div>
        {applications.map(mapApplications)}
            <button onClick={getApplications}>Load all applications</button>
            </div>
}
export default RecruiterView;
//<Application application={application}></Application>