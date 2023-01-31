import React from "react";

export default function div(){
    return (
        <div>
            <div id="div" class="pt-5 px-3 b-0">
                <div id="profile">
                   
                    <div class="row">
                        <div class="col-sm-12 py-4 text-center">
                            <h6 class="text-uppercase font-ram font-size-16 text-dark">USER </h6><br/>
                            <p class="font-ram font-size-16 text-black-50 pt-3">Téléphone: +212606975306</p><br/>
                            <p class="font-ram font-size-16 text-black-50">Date de naissance: 01-05-2001</p><br/>
                            <p class="font-ram font-size-16 text-black-50">Email: USER@gmail.com</p><br/>
                            <p class="font-ram font-size-16 text-black-50">Adresse: Maroc</p><br/>
                            <a href="/Profile">
                                <button type="button" class="btn btn-dark">Modifier mes informations</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}