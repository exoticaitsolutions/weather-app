import './App.css';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Weather from './components/weather';
import { Button} from 'react-bootstrap';

export default function Location() {

  const [data, setData] = useState([]);
  const [datebys, setDatebys] = useState([]);
  const { lat } = useParams();
  const { long } = useParams();
  const { city } = useParams();
  const back= () => {
    window.history.go(-1);
  }

  useEffect(() => {
    async function fetchData() {
      // ${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}
      await fetch(`${process.env.REACT_APP_API_URL}lat=${lat}&lon=${long}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      }).catch(error => {
        console.log(error);
        setDatebys({

        })

      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="Location">
        <Button onClick={back}variant="primary" className="mt-2">Back</Button>
        <center><h2 className='text-white'>{city}</h2></center>

         {
         (typeof data.properties != 'undefined') ? (
            <Weather weatherData={data} cityData={city}/>
            ): (
                <div></div>
            )}
    </div>
  );
}
