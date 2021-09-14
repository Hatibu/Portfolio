import React from 'react'
import { MdLanguage } from 'react-icons/md'
import { MdDevicesOther } from 'react-icons/md'
import { MdViewCompact } from 'react-icons/md'
import { BsBarChart } from 'react-icons/bs'
import { BsPlug } from 'react-icons/bs'
import { FaBezierCurve } from 'react-icons/fa'

const Section = () => {
    return (
        <div className="section">
                  {/*service section */}
                  <div className="service w-full bg-gradient-to-r from-green-400 to-blue-300  pb-20">
                 <div className="service container px-4 mx-auto ">
                   <br />
                  <br />
              <div class="font-bold text-4xl  text-center  ">Offered services</div>
                <div className="sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 mt-20 text-center justify-center ">
                
                    {/*service 1 */}
                <div class="max-w-sm  lg:w-full md:w-full sm:w-full rounded-xl lg:p-10 overflow-hidden shadow-lg bg-white m-1.5">
                    <div class="px-6 py-4">
                        
                    <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <MdLanguage className="w-12 h-12 mt-5 ml-3 " ></MdLanguage>
                        </span>
                        <div class="font-bold text-xl mb-2">UI/UX DESIGN</div>
                        <p class="text-gray-700 text-base">
                        i have experience working with teams to brainstorm and whiteboard concepts,
                         i can create wireframes at varying levels of fidelity, and enjoy working with 
                         devs to build ideas out.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                 
                    </div>
                    </div>
                    {/*service 2*/}
                    <div class="max-w-sm px-4 lg:p-10 lg:w-full md:w-full sm:w-full rounded-xl overflow-hidden shadow-lg bg-white m-1.5">
                    <div class="px-6 py-4">
                    <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <MdDevicesOther className="w-12 h-12 mt-5 ml-3 " ></MdDevicesOther>
                        </span>
                        <div class="font-bold text-xl mb-2">FRONT-END DEV </div>
                        <p class="text-gray-700 text-base">
                        I can build responsive and optmized SPA user interface's by using HTML,
                         CSS, React.js and Firebase 
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                 
                    </div>
                    </div>
                    {/*service 3 */}
                    <div class="max-w-sm px-4 lg:p-10 lg:w-full md:w-full sm:w-full rounded-xl overflow-hidden shadow-lg bg-white m-1.5">
                    <div class="px-6 py-4">
                    <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <MdViewCompact className="w-12 h-12 mt-5 ml-3 " ></MdViewCompact>
                        </span>
                    
                        <div class="font-bold text-xl ">BACK-END DEV</div>
                        <p class="text-gray-700 text-base">
                        I can build scallable and optmized backend service by 
                        using Laravel, Flask and handling databases
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                  
                  
                    </div>
                    </div>
                
                </div>
            </div>
  


             {/*second service section */}
             <div className="service container px-4 mx-auto  ">
                <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 mt-10 text-center justify-center sm:grid-cols-1 ">
                
                    {/*service 1 */}
                <div class="max-w-sm px-4 lg:p-10 lg:w-full md:w-full sm:w-full -xl overflow-hidden rounded-xl shadow-lg bg-white m-1.5">
                    <div class="px-6 py-4">
                        <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <BsPlug className="w-12 h-12 mt-5 ml-3 " ></BsPlug>
                        </span>
                    
                    
                        <div class="font-bold text-xl mb-2">API DEVELOPMENT</div>
                        <p class="text-gray-700 text-base">
                        I can build scallable and optmized REST API's by using Laravel, Flask
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                  
                    </div>
                    </div>
                    {/*service 2*/}
                    <div class="max-w-sm px-4 lg:p-10 lg:w-full md:w-full sm:w-full rounded-xl overflow-hidden shadow-lg bg-white m-1.5">
                    <div class="px-6 py-4">
                    <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <FaBezierCurve className="w-12 h-12 mt-5 ml-3 " ></FaBezierCurve>
                        </span>
                        <div class="font-bold text-xl mb-2">GRAPHICS DESIGN </div>
                        <p class="text-gray-700 text-base">
                        I can build responsive and optmized SPA user interface's by using HTML,
                         CSS, React.js and Firebase 
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                  
                    </div>
                    </div>
                    {/*service 3 */}
                    <div class="max-w-sm px-4 lg:p-10 lg:w-full md:w-full sm:w-full rounded-xl overflow-hidden shadow-lg bg-white m-1.5">
                    <div class="px-6 py-4">
                        <span className="icons inline-block w-28 h-28 px-3 py-1 text-sm hover:bg-blue-400 border-8 border-blue-400 hover:border-blue-200 hover:text-white font-semibold text-gray-700 text-center">
                        <BsBarChart className="w-12 h-12 mt-5 ml-3 " ></BsBarChart>
                        </span>
                   
                        <div class="font-bold text-xl mb-2">DATA ANALYSIS</div>
                        <p class="text-gray-700 text-base">
                        I can build scallable and optmized backend service by 
                        using Laravel, Flask and handling databases
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                    </div>
                    </div>
                
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Section
