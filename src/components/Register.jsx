import React from "react";
import tail from '../assets/styles/tailwind.min.css';
import Logo from '../assets/image/logo1.png';
import Header from '../assets/image/registration-bg1.png'
// import Header from '../assets/images/header-img1.png'

export default function Register(){
    return(
        
        <div className="p-5">
            <div id="hole" class="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div class=" flex flex-col items-center">
                    <h1 id="h1-text" class="text-3xl xl:text-1xl font-extrabold">
                        Register
                    </h1>
                    <div class="w-full flex-1 mt-8">

                        <div class="mx-auto max-w-xs">
                        <input
                            class="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email"
                            placeholder="Full Name ..."
                        />
                        <input
                            class="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                            type="date"
                            placeholder="Birthday date ..."
                        />
                        
                        <input
                            class="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                            type="text"
                            placeholder="Branch of studies ..."
                        />
                        <input
                            class="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                            type="text"
                            placeholder="CIN ..."
                        />
                        <input
                            class="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                            type="text"
                            placeholder="Email ..."
                        />
                        <input
                            class="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                            type="text"
                            placeholder="N• Tel ..."
                        />
                        <input
                            class="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-3"
                            type="password"
                            placeholder="Password"
                        /> 
                        <button
                            class="mt-3 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
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
                                Register
                            </span>
                        </button>
                        Already have an account? Sign in!
                        <button
                            class="mt-3 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
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
                                <a href="Connexion" class='text-decoration-none'> Sign in</a>
                            </span>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="flex-1 bg-indigo-100 text-center hidden lg:flex">
                    <div  class="m-5 xl:m-10 w-full bg-contain bg-center bg-no-repeat" >
                        <img src={Header}/>
                    </div>
                </div>
            </div>
        </div>
    );
}