import React from 'react';
import './Services.css';

const Services = () => {
    return(
        <div class="body">
            <div class="container-fluid p-0">
<div class="container-fluid p-0">
    <div class="row my-4 p-0">
        <div class="col col-sm-6 p-5">
            <div class="row justify-content-md-center align-self-center">
                <p class="biggg">Champion.GG Services</p>
            </div>
            <div class="container-fluid">
            <div class="row my-4">
                <div class="col col-sm-7 p-4">
                    <p class="smol lead">Champion.GG provides different kinds of services <br></br>
                    for deeper levels of improvement for different kinds of gamers.</p>
                    <div class="text-center">
                        <a href="#wanowan" class="boton btn btn-primary btn-lg me-3"><i class="bi bi-view-stacked"></i> 1-on-1 Coaching</a>
                        <a href="#submitvod" class="boton btn btn-primary btn-lg me-3"><i class="bi bi-view-stacked"></i> Submit a VOD</a>
                        <a href="#simulate" class="boton btn btn-primary btn-lg me-3"><i class="bi bi-view-stacked"></i> Simulate RG</a>
                    </div>
                </div>
                
            </div>
        </div>

        <div id="wanowan" class="container-fluid">
                <div class="row p-4">
                    <div class="col">
                        <div class="row justify-content-md-center">
                            <h1 class="col col-sm-auto bigg text-center d-flex align-items-center">1-on-1 Coaching</h1>
                            <div class="col col-sm-2 d-flex align-items-center">
                                <p class="smol lead">is as easy as:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col col-sm-4">
                        <div class="card">
                            <h1 class="smol text-center">Pick a Coach</h1>
                            <div class="card-body">
                                <img src={require('../images/01.jpg')} className="pic01" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col col-sm-4">
                        <div class="card">
                            <h1 class="smol text-center">Get assessed</h1>
                            <div class="card-body">
                            <img src={require('../images/02.jpeg')} className="pic01" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="col col-sm-4">
                        <div class="card ">
                            <h1 class="smol text-center">Dominate games!</h1>
                            <div class="card-body">
                            <img src={require('../images/03.jpg')} className="pic01" alt=""/>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a class="boton btn btn-primary"><i class="bi bi-view-stacked"></i> Pick a Coach</a>
                        </div>
                    </div>
                </div>
        </div><br></br><br></br>

        <div id="submitvod" class="container-fluid">
            <div class="row p-4">
                <div class="col">
                    <div class="row justify-content-md-center d-flex align-items-center">
                        <h1 class="col col-sm-auto bigg text-center">VOD Review</h1>
                        <div class="col col-sm-2 d-flex align-items-center">
                            <p class="smol lead">is as easy as:</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-3">
                <div class="col col-sm-4">
                    <div class="card">
                        <h1 class="smol text-center">Record gameplay</h1>
                        <div class="card-body">
                        <img src={require('../images/04.jpg')} className="pic01" alt=""/>
                        </div>
                    </div>
                    </div>
                <div class="col col-sm-4">
                    <div class="card">
                        <h1 class="smol text-center">Upload files</h1>
                        <div class="card-body">
                        <img src={require('../images/05.png')} className="pic01" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-4">
                    <div class="card">
                        <h1 class="smol text-center">Get assessed</h1>
                        <div class="card-body">
                        <img src={require('../images/06.jpg')} className="pic01" alt=""/>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a class="boton btn btn-primary"><i class="bi bi-camera-video"></i> Submit your VOD</a>
                    </div>
                </div>
            </div>
        </div>

        <div id="simulate" class="container-fluid">
            <div class="row p-4">
                <div class="col">
                    <div class="row justify-content-md-center d-flex align-items-center">
                        <h1 class="col col-sm-auto bigg text-center">Ranked Game Simulation</h1>
                        <div class="col col-sm-2 d-flex align-items-center">
                            <p class="smol lead">is as easy as:</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-3">
                <div class="col col-sm-4">
                    <div class="card">
                        <h1 class="smol text-center">Pick a Coach</h1>
                        <div class="card-body">
                        <img src={require('../images/01.jpg')} className="pic01" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-4">
                    <div class="card">
                        <h1 class="smol text-center">Practice games</h1>
                        <div class="card-body">
                        <img src={require('../images/08.jpg')} className="pic01" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-4">
                    <div class="card">
                        <h1 class="smol text-center">Live Feedback</h1>
                        <div class="card-body">
                        <img src={require('../images/09.jpg')} className="pic01" alt=""/>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a class="boton btn btn-primary"><i class="bi bi-controller"></i> Play with a Coach</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        </div>
    </div>
</div>
    )
}

export default Services