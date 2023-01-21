import React from "react";

export default function Footer(){
    return (
        <div>
            <footer id="footer" class="pt-5 px-3">
                <div id="profile">
                    <div class="py-5 px-4">
                        <h1 class="text-uppercase font-staat font-size-34">Profil</h1>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 py-4 text-center">
                            <h6 class="text-uppercase font-ram font-size-16 text-dark">USER El Attar</h6>
                            <p class="font-ram font-size-16 text-black-50 pt-3">Téléphone: +212606975306</p>
                            <p class="font-ram font-size-16 text-black-50">Date de naissance: 01-05-2001</p>
                            <p class="font-ram font-size-16 text-black-50">Email: USER@gmail.com</p>
                            <p class="font-ram font-size-16 text-black-50">Adresse: Maroc</p>
                        
                            <button type="button" class="btn btn-dark">Modifier mes informations</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}