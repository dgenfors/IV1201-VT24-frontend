import { useEffect, useState } from 'react';
import CalenderBox from '../CalendarBox/CalendarBox';
import { useNavigate } from 'react-router-dom';
import ApplicationDTO from '../../util/applicationDTO';

function ApplicationBox(props){
const [years, setYears] = useState([{xp: "", year: ""}]);
const [option, setOption] = useState("");
const [additionalFields, setAdditionalFields] = useState([0]);
const[calender, setCalender] = useState([{startDate: new Date(), endDate: new Date()}])
const [errorMessage, setErrorMessage] = useState("");
const [message, setMessage] = useState(false);
const navigate = useNavigate();

function changeExpertise(value, index){
    const updatedYears = [...years];
    updatedYears[index].xp = value.target.value;
    setYears(updatedYears);
    console.log(years)
}

function changeYears(value, index){
    const updatedYears = [...years];
    updatedYears[index].year = value.target.value;
    setYears(updatedYears);
    console.log(years)
}
function addNewField() {
    console.log(years.length-1)
    if(years[years.length-1].xp!=="" && years[years.length-1].year!==""){
        setAdditionalFields([...additionalFields, { id: Date.now() }]);
        setYears([...years, {xp: "", year: ""}]);
    }
}

async function submit(){
    
    if(years[years.length-1].xp == "" && years[years.length-1].year !=="")
        setErrorMessage("*Please specify area of expertise.")
    else if(years[years.length-1].xp !== "" && years[years.length-1].year =="")
        setErrorMessage("*Please specify years of experience.")
    else{
        console.log(years)
        console.log(calender)
        const appDTO =  new ApplicationDTO(years, calender);
        const dbMsg = await props.viewModel.submitApplication(appDTO)
        console.log(dbMsg)
        if (dbMsg){
            setMessage(true)
        }
    }
}

function cancel(){
    navigate('/')
}
function passCalData(dates){
    setCalender(dates)
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
                            name = 'yearsOfExp'
                            type="number"
                            placeholder="Years of Experience"
                            id={'experience${index}'}
                            min="0.0"
                            onChange={(e) => changeYears(e, index)}>
                        </input>
                    </div>
                ))}
                <div></div>
                <button onClick={addNewField}>Add New Field</button>
                <div style={{ color: 'red' }}> {errorMessage} </div>
        </div>
    
        <div>
            <div>When are you available?</div>
            <CalenderBox passData={passCalData}></CalenderBox>
    
        <button onClick={cancel}>Cancel</button>
        <button onClick={submit}>Submit application!</button> 
        <div></div>
        </div>
    </div>
    }
        
    </div>
    )
}
export default ApplicationBox;