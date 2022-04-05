import React, { useEffect, useState } from "react";
import {  Container, Form, Button, Row, Col, ListGroup, Spinner } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './search.css';

export default function Location() {

    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);
    const [errmessage, setErrmessage] = useState("");
    const [loader, setLoader] = useState(false);
    const [validated, setValidated] = useState(false);


    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = async(e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        }

        setValidated(true);
        setLoader(true)

        e.preventDefault();
        var requestOptions = {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
            "name": value
            }),
        };

      fetch("http://localhost:3001/findCity", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status){
            setData(result.data)
              setErrmessage(result.message);
                setShow(true)
                setLoader(false)
          }else{
            setShow(false)
            setLoader(false)
          }
        }).catch(error => {
          if (!error.response) {
            setErrmessage('Error: Network Error');
            } else {
              setErrmessage(error.response.data.message);
            }
            setShow(false)
            setLoader(false)
        });
    }

    useEffect(() => {
      
    });

    return (

        <Container>


        <Row className="mb-8">
          <Col className="mx-auto">
          
       <div className="form"><Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} md="12" controlId="validationCustom03">
                  <Form.Control type="text" placeholder="Search City/Zip code" required value={value} onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
             
              <Button className="mt-2" size="lg" type="submit">Search {loader ? <Spinner size="sm" animation="border" /> : '' }</Button>
            </Form></div>
             
            </Col>
            <Col>

            { show && data.length > 0 ?
              <div className="comment_usr_details">
                <ListGroup as="ul">
                  <ListGroup.Item as="li" active><p>Search Results</p></ListGroup.Item>
                {  
                  data.map((city) => (
                    <ListGroup.Item key="{item}" as="li">{city.CityName} {city.province} {city.country}    
                     <NavLink
                    className="navbar-item"
                    to={`/result/${city.CityName} ${city.province} ${city.country} /${city.latitude}/${city.longitude}`}
                    exact
                    >
                      View Weather forecast detail
                     </NavLink> 
                </ListGroup.Item>
                  ))
                }
              </ListGroup>
              </div>
            : 
            <div className="">{errmessage}</div> }
            </Col>
        </Row>
             </Container>
    );
}