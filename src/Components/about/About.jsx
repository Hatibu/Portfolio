import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className='about'>
      <div className=' w-full lg:flex gap-4 lg:px-20  md:flex  md:p-10 p-4 '>
        <div class='bg-white  shadow mb-4 rounded-lg p-6 px-10 lg:w-5/6  w-full lg:mt-10 md:mt-10'>
          <div className='flex'>
            <img
              className='rounded lg:h-28  lg:w-36 md:w-0 md:h-0 h-0 w-0'
              src={
                'https://firebasestorage.googleapis.com/v0/b/medias-da388.appspot.com/o/me.jpg?alt=media&token=9c2b6623-5a20-4628-9c53-a31df36fc43f'
              }
              alt='hello'
            />
            <div className=' mb-4 mt-0 lg:ml-10 '>
              <p class='p-2 '>Name: Julius Hatibu</p>
              <p class='p-2 '>Profile: Full Stack Developer</p>
              <p class='p-2 '>Email: juliushatibu@gmail.com</p>
              <p class='p-2 '>Phone: (+255) 715 620 051</p>
              <p class='p-2 '>Phone: (+255) 692 554 907</p>
            </div>
          </div>
          <div className='w-full'>
            {/*Programming languages*/}
            <div class='relative pt-1'>
              <p>Programming Languages</p>
              <div class='lg:flex gap-4 mb-2 items-center '>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100'>
                  JavaScript
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100'>
                  TypeScript
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-100'>
                  PHP
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-100'>
                  Python
                </span>
              </div>
            </div>
            {/*framework*/}
            <div class='relative pt-1'>
              <p>Front-End Framework/libraries</p>
              <div class='lg:flex gap-4 mb-2 items-center '>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-100'>
                  ReactJS
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100'>
                  Tailwindcss
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-100'>
                  Bootstrap
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100'>
                  GraphQL
                </span>
              </div>
            </div>
            {/*Back-end programming*/}
            <div class='relative pt-1'>
              <p>Back End Technologies</p>
              <div class='lg:flex gap-4 mb-2 items-center '>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100'>
                  Nodejs
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100'>
                  Express
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-100'>
                  Django
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-100'>
                  Firebase
                </span>
              </div>
            </div>
            {/*Database tools*/}
            <div class='relative pt-1'>
              <p>Database Tools</p>
              <div class='lg:flex gap-4 mb-2 items-center '>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-100'>
                  MongoDB
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-100'>
                  Firebase
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100'>
                  PostgreSQL
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-100'>
                  mysql
                </span>
              </div>
            </div>
            {/*Design tools*/}
            <div class='relative pt-1'>
              <p>Programming Languages</p>
              <div class='lg:flex gap-4 mb-2 items-center '>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100'>
                  Adobe xd
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-100'>
                  Figma
                </span>
                <span class='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-100'>
                  Adobe illustrator
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class='bg-white  shadow mb-4 rounded-lg p-6 px-10 lg:w-5/6  w-full lg:mt-10 md:mt-10'>
          <div className='w-full'>
            <h1 class='text-3xl font-bold mb-4 mt-0'>About Me</h1>
            <p class='text-gray-700 text-lg'>
              Dedicated and efficient Full Stack Developer with 3+ years of
              hands-on experience in designing, developing, and implementing
              applications and solutions using a range of technologies and
              programming languages. Seeking to leverage broad development
              experience and hands-on technical expertise in a challenging role
              as a Full-stack Developer. I am a highly competent web application
              software developer with professional experience developing a wide
              range of tools for both frontend and backend for a range of
              clients. I have proven expertise in building API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
