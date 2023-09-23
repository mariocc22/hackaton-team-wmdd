import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
