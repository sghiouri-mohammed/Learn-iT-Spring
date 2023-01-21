import React from "react";
import Bootstrap from '../assets/styles/bootstrap.min.css'
import Image from '../assets/image/registration-bg.png';

export default function Profile(){
    return(
        
        <div class="container-xl px-4 mt-4">
        <nav class="nav nav-borders">
            <a class="nav-link active ms-0">Profile</a>
            <a class="nav-link  ms-0" href="dashboard.html" >Dashboard</a>
        </nav>
        <hr class="mt-0 mb-4"/>
        <div class="row">
            <div class="col-xl-4 justify-content-center align-content-center">
                <div class="card mb-4 mb-xl-0">
                    <div class="card-header">Full Name</div>
                    <div class="card-body text-center">
                        <img class="img-account-profile d-block m-auto rounded-circle mb-2" width={200} height={200} src={Image} alt=""/>
                        <br/>
                        <button class="btn btn-primary" type="button">Upload new image</button>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="card mb-4">
                    <div class="card-header">Account Details</div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label class="small mb-1" for="inputUsername">Full Name </label>
                                <input class="form-control" id="inputFullname" type="text" placeholder="Enter your Full Name"/>
                            </div>

                            <div class="row gx-3 mb-3">
                            
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputFirstName">CIN </label>
                                    <input class="form-control" id="inputCin" type="text" placeholder="Enter your cin"/>
                                </div>
                        
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLastName">Level</label>
                                    <input class="form-control" id="inputLevel" type="text" placeholder="Enter your level" />
                                </div>

                            </div>

                            <div class="mb-3">
                                <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" />
                            </div>

                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputPhone">Phone number</label>
                                    <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" />
                                </div>
                    
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputBirthday">Birthday</label>
                                    <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday"/>
                                </div>
                            </div>
        
                            <button class="btn btn-primary" type="button">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}