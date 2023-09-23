import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeLayout from "./components/HomeLayout";
import ListLayout from "./components/ListLayout";

function App() {
  const [selectView, setSelectView] = useState("mapView");
  console.log(selectView);
  return (
    <>
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "" }}>
        <button value={"mapView"} onClick={()=> {setSelectView("mapView")}}>mapView</button>
        <button value={"listView" } onClick={()=> {setSelectView("listView")}}>listView</button>
      </div>

      {selectView == "mapView" && <HomeLayout />}
      {selectView == "listView" && <ListLayout /> }
      {/* <HomeLayout /> */}
    </>
  );
}

export default App;
