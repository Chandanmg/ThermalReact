
import './Dashboard-measurement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../images/Secondary.png';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function DashboardMeasurement(){

    const employeeList = [
        { 
            customer: "Customer 1",
            location: "Location 1",
            sensorid: "1",
            lastresponded: "0:0:0",
            totalimages: "0",
            correct: "0",
            wrong: "0"
        },
        { 
            customer: "Customer 2",
            location: "Location 2",
            sensorid: "2",
            lastresponded: "0:0:0",
            totalimages: "0",
            correct: "0",
            wrong: "0"
        },
    ]

    
    const navigate = useNavigate();
    function back(){
        navigate('/');
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
                        {/* <li class="nav-item text-white fs-4">
                            <a class="nav-link text-white fs-5" aria-current="page" href="/settings">
                                <i className='bi bi-gear icon'></i>
                                <span className='ms-2 navtext'>Settings</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div class="d-flex gap-5" style={{marginLeft: '2%', marginTop: '4%', height: '100%'}}>
                
                    <div style={{backgroundColor: 'white', width: "35vw", height: "100%"}}>
                        <div style={{padding:"20px"}}>
                            <span style={{fontSize: '1.5vw', fontWeight: '500',}}>List Of Sensors</span>
                        </div>
                        <div style={{padding: "20px"}}>
                            <Table class="table table-bordered">
                                <thead >
                                    <tr>
                                        <th>Sl No</th>
                                        <th>Customer</th>
                                        <th>SensorId</th>
                                        <th>Last Responded</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employeeList.map((item, index) => {
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{item.customer}</td>
                                                    <td>{item.sensorid}</td>
                                                    <td>{item.totalimages}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div class="d-flex flex-column gap-4">
                        <div class="d-flex gap-3">
                            <div className='measure-card d-flex flex-column ' style={{backgroundColor: 'rgb(0, 52, 76)', height:'20vh'}}>
                                <div class="d-flex" style={{marginTop: "4%"}}>
                                    <div style={{width: "30%", alignItems: "center", display: "flex", justifyContent: "center"}}>
                                        <span style={{fontSize: "1.6vw", color: "white", fontWeight: "500"}}>Sl No</span>
                                    </div>
                                    <div  style={{width: "60%", alignItems: "center", display: "flex", justifyContent: "center"}}>
                                        <span style={{fontSize: "2.6vw", color: "white", fontWeight: "600"}}>1</span>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div style={{width: "30%", alignItems: "center", display: "flex", justifyContent: "center"}}>
                                        <span style={{fontSize: "1.6vw", color: "white", fontWeight: "500"}}>Time</span>
                                    </div>
                                    <div  style={{width: "60%", alignItems: "center", display: "flex", justifyContent: "center"}}>
                                        <span style={{fontSize: "2.8vw", color: "white", fontWeight: "600"}}>00:00:00</span>
                                    </div>
                                </div>
                            </div>
                            <div className='measure-card d-flex' style={{backgroundColor: 'rgb(0, 52, 76)', height:'20vh'}}>
                                <div style={{width: "40%", alignItems: "center", display: "flex", justifyContent: "center", marginLeft: "4%"}}>
                                    <span style={{fontSize: "1.6vw", color: "white", fontWeight: "500"}}>Number of People Detected</span>
                                </div>
                                <div  style={{width: "60%", alignItems: "center", display: "flex", justifyContent: "center"}}>
                                    <span style={{fontSize: "3.4vw", color: "white", fontWeight: "600"}}>1000</span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex gap-4' style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Button style={{width: "5vw", height: '5vh', alignItems: "center", display: "flex", justifyContent: "center"}} >
                                    <i className='prev-icon bi bi-arrow-left'></i>
                                </Button>
                            </div>
                            <div className='d-flex flex-column gap-3'>
                                <div style={{backgroundColor: "white", width: "20vw", height: "26vh", borderRadius: "4px"}}>

                                </div>
                                <div style={{backgroundColor: "white", width: "20vw", height: "26vh", borderRadius: "4px"}}>

                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Button style={{width: "5vw", height: '5vh', alignItems: "center", display: "flex", justifyContent: "center"}} >
                                    <i className='prev-icon bi bi-arrow-right'></i>
                                </Button>
                            </div>
                        </div>
                        <div className='d-flex gap-5' style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <div>
                                <button style={{width: "7vw", height: '6vh'}}  type="button" class="btn btn-success">Correct</button>
                            </div>
                            <div>
                                <button style={{width: "7vw", height: '6vh'}}  type="button" class="btn btn-danger">Wrong</button>
                            </div>
                            <div>
                                <button style={{width: "7vw", height: '6vh'}}  type="button" class="btn btn-secondary" onClick={back}>Back</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default DashboardMeasurement;