
import logo from '../images/Secondary.png';
import { Button, Table } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './Settings.css';


import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Settings() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://15.207.185.137:3000/customerlist')
        .then(response => {
            setData(response.data.posts);
            // console.log(response.data.posts)
        })
        .catch(error => {
            console.log(error);
        });
    }, []);


    const [show, setShow] = useState(false);
    const [inputValues, setInputValues] = useState({
        customername: '',
        locationname: '',
        thermalsensorid: ''
    });

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
        ...inputValues,
        [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postData(inputValues);
        // console.log(inputValues);
        setInputValues({
            customername: '',
            locationname: '',
            thermalsensorid: ''
          });
        handleClose();
    };

    const postData = async (data) => {
        try {
            // console.log(data);
          const response = await axios.post('http://15.207.185.137:3000/customerlist', data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    }


    return(
        <>
            <div className='d-flex' style={{ backgroundColor: 'rgb(220, 227, 233)'}}>
                <div className='bg-dark col-auto min-vh-100 ' style={{width: "20%"}}>
                    <ul className="d-flex flex-column nav nav-pills">
                        <li className="ms-3 text-white fs-4">
                            <img src={logo} className="img-fluid"/>
                        </li>
                        <hr className="hr hr-blurry text-white" />
                        <li className="nav-item text-white fs-4">
                            <a className="nav-link text-white fs-5" aria-current="page" href="/" >
                                <i className='icon bi bi-houses'></i>
                                <span className='ms-2 navtext'>Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item text-white fs-4">
                            <a className="nav-link text-white fs-5" aria-current="page" href="/settings">
                                <i className='bi bi-gear icon'></i>
                                <span className='ms-2 navtext'>Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className="d-flex flex-column gap-4" style={{marginLeft: '2%', height: '100%'}}>
                    <div>
                        <span style={{fontSize: "3vw"}}>Settings</span>
                    </div>
                    <div style={{backgroundColor: 'white', width: "75vw", height: "100%", borderRadius: "5px"}}>
                        <div className='d-flex'>
                            <div style={{width: "65vw", padding: "20px"}}>
                                <span style={{fontSize: '1.5vw', fontWeight: '500',}}>List Of Sensors</span>
                            </div>
                            <div style={{padding: "20px"}}>
                                <button style={{width: "12vw", height: '6vh', fontSize: "1vw"}}  type="button" className="btn btn-primary"  onClick={handleShow}>Add New Customer</button>
                                {/* <button onClick={handleClickOpen}>Open Dialog</button> */}
                                
                                <Modal show={show} onHide={handleClose} centered>
                        
                                    <Modal.Body>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId="input1">
                                                <Form.Label>Customer Name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    name="customername"
                                                    value={inputValues.customername}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="input2">
                                                <Form.Label>Location Name</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    name="locationname"
                                                    value={inputValues.locationname}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>

                                            <Form.Group controlId="input3">
                                                <Form.Label>Thermal Sensor Id</Form.Label>
                                                <Form.Control
                                                    required
                                                    type="text"
                                                    name="thermalsensorid"
                                                    value={inputValues.thermalsensorid}
                                                    onChange={handleInputChange}
                                                />
                                            </Form.Group>

                                            <Modal.Footer>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                        <div style={{padding: "20px"}}>
                            <Table class="table table-bordered">
                                <thead >
                                    <tr>
                                        <th>Sl No</th>
                                        <th>Customer</th>
                                        <th>Location</th>
                                        <th>SensorId</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{item.customer}</td>
                                                    <td>{item.location}</td>
                                                    <td>{item.thermal_sensors}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;