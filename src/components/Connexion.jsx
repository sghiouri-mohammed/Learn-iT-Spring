import React from "react";
import connexion from '../assets/styles/connexion.css';
import tail from '../assets/styles/tailwind.min.css';
import Logo from '../assets/image/logo1.png';
import Imago from '../assets/image/connexion.png'

export default function Connexion(){
    function showHidePassword () {
        let paswd = document.getElementById("show-passwd");
        let passwordo = document.getElementById("pwd-value");
        let txt = document.getElementById("txt");
        if (paswd.checked){
          passwordo.type="text";
          txt.innerHTML = "Hide Password";
        }else{
          passwordo.type="password";
          txt.innerHTML = "Show Password";
        }   
      }
    return (
        <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center p-5">
            <div id="hole" class="max-w-screen-l m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div  class="m-5 yu w-full bg-contain bg-center bg-no-repeat">
                        <img src={Imago} />
                    </div>
                </div>
                <div class="lg:w-1/2 xl:w-5/12 p-2 sm:p-12 pt-5">
                    <div class=" flex flex-col items-center">
                        <h1 id="h1-text" class="text-3xl xl:text-1xl font-extrabold">
                    
                            <br/>
                            <p >Sign In </p>
                        </h1>
                        <div class="w-full flex-1 mt-3">
                            <div class="mx-auto max-w-xs">
                                <input
                                    class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                    type="Email or CIN .."
                                    placeholder="Email..."
                                />

                                <input id="pwd-value"
                                    class="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                                    type="password"
                                    placeholder="Password ..."
                                />

                                <div class="mt-2" >
                                    <input id="show-passwd"  type="checkbox" onClick={showHidePassword}/> &nbsp;&nbsp;
                                    <label id="txt" > Show password </label>
                                </div>
                                <button 
                                    class="mt-3 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    
                                    <span class="ml-3">
                                        Log in
                                    </span>
                                </button>
                                Don't have an account yet? Create an account! 
                                <button  
                                    class="mt-3 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                    <svg
                                    class="w-6 h-6 -ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span class="ml-3">
                                        <a href="Register" class="text-decoration-none">
                                        Register
                                        </a>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}