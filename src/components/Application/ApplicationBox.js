import { useEffect, useState } from 'react';

function ApplicationBox(props){
const [years, setYears] = useState([{xp: null, year: null}]);
const [option, setOption] = useState("");
const [additionalFields, setAdditionalFields] = useState([0]);

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

    return <div>
        <div>Apply for job here!</div>
        <div></div>{/*Lägga in first name & last name som fylls i automatiskt :O*/}
        
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
            Availability
            
        </div>
    </div>
}
export default ApplicationBox