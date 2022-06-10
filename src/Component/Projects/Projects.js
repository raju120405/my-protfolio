import React from 'react';

const Projects = () => {
    return (
        <div className='container'>
            <h4 className='mt-5 '> Projects</h4>
            <div class="row ml-25 d-flex justify-content-around ">
                <div class="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rem" }}>
                    <img src="https://i.ibb.co/c6DHwq5/Screenshot-2022-06-09-211715.png" class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Abc Computer</h5>
                        <p class="card-text">.Abc Computer (warehouse management): Firebase Used For Authentication. It Has been Made Mobile Devices Responsive with Bootstrap. Product add and update funcation.</p>
                        <a href="https://laptop-451bd.web.app/" target="_blank" class="btn btn-primary">EXPLORE</a>
                    </div>
                </div>

                <div class="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rem" }}>
                    <img src="https://i.ibb.co/ThJF4rY/Screenshot-2022-06-09-211623.png" class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Electronic Tools </h5>
                        <p class="card-text"> Electronic Tools (manufacturer website):It Has been Made Responsive For Mobile Devices. Authentication and Authorization Develop With firebase and jwt.Admin pannel Is Develop for user menagement .
                        </p>
                        <a href="https://electronic-tools-11055.web.app/" class="btn btn-primary" target="_blank">EXPLORE</a>
                    </div>
                </div>
                <div class="card shadow p-3 mb-5 bg-body rounded" style={{ width: "18rem" }}>
                    <img src="https://i.ibb.co/tHm6JG5/Screenshot-2022-06-09-211834.png" class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Digital Studio </h5>
                        <p class="card-text">3.Digital Studio (independent-service-provider) : Mobile Responsive Website. Login And Registration system. Services Order System. any person can order a service.admin can menage order list</p>
                        <a href="https://email-password-9ac16.web.app/home" target="_blank" class="btn btn-primary">EXPLORE</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;