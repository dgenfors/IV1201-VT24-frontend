import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CalenderBox(props){
const [date, setDate] = useState([{startDate: new Date(), endDate: new Date()}]);
const [allCals, setAllCals] = useState([new Date()]);


function changeEndDate(value, index){
    const updatedDate = [...date];
    updatedDate[index].endDate = value;
    setDate(updatedDate);
    props.passData(date)
}

function changeStartDate(value, index){
    const updatedDate = [...date];
    updatedDate[index].startDate = value;
    if(value > updatedDate[index].endDate)
        updatedDate[index].endDate = updatedDate[index].startDate
    setDate(updatedDate);
    props.passData(date)
}

function addCalrow(){
    setAllCals([...allCals, { id: Date.now() }]);
    setDate([...date, {startDate: new Date(), endDate: new Date()}])
}

return(
    <div>
        {allCals.map((field, index) => (
            <div key={index+1}>
                From: <DatePicker 
                    minDate={new Date()} // Restricts selection before today
                    selected={date[index].startDate} 
                    label="From:" 
                    dateFormat={'YYYY-MM-dd'}
                    onChange={(date) => changeStartDate(date, index)} />
                          
                To: <DatePicker 
                    selected={date[index].endDate} 
                    minDate={date[index].startDate} // Restricts selection before today
                    label="To:" 
                    dateFormat={'YYYY-MM-dd'}
                    onChange={(date) => changeEndDate(date, index)} />
            </div>
        ))}
    <button onClick={addCalrow}>Add new availability</button>
    </div>
    
);
}
export default CalenderBox;