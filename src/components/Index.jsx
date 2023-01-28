import React from "react";
import Bootstrap from '../assets/styles/bootstrap.min.css'
import style from '../assets/styles/Style.css'
import mobilestyle from '../assets/styles/mobile-style.css'
import Image from '../assets/image/header-img2.png';
import Image1 from '../assets/image/img.jpg';

export default function Index(){
    return(    
    <div>
        <header>
        <div class="container-fluid p-0">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
              <i class="fas fa-book-reader fa-2x mx-3"></i>Learn It
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <i class="fas fa-align-right text-light"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="mr-auto"></div>
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">HOME
                    <span class="sr-only"></span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">ABOUT</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Connexion">LOGIN</a>
                </li>
                
              </ul>
            </div>
          </nav>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col-md-5 col-sm-12 h-25">
              <img id="bg-1" src={Image} alt="Book" />
            </div>
            <div class="col-md-7 col-sm-12  text-white">
              <h6>Centre académique de formation</h6>
              <h1>LEARN IT</h1>
              <p>
                Notre ambition ? Accompagner votre ambition jusqu'à la réussite. 
              </p>
            </div>
          </div>
        </div>
        </header>
        <section class="section-1">
      <div class="container text-center" id="about">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="pray">
              <img src={Image1} alt="Pray" class="" />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="panel text-left">
              <h1>Pourquoi choisir Learn It ?</h1>
              <p class="pt-4">
               Notre Centre Académique, a formé, conseillé et accompagné de nombreuses générations de professionnels, managers et décideurs. Notre credo ? Permettre à chacun d’apprendre mieux, partout et à chaque instant pour accompagner les transformations et développer ensemble leurs talents. Engagés à vos côtés, nos experts partagent une connaissance profonde de vos enjeux, de vos métiers et de vos besoins. Formations clé en main ou sur mesure, projets internationaux ou conseils opérationnels, nous sommes là pour créer et déployer avec vous la solution la plus compétitive et la mieux adaptée à vos attentes et besoins. Notre ambition ? Accompagner votre ambition jusqu'à la réussite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-2 container-fluid p-0">
      <div class="cover">
        <div class="overlay"></div>
        <div class="content text-center">
          <h1>Nos chiffres</h1>
        </div>
      </div>
      <div class="container-fluid text-center">
        <div class="numbers d-flex flex-md-row flex-wrap justify-content-center">
          <div class="rect">
            <h1>118</h1>
            <p>Etudiants</p>
          </div>
          <div class="rect">
            <h1>218</h1>
            <p>Formés</p>
          </div>
          <div class="rect">
            <h1>21</h1>
            <p>Instructeurs</p>
          </div>
          <div class="rect">
            <h1>450</h1>
            <p>Total des certifications</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-3 container-fluid p-0 text-center">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h1>Installe notre appli !</h1>

        </div>
      </div>
      <div class="platform row">
        <div class="col-md-6 col-sm-12 text-right">
          <div class="desktop shadow-lg">
            <div class="d-flex flex-row justify-content-center">
              <i class="fas fa-desktop fa-3x py-2 pr-3"></i>
              <div class="text text-left">
                <h3 class="pt-1 m-0">Desktop</h3>
                <p class="p-0 m-0">On website</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 text-left">
          <div class="desktop shadow-lg">
            <div class="d-flex flex-row justify-content-center">
              <i class="fas fa-mobile-alt fa-3x py-2 pr-3"></i>
              <div class="text text-left">
                <h3 class="pt-1 m-0">On Mobile</h3>
                <p class="p-0 m-0">On Play Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
    <div class="container-fluid p-0">
      <div class="row text-left">
        <div class="col-md-5 col-sm-5">
          <h4 class="text-light">About us</h4>
          <p class="text-muted">Learn It, notre ambition ? Accompagner votre ambition jusqu'à la réussite.

</p>
          <p class="pt-4 text-muted">Copyright ©2022 All rights reserved 
          </p>
        </div>
        <div class="col-md-5 col-sm-12">
          <h4 class="text-light">Newsletter</h4>
          <p class="text-muted">Stay Updated</p>
          <form class="form-inline">
            <div class="col pl-0">
              <div class="input-group pr-5">
                <input type="text" class="form-control bg-dark text-white" id="inlineFormInputGroupUsername2" placeholder="Email"/>
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-2 col-sm-12">
          <h4 class="text-light">Follow Us</h4>
          <p class="text-muted">Let us be social</p>
          <div class="column text-light">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>





        </div>
      
    );
}