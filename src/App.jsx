
import { useState, useEffect } from "react";

import "./App.css";
import  data from '../utils/data'
// import layout components
import HomeLayout from './components/HomeLayout'
import ListLayout from "./components/ListLayout";
import FormLayout from "./components/FormLayout";

// fetch tasks from the server
import { fetchReports } from "../utils/helpers";


function App() {
  const [selectView, setSelectView] = useState("mapView");
  const [reports, setReports] = useState([]);

  
  

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchReports();
      setReports(res);
    };
    fetchData();
  }, []);

  console.log('this is the data',reports)

  return (
    <>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "" }}>
        <button value={"mapView"} onClick={()=> {setSelectView("mapView")}}>mapView</button>
        <button value={"listView" } onClick={()=> {setSelectView("listView")}}>listView</button>
        <button value={"reportForm" } onClick={()=> {setSelectView("reportForm")}}>Report Form</button>
      </div>

      {selectView == "mapView" && <HomeLayout />}
      {selectView == "listView" &&  <ListLayout data={data.reports} />}
      {selectView == "reportForm" && <FormLayout />}

    </>
  );
}

export default App;
