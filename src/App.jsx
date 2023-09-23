import { useState, useEffect } from "react";

import "./App.css";
import data from "../utils/data";
// import layout components
import HomeLayout from "./components/HomeLayout";
import ListLayout from "./components/ListLayout";
import FormLayout from "./components/FormLayout";

// fetch tasks from the server
import { fetchReports } from "../utils/helpers";

function App() {
  const [selectView, setSelectView] = useState("mapView");
  const [reports, setReports] = useState([]);
  const [cordinate, setCordinate] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchReports();
      setReports(res);
    };
    fetchData();
  }, []);

  // console.log("this is the data", reports);

  const openFormLayout = (cordinate) => {
    setSelectView("reportForm");
    setCordinate(cordinate);
    console.log("Report issue at: ", cordinate);
  };

  return (
    <>
      <div id="grandcontainer">
        <div className="top-btns">
          <button
            value={"mapView"}
            onClick={() => {
              setSelectView("mapView");
              location.reload();
            }}
            className={selectView == "mapView" && "btn-active"}
          >
            🌎 View Map
          </button>
          <button
            value={"listView"}
            onClick={() => {
              setSelectView("listView");
            }}
            className={selectView == "listView" && "btn-active"}
          >
            📝 Recent Reportings
          </button>

          <button
            value={"reportForm"}
            onClick={() => {
              setSelectView("reportForm");
            }}
            className={selectView == "reportForm" && "btn-active"}
          >
            💡 Report a Problem
          </button>
        </div>

        {selectView == "mapView" && (
          <HomeLayout data={reports} openFormLayout={openFormLayout} />
        )}
        {selectView == "listView" && <ListLayout data={reports} />}
        {selectView == "reportForm" && <FormLayout cordinate={cordinate} />}
      </div>{/* end grandcontainer */}

      
    </>
  );
}

export default App;
