import React from 'react';
import moment from 'moment';
import {Card, Button, ListGroup , Carousel} from 'react-bootstrap';
import './weather.css';


const WeatherDataDisplay = ({weatherData}) => (
  <div className='carddiv'>
    
      <center>
      <Carousel>
        {
          weatherData.properties.timeseries.map((item) => 
          <Carousel.Item>
              <div className="page-content page-container" id="page-content">
                      <div className="padding">
                          <div className="row container d-flex justify-content-center">
                              <div className="col-lg-8 grid-margin stretch-card">
                          
                                  <div className="card card-weather">
                                      <div className="card-body">
                                          <div className="weather-date-location">
                                              <h3>{moment(item.time).local().format('dddd')}</h3>
                                              <p className="text-gray"> <span className="weather-date">{moment(item.time).local().format('MMMM, DD, YYYY')}</span> <span className="weather-location">{moment(item.time).local().format('HH:mm:ss')}</span> </p>
                                          </div>
                                          <div className="weather-data d-flex">
                                              <div className="mr-auto">
                                                  <h6 className="display-3">Temperature : {item.data.instant.details.air_temperature} <span className="symbol">°</span>C</h6>
                                                  <h6 className="display-3">Air Pressure : {item.data.instant.details.air_pressure_at_sea_level} <span className="symbol"></span>{weatherData.properties.meta.units.air_pressure_at_sea_level}</h6>
                                                  <h6 className="display-3">Cloud Area Fraction : {item.data.instant.details.cloud_area_fraction} <span className="symbol"></span>{weatherData.properties.meta.units.cloud_area_fraction}</h6>
                                                  <h6 className="display-3">Relative Humidity : {item.data.instant.details.relative_humidity} <span className="symbol"></span>{weatherData.properties.meta.units.relative_humidity}</h6>
                                                  <h6 className="display-3">Wind From Direction : {item.data.instant.details.wind_from_direction} <span className="symbol"></span>{weatherData.properties.meta.units.wind_from_direction}</h6>

                                              </div>
                                          </div>
                                      </div>
                                      <div className="card-body p-0">
                                          <div className="d-flex weakly-weather">
                                          <div className="weakly-weather-item">
                                                  <p className="mb-1"> next 1 hours </p> <i className="mdi mdi-weather-snowy"></i>
                                                  <p className="mb-0"> {(item.data.next_1_hours)?item.data.next_1_hours.summary.symbol_code:''} </p>
                                              </div>

                                          
                                              <div className="weakly-weather-item">
                                                  <p className="mb-1"> next 6 hours </p> <i className="mdi mdi-weather-snowy"></i>
                                                  <p className="mb-0"> {(item.data.next_6_hours)?item.data.next_6_hours.summary.symbol_code:''} </p>
                                              </div>
                                              <div className="weakly-weather-item">
                                                  <p className="mb-0"> Next 12 hours </p> <i className="mdi mdi-weather-cloudy"></i>
                                                  <p className="mb-0"> {(item.data.next_12_hours)?item.data.next_12_hours.summary.symbol_code:''} </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
              </div>
          </Carousel.Item>
            
          )
        }
       </Carousel>
      </center>
        
        
        
  </div>
)

export default WeatherDataDisplay;