import React from 'react'



const progress = {
    width:'30%'
}
const About = () => {
   
    return (
        <div className="about">
             <div id="about" className=" w-full lg:Fh-screen bg-gray-100  grid grid-cols-1 lg:grid lg:grid-cols-2 md:gap-6 lg:gap-6 md:grid md:grid-cols-2 lg:p-10 md:p-10 ">
               <div class="bg-white lg:ml-28 shadow  p-6 px-10 lg:w-5/6  w-full lg:mt-10 md:mt-10">
                   <div className="flex">
                        <img className="rounded lg:h-36 md:h-36 lg:w-44 md:w-44 h-0 w-0" 
                        src={'https://firebasestorage.googleapis.com/v0/b/medias-da388.appspot.com/o/me.jpg?alt=media&token=9c2b6623-5a20-4628-9c53-a31df36fc43f'} alt="hello" />
                        <div className="font-bold mb-4 mt-0 ml-10 ">
                        <p class="p-2 lg:p-2 md:p-2">Name: Julius P Hatibu</p>
                        <p class="p-2 lg:p-2 md:p-2">Profile: Full Stack Developer</p>
                        <p class="p-2 lg:p-2 md:p-2">Email: juliushatibu@gmail.com</p>
                        <p class="p-2 lg:p-2 md:p-2">Phone: (255) 715 620 051</p>
                         
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
                            Nodejs(JavaScript)
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

                <div class="bg-white shadow p-6 px-10 lg:w-5/6 w-full lg:mt-10 md:mt-10">
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
      
            
        </div>
    )
}

export default About
