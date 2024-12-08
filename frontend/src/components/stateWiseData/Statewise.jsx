import React, { useEffect, useState } from 'react'

const Statewise = () => {
  const [stateData,setStateData] = useState([]);

  useEffect(()=>{
    const getCovidData = async() => {
      const response = await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise');
      const datajson = await response.json();
      console.log(datajson.data.statewise);
      setStateData(datajson.data.statewise);
    }
    getCovidData();
  },[])

  return (
    <div>
      <h1>Statewise COVID-19 Dashboard<span style={{color:'red' }}> India</span>
      </h1>
      <div>
        <table>
          <thead>
            <tr style={{color:'blue' }}>
              <th>State</th>
              <th>active</th>
              <th>confirmed</th>
              <th>deaths</th>
              <th>recovered</th>
            </tr>
          </thead>
          <tbody>
            {stateData.map((curr, index) => {
              return (
                <tr key={index}>
                  <th>{curr.state}</th>
                  <th>{curr.active}</th>
                  <th>{curr.confirmed}</th>
                  <th>{curr.deaths}</th>
                  <th>{curr.recovered}</th>
                </tr>
              );
            })}
          </tbody>


        </table>
      </div>
    </div>
  )
}

export default Statewise
