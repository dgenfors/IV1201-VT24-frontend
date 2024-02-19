import { useEffect, useState } from 'react';
import CalenderBox from '../CalendarBox/CalendarBox';
import { useNavigate } from 'react-router-dom';

function ApplicationBox(props){
const [years, setYears] = useState([{xp: null, year: null}]);
const [option, setOption] = useState("");
const [additionalFields, setAdditionalFields] = useState([0]);
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
    if(years[years.length-1].xp!==null && years[years.length-1].year!==null){
        setAdditionalFields([...additionalFields, { id: Date.now() }]);
        setYears([...years, {xp: null, year: null}]);
    }
}

function submit(){
    
}

function cancel(){
    navigate('/')
}

    return <div>
        <div>Apply for job here!</div>
        <div>
            {additionalFields.map((field, index) => (
                    <div key={index+1}>
                        <select name={`expertise`} id={`areas-select${index}`} onChange={(e) => changeExpertise(e, index)}>
                            <option value="">Please choose an area of expertise!</option>
                            <option value="Service">Service</option>
                            <option value="Entertainer">Entertainer</option>
                            <option value="Medical">Medical</option>
                            <option value="Engineer">Engineer</option>
                            <option value="Cooking">Cooking</option>
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
        </div>
        <div>
            <div>When are you available?</div>
            <CalenderBox></CalenderBox>
        </div>
        <div>
        <button onClick={cancel}>Cancel</button>
        <button onClick={submit}>Submit application!</button> 
        </div>
    </div>
}
export default ApplicationBox