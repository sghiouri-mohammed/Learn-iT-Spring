import React from "react";
import yoyo from '../assets/styles/dash-style.css'
import Image1 from '../assets/news/01.jpg'
import Image2 from '../assets/news/02.jpg'
import Image3 from '../assets/news/03.jpg'

export default function QuizList(){
    return(
        
        <div>
            <main id="site-main">
                <div class="row mr-0">
                    <div class="offset-md-2 col-md-10 px-0">
                        <section class=" services px-4" id="news">
                            <div class="py-3">
                                <h1 class="text-uppercase font-staat font-size-34">Quiz</h1>
                            </div>
                            <div class="row">
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image1} class="card-img-top" alt="image_1"/>
                                        <div class="card-body">
                                        <h5 class="card-title font-ram"><a>Quiz 1 : React</a></h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image2} class="card-img-top" alt="image_1"/>
                                        <div class="card-body">
                                        <h5 class="card-title font-ram"><a>Quiz 2 : JS</a></h5>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image3} class="card-img-top" alt="image_2"/>
                                        <div class="card-body">
                                            <h5 class="card-title font-ram"><a>Quiz 3 : JQuery</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 my-3">
                                    <div class="card border-0" >
                                        <img src={Image2} class="card-img-top" alt="image_2"/>
                                        <div class="card-body">
                                            <h5 class="card-title font-ram"> <a>Quiz 4 : Bootstrap</a> </h5>
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