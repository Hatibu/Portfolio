import React from 'react'
import useDarkMode from '../hook/useDarkMode'

 const Projects = () => {
     const [colorTheme, setTheme] = useDarkMode();
    return (
        <>
        <div className="flex justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-800 ">
            <div className="flex-1 max-w-5xl " >
                <div className="col-span-2 lg:col-span-2  lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-6">
                    {/*section 1 */}
                    <div className=" p-4 pr-6 bg-white  rounded-md shadow-2xl mt-10">
                    <img className="rounded-full shadow h-28 w-28 mb-4 border-2 border-gray-200 ml-20" src="/images/me.jpg" alt="hello" />
                        <h1 className="font-bold text-2xl text-center tracking-wider"> Julius Hatibu</h1>
                        <p class="text-center px-2 py-1 my-3 bg-gray-300 rounded-full dark:text-white dark:bg-gray-800">Web Developer</p>
                        <a href="https://firebasestorage.googleapis.com/v0/b/medias-da388.appspot.com/o/Julius%20Hatibu%20Resume.pdf?alt=media&token=4b618d72-8ba2-407e-a000-f34d84d85379" download="name"
                         class="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full dark:text-white dark:bg-gray-800">
                            
                        Download resume</a>
                        <div className="py-4 my-5 bg-gray-00 sytle={{marginLeft: '-1rem', marginRigth:'-1rem'}}">
                            <div className="flex items-center justify-center space-x-2 ">
                                 <span className=" ">Dar es salaam, Tanzania</span>
                                </div>
                                <p className="text-center my-2 ">juliushatibu@gmail.com</p>
                                 <p className="text-center my-2 ">+255 715620051</p>
                                 </div>
                                 <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
                                     <a href="https://github.com/Hatibu">
                                     <svg stroke="currentColor" 
                                     fill="currentColor" stroke-width="0"
                                      viewBox="0 0 1024 1024" class="w-8 h-8 text-black cursor-pointer dark:text-white"
                                       height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z">
                                        </path>
                                        </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/in/julius-hatibu/">
                                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                         className="w-8 h-8 text-blue-800 cursor-pointer" 
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z">
                                        </path>
                                        </svg>
                                        </a>
                                        
                                        <a href="https://www.facebook.com/swar.ozzy/">
                                        <svg stroke="currentColor" fill="currentColor"
                                         stroke-width="0" viewBox="0 0 1024 1024"
                                         className="w-8 h-8 text-blue-500 cursor-pointer"
                                         height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
                                    </svg>
                                    </a>
                                 </div>
                                 <button 
                                  onClick={() => {
                                    window.open("mailto:juliushatibuy@gmail.com");
                                  }}
                                  className="w-8/12 px-5 shadow py-2 my-2 ml-12 text-white rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 focus:outline-none">Email me</button>
                                 
                                 <button onClick={()=> setTheme(colorTheme)}  className="w-8/12 px-5 shadow py-2 my-2 ml-12 text-white rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 focus:outline-none">Dark mode
                                 </button>
                                
                             </div>
                        {/*section 2 */}
                    <div className="dark:bg-black flex flex-col col-span-2 overflow-hidden mb-4 p-4 pr-6 bg-white rounded-md shadow-md  mt-10 ">
                        {/* icons for dark mode and light mode*/}
                    <div classNamne="flex justify-between px-5 py-3 my-3"><span className="text-xl font-bold text-indigo-400 border-b-4 border-indigo-400 md:text-2xl">Projects</span>
                    

                        
                        </div>
                        {/* projects tab */}
                        <div className="flex-col lg:flex md:flex gap-4">
                            <div className="bg-indigo-400 h-32 w-full lg:w-1/3 md:w-1/3 rounded-md">
                                  section 1
                            </div>
                            <div className="bg-red-400 h-32 w-full lg:w-1/3 md:w-1/3  rounded-md">
                                  section 2
                            </div>
                            <div className="bg-gray-400 h-32 w-full lg:w-1/3 md:w-1/3  rounded-md">
                                  section 3
                            </div>
                        
                        </div>
                        
                    </div>
                    

                  

                 
                </div>

            </div>
          
            </div>
        </>
    )
}
export default Projects