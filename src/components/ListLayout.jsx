import { useEffect, useState } from "react";
import { IconThumbUp, IconThumbDown, IconSlash } from '@tabler/icons-react';

import "./ListLayout.css"

const ListLayout = ({ data }) => {
  const [city, setCity] = useState("");
  const [filterData, setFilterData] = useState([{}]);

  const getCity = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    getFilter();
  }, [city]);

  const getFilter = () => {
    const searchCity = city.toLowerCase();
    const fetchData = data.filter(
      (item) => item?.name?.toLowerCase() === searchCity
    );
    setFilterData(fetchData);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
  }

  const [popup, setPopup] = useState("")

  const upvote = (e) => {
    e.preventDefault();
    setPopup(!popup);

    let parent = e.target.closest("[data-key]");
    let thumbup = parent.querySelector(".tabler-icon-thumb-up");
    let thumbdown = parent.querySelector(".tabler-icon-thumb-down");

    if(thumbup.getAttribute("fill") === "none"){
      thumbup.setAttribute("fill","var(--accent-green")
    } else {
      thumbup.setAttribute("fill","none")
    }

    if(thumbdown.getAttribute("fill") !== "none"){
      thumbdown.setAttribute("fill","none")
      thumbup.setAttribute("fill","var(--accent-green")
    }

    setPopup(!popup)
  }

  const downvote = (e) => {
    e.preventDefault();
    setPopup(!popup);

    let parent = e.target.closest("[data-key]");
    let thumbup = parent.querySelector(".tabler-icon-thumb-up");
    let thumbdown = parent.querySelector(".tabler-icon-thumb-down");
    
    if(thumbdown.getAttribute("fill") === "none"){
      thumbdown.setAttribute("fill","var(--accent-red")
    } else {
      thumbdown.setAttribute("fill","none")
    }

    if(thumbup.getAttribute("fill") !== "none"){
      thumbup.setAttribute("fill","none")
      thumbdown.setAttribute("fill","var(--accent-red")
    }

    setPopup(!popup)
  }

  const buttonOK = (e) => {
    e.preventDefault();
    setPopup(!popup)
  }

  return (
    <>
    <div className="reportModel" style={{ height: "90vh", width: "90vw" }}>
      <div className="searchcont">
        <form className="searchField" onSubmit={searchSubmit}>
          <input
            type="text"
            placeholder="Search by city..."
            value={city}
            onChange={getCity}
          ></input>
          <div className="btnh">
            <button type="submit">Search</button>
          </div>
        </form>{/* end searchField */}
        <div className="showData">
          <ul>
              {filterData.length==0?(data.map((item, index) => (
                <li className="data" key={index} data-key={item.id}>
                  <div className="data_flex">
                    <div className="data_text">
                    <div className="data_row">
                        <b>Place:</b>
                        <span> {item.name}</span>
                      </div>

                      <div className="data_row">
                        <b>Address:</b>
                        <span> {item.address}</span>
                      </div>

                      <div className="data_row">
                        <b>Problem Type:</b>
                        <span> {
                          item.type === "outOfOrder" ? "Out of order" :
                          item.type === "temporaryClose" ? "Temporarily Closed" :
                          item.type === "construction" ? "Construction" :
                          "Other"
                        }</span>
                      </div>

                      <div className="data_row">
                        <img src={item.image} alt={"image"}/>
                      </div>

                      <div className="data_row">
                        <b>Reported by:</b>
                        <span> {item.reporterName}</span>
                      </div>
                      
                    </div>

                    <div className="right">
                      <p>Did you find<br/>this helpful?</p>
                      
                      <div className="thumbs">
                        <IconThumbUp onClick={upvote} size={22} color="var(--text)" stroke={2}/>
                        <IconSlash size={22} color="var(--text)" stroke={2}/>
                        <IconThumbDown onClick={downvote} size={22} color="var(--text)" stroke={2}/>
                      </div>
                      
                    </div>
                  </div>
                </li>
                
            ))):(filterData.map((item, index) => (
              <li className="data" key={index} data-key={item.id}>
                <div className="data_flex">
                  <div className="data_text">
                  <div className="data_row">
                      <b>Place:</b>
                      <span> {item.name}</span>
                    </div>

                    <div className="data_row">
                      <b>Address:</b>
                      <span> {item.address}</span>
                    </div>

                    <div className="data_row">
                      <b>Problem Type:</b>
                      <span> {
                        item.type === "outOfOrder" ? "Out of order" :
                        item.type === "temporaryClose" ? "Temporarily Closed" :
                        item.type === "construction" ? "Construction" :
                        "Other"
                      }</span>
                    </div>

                    <div className="data_row">
                      <img src={item.image} alt={"image"}/>
                    </div>

                    <div className="data_row">
                      <b>Reported by:</b>
                      <span> {item.reporterName}</span>
                    </div>
                    
                  </div>

                  <div className="right">
                    <p>Did you find<br/>this helpful?</p>
                    
                    <div className="thumbs">
                      <IconThumbUp onClick={upvote} size={22} color="var(--text)" stroke={2}/>
                      <IconSlash size={22} color="var(--text)" stroke={2}/>
                      <IconThumbDown onClick={downvote} size={22} color="var(--text)" stroke={2}/>
                    </div>
                    
                  </div>
                </div>
              </li>
            )))}
            {/* {filterData.map((item, index) => (
              <div className="data" key={index}>
                <li>
                  <p>{item.type} </p>
                  <p>{item.address}</p>
                </li>
              </div>
            ))} */}
          </ul>
        </div> {/* end showData */}
      </div>{/* end searchcont */}
    </div>

    { popup ? 
        <div id="ok-popup">
            <div className="popup-box">
                Thank you for your feedback!

                <div className="btns">
                    <button onClick={buttonOK}>Okay</button>
                </div>
                
            </div>
        </div>
    : ""}
    </>
  );
};

export default ListLayout;
