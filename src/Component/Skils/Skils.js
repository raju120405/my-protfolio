import React from 'react';

const Skils = () => {
    return (
        <div className='container '>
            <h5>My Skils</h5>
            <div className='border p-4 shadow p-3 mb-5 bg-white rounded'>
            <div className='d-flex justify-content-start'>
                <h5 >HTML</h5>
            </div>
            <div className='progress'>
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="50">
                    90%
                </div>
            </div>
            <div className='d-flex justify-content-start'>
                <h5 >CSS</h5>
            </div>
            <div className='progress'>
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="50">
                    80%
                </div>
            </div>
            <div className='d-flex justify-content-start'>
                <h5 >Bootstrap</h5>
            </div>
            <div className='progress'>
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="50">
                    90%
                </div>
            </div>
            <div className='d-flex justify-content-start'>
                <h5 >Tailwind</h5>
            </div>
            <div className='progress'>
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="50">
                    85%
                </div>
            </div>
            <div className='d-flex justify-content-start'>
                <h5 >Javascript</h5>
            </div>
            <div className='progress'>
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="50">
                    85%
                </div>
            </div>
            <div className='d-flex justify-content-start'>
                <h5 >React</h5>
            </div>
            <div className='progress'>
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="50">
                    75%
                </div>
            </div>
            <div className='d-flex justify-content-start'>
                <h5 >React Router</h5>
            </div>
            <div className='progress'>
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="50">
                    80%
                </div>
            </div>
            </div>
        </div>
    );
};

export default Skils;