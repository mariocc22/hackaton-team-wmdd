import React, { useState } from "react"

import "../../src/App.css";
import "./FormLayout.css";

import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const FormLayout = () => {
    const [popup, setPopup] = useState("")

    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let comment = e.target.querySelector("#comment");
        let dropdownValue = e.target.querySelector("input.rw-sr").value;
        if(dropdownValue !== "Pick a tag..."){
            // do stuff with the form
            setPopup(!popup)
        }
    }

    const buttonOK = (e) => {
        e.preventDefault();
        setPopup(!popup);
        let form = document.querySelector("#formcontainer .form");
        form.querySelector("#comment").value = "";
    }

    return (
        <>
            <div id="formcontainer">
                <h2>Report a Problem</h2>

                <form className="form" onSubmit={handleSubmit}>
                    <DropdownList
                        defaultValue="Pick a tag..."
                        data={["Construction", "Out of Order", "Temporarily Closed", "Event", "Other"]}
                    />

                    <div className="form_row">
                        <label htmlFor="comment">Problem Details:</label>
                        <textarea id="comment" name="comment" rows="10"></textarea>
                    </div>

                    <div className="form_row">
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                            footer={footer}
                        />
                    </div>

                    <button type="submit">Submit Report</button>                
                </form>
            </div>

            { popup ? 
                <div id="ok-popup">
                    <div className="popup-box">
                        Thank you for submitting your report!

                        <div className="btns">
                            <button onClick={buttonOK}>Okay</button>
                        </div>
                        
                    </div>
                </div>
            : ""}
        </>
    )
}

export default FormLayout