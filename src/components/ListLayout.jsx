import { useEffect, useState } from "react";

const ListLayout = ({ data }) => {
  const [city, setCity] = useState("");
  const [filterData, setFilterData] = useState([{}]);
  const getCity = (event) => {
    setCity(event.target.value);
    console.log(city);
    // console.log(data)
    // getFilter()
  };

  useEffect(() => {
    getFilter();
  }, [city]);

  const getFilter = () => {
    console.log(city);
    const fetchData = data.filter((item) => item.city == city);
    setFilterData(fetchData);
    console.log(fetchData);
  };
  return (
    <div className="reportModel" style={{ height: "90vh", width: "90vw" }}>
      <div className="searchField">
        <input
          text="type"
          placeholder="search by city"
          value={city}
          onChange={getCity}
        ></input>
      </div>
      <div className="showData">
        <ul>
          {filterData.map((item, index) => (
            <div className="data" key={index}>
              <li>
                <p>{item.type} </p>
                <p>{item.address}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListLayout;
