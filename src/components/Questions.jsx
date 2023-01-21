import React from "react";
import yoyo from '../assets/styles/dash-style.css'
export default function Questions(){
    return(
        
        <div>
            <main id="site-main">
                <div class="row mr-0">
                    <div class="offset-md-2 col-md-10 px-0">
                        <section class=" services px-4" id="news">
                            <div class="py-3">
                                <h1 class="text-uppercase font-staat font-size-34"> JEE Quiz </h1>
                            </div>
                            <div class="row">
                                <div class="container mt-5">
                                    <div class="d-flex justify-content-center row">
                                        <div class="col-md-10 col-lg-10">
                                            <div class="border">
                                                <div class="question bg-white p-3 border-bottom">
                                                    <div class="d-flex flex-row justify-content-between align-items-center mcq">
                                                        <h4>JEE Quiz</h4><span>(number of number)</span></div>
                                                </div>
                                                <div class="question bg-white p-3 border-bottom">
                                                    <div class="d-flex flex-row align-items-center question-title">
                                                        <h3 class="text-danger">Q.1</h3>
                                                        <h5 class="mt-1 ml-2">Which of the following country has largest population?</h5>
                                                    </div>
                                                    <div class="ans ml-2">
                                                        <label class="radio"> <input type="radio" name="a" value="brazil"/> <span>Brazil</span>
                                                        </label>  
                                                        <br/>  
                                                        
                                                        <label class="radio"> <input type="radio" name="a" value="Germany"/> <span>Germany</span>
                                                        </label>   
                                                        <br/> 
                                                        <label class="radio"> <input type="radio" name="a" value="Indonesia"/> <span>Indonesia</span>
                                                        </label>  
                                                        <br/> 
                                                        <label class="radio"> <input type="radio" name="a" value="Russia"/> 
                                                            <span>Russia</span>
                                                        </label>    
                                                    </div>
                                                </div>

                                                <div class="question bg-white p-3 border-bottom">
                                                    <div class="d-flex flex-row align-items-center question-title">
                                                        <h3 class="text-danger">Q.2</h3>
                                                        <h5 class="mt-1 ml-2">Which of the following country has largest population?</h5>
                                                    </div>
                                                    <div class="ans ml-2">
                                                        <label class="radio"> <input type="radio" name="d" value="brazil"/> <span>Brazil</span>
                                                        </label>  
                                                        <br/>  
                                                        
                                                        <label class="radio"> <input type="radio" name="d" value="Germany"/> <span>Germany</span>
                                                        </label>   
                                                        <br/> 
                                                        <label class="radio"> <input type="radio" name="d" value="Indonesia"/> <span>Indonesia</span>
                                                        </label>  
                                                        <br/> 
                                                        <label class="radio"> <input type="radio" name="d" value="Russia"/> 
                                                            <span>Russia</span>
                                                        </label>    
                                                    </div>
                                                </div>

                                                <div class="question bg-white p-3 border-bottom">
                                                    <div class="d-flex flex-row align-items-center question-title">
                                                        <h3 class="text-danger">Q.3</h3>
                                                        <h5 class="mt-1 ml-2">Which of the following country has largest population?</h5>
                                                    </div>
                                                    <div class="ans ml-2">
                                                        <label class="radio"> <input type="radio" name="p" value="brazil"/> <span>Brazil</span>
                                                        </label>  
                                                        <br/>  
                                                        
                                                        <label class="radio"> <input type="radio" name="p" value="Germany"/> <span>Germany</span>
                                                        </label>   
                                                        <br/> 
                                                        <label class="radio"> <input type="radio" name="p" value="Indonesia"/> <span>Indonesia</span>
                                                        </label>  
                                                        <br/> 
                                                        <label class="radio"> <input type="radio" name="p" value="Russia"/> 
                                                            <span>Russia</span>
                                                        </label>    
                                                    </div>
                                                </div>

                                                <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                                                    <div></div>

                                                    <button class="btn btn-primary float-right border-success align-items-center btn-success" type="button">Submit
                                                        <i class="fa fa-angle-right ml-2"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </section>    
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </main>

        </div>
    );
}