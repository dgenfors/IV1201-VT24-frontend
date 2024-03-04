import { useEffect, useState } from 'react';
import CalenderBox from '../CalendarBox/CalendarBox';
import { useNavigate } from 'react-router-dom';
import ApplicationDTO from '../../util/applicationDTO';

/**
 * Represents a component for applying for a job.
 * @param {object} props - The props object containing the component's properties.
 * @returns {JSX.Element} JSX representation of the application box component.
 */
function ApplicationBox(props){
    // State hooks to manage component state
    const [competence, setCompetence] = useState([{exp: "", year: ""}]);
    const [additionalFields, setAdditionalFields] = useState([0]);
    const [timePeriod, setTimePeriod] = useState([{startDate: new Date(), endDate: new Date()}]);
    const [message, setMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [dbErrorMessage, setDbErrorMessage] = useState("");
    const navigate = useNavigate();
    /**
     * Handles the change in expertise input.
     * @param {Event} value - The event object containing the expertise input value.
     * @param {number} index - The index of the competence field being changed.
     */
    function changeExpertise(value, index){
        const updatedCompetence = [...competence];
        updatedCompetence[index].exp = value.target.value;
        setCompetence(updatedCompetence);
        console.log(competence)
    }

    /**
     * Handles the change in years input.
     * @param {Event} value - The event object containing the year input value.
     * @param {number} index - The index of the competence field being changed.
     */
    function changeYears(value, index){
        const updatedCompetence = [...competence];
        updatedCompetence[index].year = value.target.value;
        setCompetence(updatedCompetence);
        console.log(competence)
    }

    /**
     * Adds a new field for competence.
     */
    function addNewField() {
        console.log(competence.length-1)
        if(competence[competence.length-1].exp!=="" && competence[competence.length-1].year!==""){
            setAdditionalFields([...additionalFields, { id: Date.now() }]);
            setCompetence([...competence, {exp: "", year: ""}]);
        }
    }

    /**
     * Submits the application.
     */
    async function submit(){
        if(!competence[competence.length-1].exp && competence[competence.length-1].year)
            setErrorMessage("*Please specify area of expertise.")
        else if(competence[competence.length-1].exp && !competence[competence.length-1].year)
            setErrorMessage("*Please specify years of experience.")
        else{
            if(!competence[competence.length-1].exp && !competence[competence.length-1].year){
                competence[competence.length-1].exp = 'none';
                competence[competence.length-1].year = 0;
            }
            const applicationDTO =  new ApplicationDTO(competence, timePeriod);
            const dbMsg = await props.viewModel.submitApplication(applicationDTO)
            if(dbMsg.error){
                setDbErrorMessage(dbMsg.error)
            }else{
                setMessage(true)
               
            }
            
        }
    }

    /**
     * Cancels the application.
     */
    function cancel(){
        navigate('/')
    }

    /**
     * Passes the selected time period.
     * @param {object} dates - The selected time period.
     */
    function passTimePeriod(dates){
        setTimePeriod(dates)
    }

    return (
    <div>
        {message ?
        <div style= {{color: 'green'}}>KLART</div> 
        :
        <div>
        <div>Apply for job here!</div>
        <div>
            {additionalFields.map((field, index) => (
                    <div key={index+1}>
                        <select name={`expertise`} id={`areas-select${index}`} onChange={(e) => changeExpertise(e, index)}>
                            <option value="">Please choose an area of expertise!</option>
                            <option value="ticket sales">Ticket sales</option>
                            <option value="lotteries">Lotteries</option>
                            <option value="roller coaster operation">Roller Coaster Operations</option>
                        </select>
                        <input
                            name ='yearsOfExp'
                            type="number"
                            placeholder="Years of Experience"
                            id={`experience${index}`}
                            min="0.0"
                            onChange={(e) => changeYears(e, index)}>
                        </input>
                    </div>
                ))}
                <></>
                <button onClick={addNewField}>Add New Field</button>
                <div style={{ color: 'red' }}> {errorMessage} </div>
        </div>
    
        <div>
            <div>When are you available?</div>
            <CalenderBox passData={passTimePeriod}></CalenderBox>
        <button onClick={cancel}>Cancel</button>
        <button onClick={submit}>Submit application!</button> 
        <></>
        </div>
    </div>
    }
    <div style={{ color: 'red' }}>{dbErrorMessage}</div>
    </div>
    )
}
export default ApplicationBox;
