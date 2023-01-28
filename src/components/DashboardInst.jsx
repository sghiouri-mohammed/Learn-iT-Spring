import React from "react";
import yoyo from '../assets/styles/dash-style.css'
import Image1 from '../assets/news/01.jpg'
import Image2 from '../assets/news/02.jpg'
import Image3 from '../assets/news/03.jpg'

export default function DashboardInst(){
    return(
        <div>
            <main id="site-main">        
                <div class="row mr-0">
                    <div class="offset-md-2 col-md-10 px-0">
                        <div class="services px-4 ">
                            <div class="do py-5">
                                <h5 class="text-uppercase font-oswald font-size-16 text-muted">Welcome back USER</h5>
                                <h1 class="text-uppercase font-staat font-size-34">DASHBOARD</h1>
                            </div>
                            <div class="row">
                                <div class="col-md-4 col-sm-6 mb-4 text-center">
                                    <div class="panel border p-4">
                                        <span class="icon text-secondary"><i class="fas fa-laptop fa-3x"></i></span>
                                        <h4 class="font-ram py-4">12</h4>
                                        <p class="font-ram font-size-16 text-black-50">Nombre de cours</p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6 mb-4 text-center">
                                    <div class="panel border p-4">
                                        <span class="icon text-secondary"><i class="far fa-laptop fa-3x"></i></span>
                                        <h4 class="font-ram py-4">14</h4>
                                        <p class="font-ram font-size-16 text-black-50">Nombre de quiz</p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6 mb-4 text-center">
                                    <div class="panel border p-4">
                                        <span class="icon text-secondary"><i class="fas fa-laptop fa-3x"></i></span>
                                        <h4 class="font-ram py-4">40</h4>
                                        <p class="font-ram font-size-16 text-black-50">Nombre d'étudiants</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    
                        <div class="news py-5 px-4 bg-light" id="news">
                            <div class="py-3">
                                <h1 class="text-uppercase font-staat font-size-34">Cours</h1>
                            </div>
                            <div class="row">
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image1} class="card-img-top" alt="image_1"/>
                                        <div class="card-body">
                                        <h5 class="card-title font-ram"><a href="/StudentsList">Afficher tous les étudiants</a></h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image2} class="card-img-top" alt="image_1"/>
                                        <div class="card-body d-flex">
                                            <h5 class="card-title font-ram">
                                                <a href="/CoursList"> Afficher tous les cours </a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            </h5>  
                                            <a href="/AddCourse">
                                                <img className="ml-5" src="https://img.icons8.com/ios/35/null/plus-2-math.png"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image3} class="card-img-top" alt="image_2"/>
                                        <div class="card-body d-flex">
                                            <h5 class="card-title font-ram">
                                                <a href="/QuizList">Afficher tous les quiz</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            </h5>
                                            <a href="/AddQuiz">
                                                <img className="ml-5" src="https://img.icons8.com/ios/35/null/plus-2-math.png"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}