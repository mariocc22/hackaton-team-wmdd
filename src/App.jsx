
import { useState, useEffect } from "react";

import "./App.css";

// import layout components
import HomeLayout from './components/HomeLayout'
import ListLayout from "./components/ListLayout";



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

  return (
    <>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "" }}>
        <button value={"mapView"} onClick={()=> {setSelectView("mapView")}}>mapView</button>
        <button value={"listView" } onClick={()=> {setSelectView("listView")}}>listView</button>
      </div>

      {selectView == "mapView" && <HomeLayout />}
      {selectView == "listView" && <ListLayout reports={reports}/> }




    </>
  );
}

export default App;
