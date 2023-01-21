import React from "react";
import yoyo from '../assets/styles/dash-style.css'
import Image1 from '../assets/news/01.jpg'
import Image2 from '../assets/news/02.jpg'
import Image3 from '../assets/news/03.jpg'

export default function CoursList(){
    return(
        
        <div>
            <main>
                <div class="row mr-0">
                    <div class="offset-md-2 col-md-10 px-0">

                        <section class=" services px-4" id="news">
                            <div class="do py-3">
                                <h1 class="text-uppercase font-staat font-size-34">Cours</h1>
                            </div>
                            <div class="row">
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image2} class="card-img-top" alt="image_1"/>
                                        <div class="card-body">
                                        <h5 class="card-title font-ram"> <a> Cours 1 : React</a></h5> 
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image2} class="card-img-top" alt="image_1"/>
                                        <div class="card-body">
                                        <h5 class="card-title font-ram"> <a>Cours 2 : JS</a></h5>  
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image2} class="card-img-top" alt="image_2"/>
                                        <div class="card-body">
                                            <h5 class="card-title font-ram"><a>Cours 3 : JQuery</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image2} class="card-img-top" alt="image_2"/>
                                        <div class="card-body">
                                            <h5 class="card-title font-ram"> <a> Cours 4 : Bootstrap </a> </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}