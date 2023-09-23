import { useEffect, useState } from "react";

const ListLayout = ({ data }) => {
  const [city, setCity] = useState("");
  const [filterData, setFilterData] = useState([{}]);
 
  const getCity = (event) => {
    setCity(event.target.value);
  };
    useEffect(() => {
        getFilter()
    },[city])
    
    const getFilter = () =>
    { 
        console.log(city)
        const fetchData = data.filter(item => item.city == city)
        setFilterData(fetchData)
        console.log(fetchData)
 
    }
  return (
      <div className='reportModel' style={{height:"90vh", width:"90vw"}}>
          <div className='searchField'>
          <input text="type" placeholder='search by city' value={city} onChange={getCity}></input>
          </div>
          <div className='showData'>
              <ul>
                  {filterData.length == 0 ? (data.map((item) => (
                      <div className='data'>
                          <li>
                              <p>{item.type} </p>
                              <p>{item.address}</p>
                          </li>
                      </div>
                  ))) : (filterData.map((item) => (
                      <div className='data'>
                          <li>
                              <p>{item.type} </p>
                              <p>{item.address}</p>
                          </li>
                      </div>
                  )))}

export default ListLayout;
