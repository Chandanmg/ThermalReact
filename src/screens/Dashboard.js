
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../images/Secondary.png';
import { Button, Table } from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Dashboard(){

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

    const navigate = useNavigate();

    function handleClick() {
        navigate('/dashboardmeasurement');
    }


    return(
        <>
            <div className='d-flex' style={{ backgroundColor: 'rgb(220, 227, 233)'}}>
                <div className='bg-dark col-auto min-vh-100 ' style={{width: "20%"}}>
                    <ul class="d-flex flex-column nav nav-pills">
                        <li class="ms-3 text-white fs-4">
                            <img src={logo} class=" img-fluid"/>
                        </li>
                        <hr class="hr hr-blurry text-white" />
                        <li class="nav-item text-white fs-4">
                            <a class="nav-link text-white fs-5" aria-current="page" href="/" >
                                <i className='icon bi bi-houses'></i>
                                <span className='ms-2 navtext'>Dashboard</span>
                            </a>
                        </li>
                        <li class="nav-item text-white fs-4">
                            <a class="nav-link text-white fs-5" aria-current="page" href="/settings">
                                <i className='bi bi-gear icon'></i>
                                <span className='ms-2 navtext'>Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="d-flex flex-column gap-5" style={{marginLeft: '5%'}}>
                    <div class="d-flex gap-5" style={{marginTop: '30px'}}>
                        <div className='card d-flex flex-column gap-2' style={{backgroundColor: 'rgb(0, 52, 76)', height:'200px'}}>
                            <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <span style={{fontSize: '1.7vw', fontWeight: '500', color: 'white'}} >Total Sensors</span>
                            </div>
                            <div className='d-flex gap-4' style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <div className='d-flex flex-column gap-2'>
                                    <div className='circle'>
                                        <div className='circle-text'>1</div>
                                    </div>
                                    <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                        <div className='text-white'>Total</div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-2'>
                                    <div className='circle'>
                                        <div className='circle-text'>1</div>
                                    </div>
                                    <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                        <div className='text-white'>Online</div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-2'>
                                    <div className='circle'>
                                        <div className='circle-text'>1</div>
                                    </div>
                                    <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                        <div className='text-white'>Offline</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='card d-flex flex-column gap-2' style={{backgroundColor: 'rgb(0, 52, 76)', height:'200px'}}>
                            <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <span style={{fontSize: '1.7vw', fontWeight: '500', color: 'white'}} >Total Sensors</span>
                            </div>
                            <div className='d-flex gap-4' style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <div className='d-flex flex-column gap-2'>
                                    <div className='circle'>
                                        <div className='circle-text'>1</div>
                                    </div>
                                    <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                        <div className='text-white'>Total</div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-2'>
                                    <div className='circle'>
                                        <div className='circle-text'>1</div>
                                    </div>
                                    <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                        <div className='text-white'>Online</div>
                                    </div>
                                </div>
                                <div className='d-flex flex-column gap-2'>
                                    <div className='circle'>
                                        <div className='circle-text'>1</div>
                                    </div>
                                    <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                        <div className='text-white'>Offline</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundColor: 'white',}}>
                        <div style={{padding:"20px"}}>
                            <span style={{fontSize: '1.5vw', fontWeight: '500',}}>List Of Sensors</span>
                        </div>
                        <div style={{padding: "20px"}}>
                            <Table class="table table-bordered">
                                <thead >
                                    <tr>
                                        <th>Sl No</th>
                                        <th>Customer</th>
                                        <th>Location</th>
                                        <th>SensorId</th>
                                        <th>Last Responded</th>
                                        <th>Total Images</th>
                                        <th>Correct Result</th>
                                        <th></th>
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
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>0</td>
                                                    <td>
                                                        <Button type="button" class="btn btn-primary" onClick={handleClick}>View</Button>
                                                    </td>
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

export default Dashboard;