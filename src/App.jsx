

import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


// import layout components
import HomeLayout from './components/HomeLayout'
// fetch tasks from the server
import { fetchReports } from "../utils/helpers";


function App() {
  const [count, setCount] = useState(0);
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

     <HomeLayout  />

    </>
  );
}

export default App;
