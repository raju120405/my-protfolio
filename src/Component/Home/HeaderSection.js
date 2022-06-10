import React from 'react';


const HeaderSection = () => {
    return (
        <div className='container my-3 '>
            <div class="row ">
                <div class="col-lg-6 col-md-12 align-self-center">
                    <div className="h5 text-uppercase">Hi I am Raju Ahmed</div>
                    <div className="h6 text-uppercase">Font-End Web Developer</div>

                    <div>
                    
                        <a class="mt-2 btn btn-primary active text-white " href="Raju-Resume-2022.pdf" download="Raju-Resume-2022.pdf">
                            Download Resume
                        </a>
                    </div>

                </div>
                <div class="col-lg-6 col-md-12">
                    <img src="https://i.ibb.co/LzNmXn1/4002785-1.jpg" alt="" className='img-fluid' />
                </div>
            </div>

        </div>
    );
};

export default HeaderSection;