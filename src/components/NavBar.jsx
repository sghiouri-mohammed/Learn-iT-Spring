import React from "react";
import Bootstrap from '../assets/styles/bootstrap.min.css'

export default function NavBar()
{
    return (
        <div>
            <div id="header">    
                <div class="row mr-0">
                    <div class="col-2 bgcolor-black">
                        <nav class="primary-nav navbar-expand-md">
                            <div class="site-title text-center text-light py-5">
                                <a class="navbar-brand font-staat" href="#">Learn IT</a>
                            </div>
                            <div class="nabar-nav d-flex flex-column">
                                <a class="nav-item nav-link text-white-50 font-oswald font-size-16 active" href="/">Dashboard</a>
                                <a class="nav-item nav-link text-white-50 font-oswald font-size-16" href="/CoursList">Courses</a>
                                <a class="nav-item nav-link text-white-50 font-oswald font-size-16" href="/QuizList">Quiz</a>
                                <a class="nav-item nav-link text-white-50 font-oswald font-size-16" href="/Profile">Profile</a>
                                <a class="nav-item nav-link text-white-50 font-oswald font-size-16" href="/StudentsList">Students</a>
                                <a class="nav-item nav-link text-white-50 font-oswald font-size-16" href="">Logout</a>
                            </div>
                        </nav>
                    </div>
                </div>
                <button class="toggle-button"><span class="fas fa-bars fa-2x"></span></button>
            </div> 
        </div>
    );
}