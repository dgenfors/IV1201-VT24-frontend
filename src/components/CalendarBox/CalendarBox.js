import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/**
 * Represents a component for selecting dates in a calendar.
 * @param {object} props - The props object containing the component's properties.
 * @param {Function} props.passData - The function to pass the selected dates to the parent component.
 * @returns {JSX.Element} JSX representation of the calendar box component.
 */
function CalenderBox(props){
    // State hooks to manage component state
    const [date, setDate] = useState([{startDate: new Date(), endDate: new Date()}]);
    const [rows, setRows] = useState([new Date()]);

    /**
     * Handles the change in end date.
     * @param {Date} value - The selected end date.
     * @param {number} index - The index of the date being changed.
     */
    function changeEndDate(value, index){
        const updatedDate = [...date];
        updatedDate[index].endDate = value;
        setDate(updatedDate);
        props.passData(date);
    }

    /**
     * Handles the change in start date.
     * @param {Date} value - The selected start date.
     * @param {number} index - The index of the date being changed.
     */
    function changeStartDate(value, index){
        const updatedDate = [...date];
        updatedDate[index].startDate = value;
        if(value > updatedDate[index].endDate)
            updatedDate[index].endDate = updatedDate[index].startDate;
        setDate(updatedDate);
        props.passData(date);
    }

    /**
     * Adds a new row for selecting dates.
     */
    function addNewRow(){
        setRows([...rows, { id: Date.now() }]);
        setDate([...date, {startDate: new Date(), endDate: new Date()}]);
    }

    return(
        <div>
            {rows.map((field, index) => (
                <div key={index+1}>
                    From: <DatePicker 
                        minDate={new Date()} // Restricts selection before today
                        selected={date[index].startDate} 
                        label="From:" 
                        dateFormat={'YYYY-MM-dd'}
                        onChange={(date) => changeStartDate(date, index)} />
                    <div></div>          
                    To: <DatePicker 
                        selected={date[index].endDate} 
                        minDate={date[index].startDate} // Restricts selection before today
                        label="To:" 
                        dateFormat={'YYYY-MM-dd'}
                        onChange={(date) => changeEndDate(date, index)} />
                </div>
            ))}
            <button onClick={addNewRow}>Add new availability</button>
        </div>
    );
}

export default CalenderBox;
