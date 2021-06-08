import React from 'react'
import { Link } from 'react-router-dom'
import { MdLanguage } from 'react-icons/md'
import { MdDevicesOther } from 'react-icons/md'
import { MdViewCompact } from 'react-icons/md'
import { BsBarChart } from 'react-icons/bs'
import { BsPlug } from 'react-icons/bs'
const progress = {
    width:'30%'
}
 const Showcase = () => {
    return (
        <>
           <section className="showcase">
               <div className="overlay flex flex-col items-center justify-center text-white">
                   <h1 className="text-5xl mb-5">
                      Hello,I'm  
                    </h1>
                    <h1 className="text-5xl font-semibold mb-9">Julius Hatibu</h1>
                    <p className="mb-6">AND THIS IS MY RESUME</p>
                    <div className="">
                        <Link to="/hire" className="mr-5 bg-indigo-700 p-2 px-4 rounded-full transition-all hover:bg-indigo-900 ">
                            Get started
                            </Link>
                        <Link to="/projects">Projects</Link>
                    </div>
               </div>
               
               </section> 
               {/* about section */}
               <div className=" w-full h-auto bg-gray-100  grid grid-cols-1 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2">
               <div class="bg-white lg:ml-28 shadow  p-6 lg:w-5/6  sm:w-full mt-10">
                   <div className="flex">
                        <img className="rounded h-36 w-44" src="/images/me.jpg" alt="hello" />
                        <div className="font-bold mb-4 mt-0 ml-10 ">
                        <p class=" p-2">Name: Julius P Hatibu</p>
                        <h5 class=" p-2">Profile: Full Stack Developer</h5>
                        <h5 class=" p-2">Email: juliushatibu@gmail.com</h5>
                        <h5 class=" p-2">Phone: (255) 715 620 051</h5>
                         
                        </div>
                       
                   </div>
                   <div className="w-full">
                   <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                            Flask(Python)
                        </span>
                        </div>
                        <div class="text-right">
                        <span class="text-xs font-semibold inline-block text-pink-600">
                            40%
                        </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                        <div style={progress} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                    </div>
                    </div>
                    {/*second progress bar*/}
                    <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            ReactJs(JavaScript)
                        </span>
                        </div>
                        <div class="text-right">
                        <span class="text-xs font-semibold inline-block text-green-600">
                            60%
                        </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                        <div style={progress} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                    </div>
                     {/*third progress bar*/}
                     <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            Laravel(PHP)
                        </span>
                        </div>
                        <div class="text-right">
                        <span class="text-xs font-semibold inline-block text-blue-600">
                            80%
                        </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                        <div style={progress} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                    </div>
                    </div>
                    {/*forth progress bar*/}
                    <div class="relative pt-1">
                    <div class="flex mb-2 items-center justify-between">
                        <div>
                        <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                            Spring Boot(Java)
                        </span>
                        </div>
                        <div class="text-right">
                        <span class="text-xs font-semibold inline-block text-green-600">
                            40%
                        </span>
                        </div>
                    </div>
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                        <div style={progress} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                    </div>
                    </div>
                   </div>
                
                </div>

                <div class="bg-white shadow p-6 lg:w-5/6 mt-10  border-purple-500 sm:w-full ">
                <h5 class="text-3xl font-bold mb-4 mt-0">About Me</h5>
                <p class="text-gray-700 text-lg">
                I am a highly competent web application software developer with professional
                 experience developing a wide range of tools for both frontend and backend for
                  a range of clients. I have proven expertise in building SPA's and API's. 
                  I understand the web app project lifecycle in depth and am very capable 
                  at all aspects of development from project planning to requirements gathering 
                  through to writing code and support                                                    
                    </p>

                    <p class="text-gray-700 text-lg">
                                                                      
                    </p>
                </div>
               </div>
            {/*service section */}
            <div className="w-full bg-gray-100 ">
            <div className="service container px-4 mx-auto ">
                <br />
                <br />
            <div class="font-bold text-4xl  text-center ">WHAT I OFFER</div>
                <div className="sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 mt-20 text-center justify-center sm:grid-cols-1 ">
                
                    {/*service 1 */}
                <div class="max-w-sm  lg:w-full md:w-full sm:w-full rounded overflow-hidden shadow-lg bg-white">
                    <div class="px-6 py-4">
                        
                    <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-500 border-8 border-blue-500 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <MdLanguage className="w-12 h-12 mt-4 ml-3 " ></MdLanguage>
                        </span>
                        <div class="font-bold text-xl mb-2">UI/UX DESIGN</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Download Resume
                    </button>
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Email Me
                    </button>
                    </div>
                    </div>
                    {/*service 2*/}
                    <div class="max-w-sm px-4 lg:w-full md:w-full sm:w-full rounded overflow-hidden shadow-lg bg-white">
                    <div class="px-6 py-4">
                    <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-500 border-8 border-blue-500 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <MdDevicesOther className="w-12 h-12 mt-4 ml-3 " ></MdDevicesOther>
                        </span>
                        <div class="font-bold text-xl mb-2">FRONT-END DEV </div>
                        <p class="text-gray-700 text-base">
                        I can build responsive and optmized SPA user interface's by using HTML,
                         CSS, React.js and Firebase 
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Download Resume
                    </button>
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Email Me
                    </button>
                    </div>
                    </div>
                    {/*service 3 */}
                    <div class="max-w-sm px-4 lg:w-full md:w-full sm:w-full rounded overflow-hidden shadow-lg bg-white">
                    <div class="px-6 py-4">
                    <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-500 border-8 border-blue-500 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <MdViewCompact className="w-12 h-12 mt-4 ml-3 " ></MdViewCompact>
                        </span>
                    
                        <div class="font-bold text-xl mb-2">BACK-END DEV</div>
                        <p class="text-gray-700 text-base">
                        I can build scallable and optmized backend service by 
                        using Node&Express, Flask and handling databases
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Download Resume
                    </button>
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Email Me
                    </button>
                    </div>
                    </div>
                
                </div>
            </div>
  


             {/*second service section */}
             <div className="service container px-4 mx-auto  ">
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 mt-20 text-center justify-center sm:grid-cols-1 ">
                
                    {/*service 1 */}
                <div class="max-w-sm px-4 lg:w-full md:w-full sm:w-full rounded overflow-hidden shadow-lg bg-white">
                    <div class="px-6 py-4">
                        <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-500 border-8 border-blue-500 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <BsPlug className="w-12 h-12 mt-4 ml-3 " ></BsPlug>
                        </span>
                    
                    
                        <div class="font-bold text-xl mb-2">API DEVELOPMENT</div>
                        <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Download Resume
                    </button>
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Email Me
                    </button>
                    </div>
                    </div>
                    {/*service 2*/}
                    <div class="max-w-sm px-4 lg:w-full md:w-full sm:w-full rounded overflow-hidden shadow-lg bg-white">
                    <div class="px-6 py-4">
                    <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-500 border-8 border-blue-500 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <MdDevicesOther className="w-12 h-12 mt-4 ml-3 " ></MdDevicesOther>
                        </span>
                        <div class="font-bold text-xl mb-2">GRAPHICS DESIGN </div>
                        <p class="text-gray-700 text-base">
                        I can build responsive and optmized SPA user interface's by using HTML,
                         CSS, React.js and Firebase 
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Download Resume
                    </button>
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Email Me
                    </button>
                    </div>
                    </div>
                    {/*service 3 */}
                    <div class="max-w-sm px-4 lg:w-full md:w-full sm:w-full rounded overflow-hidden shadow-lg bg-white">
                    <div class="px-6 py-4">
                        <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-500 border-8 border-blue-500 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <BsBarChart className="w-12 h-12 mt-4 ml-3 " ></BsBarChart>
                        </span>
                   
                        <div class="font-bold text-xl mb-2">DATA ANALYSIS</div>
                        <p class="text-gray-700 text-base">
                        I can build scallable and optmized backend service by 
                        using Node&Express, Flask and handling databases
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Download Resume
                    </button>
                    <button className="bg-gray-200 text-black active:bg-lightBlue-600 font-semibold  text-sm px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Email Me
                    </button>
                        
        
                    </div>
                    </div>
                
                </div>
            </div>
            </div>
            
                
        </>
    )
}
export default Showcase