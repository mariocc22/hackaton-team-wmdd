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
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "" }}>
        <button
          value={"mapView"}
          onClick={() => {
            setSelectView("mapView");
          }}
        >
          mapView
        </button>
        <button
          value={"listView"}
          onClick={() => {
            setSelectView("listView");
          }}
        >
          listView
        </button>

        <button
          value={"reportForm"}
          onClick={() => {
            setSelectView("reportForm");
          }}
        >
          Report Form
        </button>
      </div>

      {selectView == "mapView" && (
        <HomeLayout data={reports} openFormLayout={openFormLayout} />
      )}
      {selectView == "listView" && <ListLayout data={reports} />}
      {selectView == "reportForm" && <FormLayout cordinate={cordinate} />}
    </>
  );
}

export default App;
