import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronsDown } from 'react-icons/bi';
import './Showcase.css';

const Showcase = () => {
  return (
    <div className='hero h-screen '>
      <div className='h-screen grid place-content-center justify-evenly'>
        <div className='flex flex-col items-center justify-center text-white lg:pt-36'>
          <h1 className='text-2xl md:text-5xl lg:text-5xl font-semibold mb-9'>
            Hello, I'm Julius Hatibu
          </h1>
          <p className='text-lg md:text-3xl lg:text-3xl font-semibold mb-9'>
            Software Engineer
          </p>
          <div className=''>
            <button
              onClick={() => {
                window.open('mailto:juliushatibu@gmail.com');
              }}
              className='btn1 mr-5 px-5 py-2.5 rounded transition-all'
            >
              Email Me
            </button>
            <button className='btn2 mr-5 px-5 py-2.5 rounded transition-all  '>
              <Link to='/projects'>Projects</Link>
            </button>
          </div>
        </div>

        <div className='mt-32'>
          <a
            href='#about'
            className='animate-bounce text-5xl  grid place-items-center'
          >
            <BiChevronsDown color='white' />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Showcase;
