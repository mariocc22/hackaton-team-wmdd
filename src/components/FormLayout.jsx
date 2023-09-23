import React, { useState } from "react";

import "../../src/App.css";
import "./FormLayout.css";

import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Divider, InputLabel, TextField } from "@mui/material";

import { addReport } from "../../utils/helpers";

const FormLayout = ({ cordinate }) => {
  const [popup, setPopup] = useState("");
  const [selected, setSelected] = useState(new Date());

  console.log("cordinate", cordinate);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const placeName = e.target.querySelector("#outlined-basic").value;
    const address = e.target.querySelector("#address").value;
    const dropdownValue = e.target.querySelector("input.rw-sr").value;
    const comment = e.target.querySelector("#comment").value;
    const newOptions = { year: "numeric", month: "2-digit", day: "2-digit" };
    const todayDate = new Date(selected).toLocaleDateString(
      undefined,
      newOptions
    );
    if (dropdownValue !== "Pick a tag...") {
      // do stuff with the form
      setPopup(!popup);
    }

    const coordinates = cordinate;

    // add it to the server
    const report = {
      id: placeName + "_id",
      type: dropdownValue,
      address: address,
      postedDate: todayDate,
      endDate: "10/30/2023",
      reporterName: "Anonymous",
      lat: +coordinates.lat,
      lng: +coordinates.lon,
      name: placeName,
      image: "../src/assets/img_1.jpg",
    };

    addReport(report);
    e.target.reset();
  };

  const buttonOK = (e) => {
    e.preventDefault();
    setPopup(!popup);
    let form = document.querySelector("#formcontainer .form");
    form.querySelector("#comment").value = "";
  };

  return (
    <>
      <div id="formcontainer">
        <h2>Report a Problem</h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* input the name */}
          <TextField
            id="outlined-basic"
            label="Place name"
            variant="outlined"
          />
          <Divider variant="middle" />
          <TextField
            id="address"
            label="Place the address"
            variant="outlined"
          />
          <DropdownList
            name="tag"
            defaultValue="Pick a tag..."
            data={[
              "Construction",
              "Out of Order",
              "Temporarily Closed",
              "Event",
              "Other",
            ]}
          />
          <Divider variant="middle" />

          <div className="form_row">
            <label htmlFor="comment">Problem Details:</label>
            <textarea id="comment" name="comment" rows="10"></textarea>
          </div>
          <Divider variant="middle" />
          <div className="form_row">
            <InputLabel htmlFor="date">Date: </InputLabel>
            <DayPicker
              name="date"
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
          </div>

          <button type="submit">Submit Report</button>
        </form>
      </div>

      {popup ? (
        <div id="ok-popup">
          <div className="popup-box">
            Thank you for submitting your report!
            <div className="btns">
              <button onClick={buttonOK}>Okay</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FormLayout;
